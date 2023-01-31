import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Doctor Service BD</title>
        <meta
          name="description"
          content="Doctor Service BD. We are committed to serve you with better Health Care. Welcome to
              you our Doctor Service BD website to take the services and serial
              of all expert and experienced doctors in Rajshahi."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://i.ibb.co/3YJdzZ2/pexels-pixabay-236380.jpg")`,
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-base-100">
            <h3 className="mb-5 text-3xl font-bold">
              Privacy Policy for doctorservicebd.com
            </h3>
            <p className="mb-5">
              Introduction: Doctor Service BD is committed to protecting the
              privacy and security of our users personal information. This
              Privacy Policy outlines the types of information we collect, how
              it is used, and the steps we take to ensure its protection.
              Information Collection: We collect information from users when
              they register on our website, place an order, or fill out a form.
              The information collected may include name, email address, mailing
              address, phone number, and credit card information. Use of
              Information: The information collected is used to improve our
              website and services, process transactions, respond to inquiries,
              and send promotional emails. We may also use the information to
              contact users in the event of a change to our Privacy Policy or
              website terms of use. Information Sharing: We do not sell, trade,
              or otherwise transfer to outside parties any personally
              identifiable information. We may release information when required
              by law or when necessary to protect our rights and property. Data
              Security: We take appropriate measures to protect against
              unauthorized access to or unauthorized alteration, disclosure, or
              destruction of data. This includes using secure servers and
              encryption technology. Cookies: Our website uses cookies to store
              information about visitors preferences and to record user-specific
              information on visits and pages the user views. This information
              is used to improve the website and services. Third-party links:
              Our website may contain links to other sites. We are not
              responsible for the privacy practices of other sites and encourage
              users to read the privacy policies of each website they visit.
              Changes to Privacy Policy: We reserve the right to make changes to
              this Privacy Policy at any time. We will notify users of any
              changes by posting the updated policy on our website. Contact Us:
              If you have any questions or concerns about our Privacy Policy,
              please contact us at [Contact Information]. Effective Date:
              14/02/2023
            </p>
            <Link href={'/'}>
              <button className="btn btn-accent">Home</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
