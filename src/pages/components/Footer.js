import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../images/logo.png';
const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <span className="footer-title">Services</span>
          <Link href={'/allDoctors'}>Doctors</Link>
          <Link href={'/allDiagnostics'}>Diagnostics</Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link href={'/about'}>About Us</Link>
          <Link
            href={'https://www.linkedin.com/in/md-shafayat-islam-97000110b/'}
            target="_blank"
            rel="referrer">
            Developer
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link href={'/privacyPolicy'}>Privacy policy</Link>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <div className="items-center grid-flow-col">
          <Link href={'/'}>
            <Image className="w-12" src={logo} alt="Doctor Service BD"></Image>
          </Link>
          <p>
            Doctor Service BD. <br />
            Your trusted health care partner
          </p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <Link
              href={'https://www.youtube.com/channel/UC8VuSGDxd78Sjg06PNpSwfA'}
              target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-red-500">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </Link>
            <Link
              href={'https://www.facebook.com/doctorservicebd'}
              target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-primary-focus">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
