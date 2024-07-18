import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

function Footer() {
  return (
    <>
      <footer className="bg-black text-white p-10 w-full rounded-sm flex flex-col md:flex-row md:justify-between items-start md:items-center gap-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between w-full md:w-auto gap-5">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">RojgariMitra</h2>
            <p className="mt-2">Connecting Opportunities with Talent</p>
          </div>
          <div className="flex justify-center md:justify-start space-x-6">
            <Link href="/" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </Link>
            <Link href="/" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </Link>
            <Link href="/" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </Link>
            <Link href="/" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between w-full md:w-auto gap-5 md:gap-10">
          <div className="text-center md:text-left">
            <h3 className="font-semibold">Contact Us</h3>
            <p className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faEnvelope} />{' '}
              <a href="mailto:contact@rojgarimitra.com">contact@rojgarimitra.com</a>
            </p>
            <p className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faPhone} />{' '}
              <a href="tel:+9771234567890">+977 123-456-7890</a>
            </p>
          </div>
          <div className="text-center md:text-right mt-4 md:mt-0">
            <nav className="space-x-4">
              <Link href="/" className="text-gray-400 hover:text-white">
                Home
              </Link>
              <Link href="/" className="text-gray-400 hover:text-white">
                About
              </Link>
              <Link href="/" className="text-gray-400 hover:text-white">
                Services
              </Link>
              <Link href="/" className="text-gray-400 hover:text-white">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </footer>
      <p className="flex justify-center py-4">&copy; 2024 RojgariMitra. All rights reserved.</p>
    </>
  );
}

export default Footer;
