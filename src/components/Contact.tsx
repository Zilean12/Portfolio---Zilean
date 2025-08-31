'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    emailjs: {
      init: (publicKey: string) => void;
      send: (serviceId: string, templateId: string, templateParams: Record<string, string>) => Promise<{ status: number; text: string }>;
    };
  }
}

export default function Contact() {
  useEffect(() => {
    // EmailJS initialization
    if (typeof window !== 'undefined' && window.emailjs) {
      window.emailjs.init("9mg3dYY7PXR3SlPp9");
    }
  }, []);

  return (
    <section className="section" id="contact">
      <div className="top-header">
        <h1>Get in touch</h1>
      </div>
      <div className="row">
        <div className="col">
          <div className="contact-info">
            <h2>Find Me <i className="uil uil-corner-right-down"></i></h2>
            <p><i className="uil uil-envelope"></i> Email: aryansharma4844@gmail.com</p>
            <p><i className="uil uil-phone"></i> Phone: +91-9960765259</p>
          </div>
        </div>
      </div>
    </section>
  );
}