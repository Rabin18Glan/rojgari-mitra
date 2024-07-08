import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

function Footer() {
  return (
    <>
      <footer className="bg-black text-white p-10 w-full rounded-xl flex flex-col items-start gap-5">
        <div>
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">RojgariMitra</h2>
            <p className="mt-2">Connecting Opportunities with Talent</p>
          </div>
          <div className="flex space-x-6">
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
        <div>
          <div className="text-center md:text-left">
            <h3 className="font-semibold">Contact Us</h3>
            <p className="flex gap-5 items-center font-bold">
              <FontAwesomeIcon icon={faEnvelope} height={30} width={50} />{' '}
              <a href="mailto:contact@rojgarimitra.com">contact@rojgarimitra.com</a>
            </p>
            <p className="flex gap-5 items-center">
              <FontAwesomeIcon icon={faPhone} height={30} width={50} />{' '}
              <a href="tel:+9771234567890">+977 123-456-7890</a>
            </p>
          </div>
          <div className="text-center md:text-right mt-4 md:mt-0">
            <nav className="space-x-4">
              <a href="/" className="text-gray-400 hover:text-white">
                Home
              </a>
              <a href="/" className="text-gray-400 hover:text-white">
                About
              </a>
              <a href="/" className="text-gray-400 hover:text-white">
                Services
              </a>
              <a href="/" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </footer>
      <p className="flex justify-center">&copy; 2024 RojgariMitra. All rights reserved.</p>
    </>
  );
}

export default Footer;
