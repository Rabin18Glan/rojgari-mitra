import User from '@/models/userModel';
import nodemailer from 'nodemailer';
import bcryptjs from 'bcryptjs';

// type SendMail= {
//     email: String,
//     emailType: String,
//     userId: String
// }

export const sendEmail = async ({ email, emailType, userId }: any) => {
    try {
        // Hash the user ID to create a token
        const hashedToken = await bcryptjs.hash(userId.toString(), 10);
        console.log(`Hashed token: ${hashedToken}`);
        
        // Update the user document with the token and expiry time
        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId, {
                verifyToken: hashedToken,
                verifyTokenExpiry: Date.now() + 3600000, // 1 hour
            });
        } else if (emailType === 'RESET') {
            await User.findByIdAndUpdate(userId, {
                forgotPasswordToken: hashedToken,
                forgotPasswordTokenExpiry: Date.now() + 3600000, // 1 hour
            });
        }

        // Verify environment variable
        if (!process.env.DOMAIN) {
            throw new Error("DOMAIN environment variable is not set");
        }
        console.log(`DOMAIN: ${process.env.DOMAIN}`);

        // Create the nodemailer transporter
        const transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port:587 ,
            auth: {
                user: "99902069aa28e4",
                pass: "f3da0c99e681a2", // Ensure this is correct
            },
            connectionTimeout: 10000, // 10 seconds
        });

        // Define email content based on email type
        const verifyMessage = `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to verify your email or copy and paste the link below in your browser.<br>${process.env.DOMAIN}/verifyemail?token=${hashedToken}</p>`;
        const resetPasswordMessage = `<p>Click <a href="${process.env.DOMAIN}/resetpassword?token=${hashedToken}">here</a> to reset your password or copy and paste the link below in your browser.<br>${process.env.DOMAIN}/resetpassword?token=${hashedToken}</p>`;

        const mailOptions = {
            from: 'robinjs@gmail.com', // sender address
            to: email, // list of receivers
            subject: emailType === 'VERIFY' ? 'Verify your email' : 'Reset your password', // Subject line
            html: emailType === "VERIFY" ? verifyMessage : resetPasswordMessage, // html body
        };

        console.log("Sending email...");
        console.log(mailOptions);

        // Send the email
        const mailResponse = await transport.sendMail(mailOptions).catch(err => {
            console.error("Error sending email:", err);
            throw err;
        });
        console.log("Sending email successful", mailResponse);

        return mailResponse;
    } catch (error:any) {
        console.error("Error in sendEmail function:", error.message);
        throw new Error(error.message);
    }
};
