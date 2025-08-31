'use client';

import Image from 'next/image';

export default function Hero() {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/AryanSharma_Resume.pdf';
    link.download = 'AryanSharma_Resume.pdf';
    link.click();
  };

  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>Hello,</span>
        </div>
        <div className="featured-name">
          <p>I&apos;m Aryan Sharma</p>
        </div>
        <div className="featured-text-info">
          <p>Passionate and skilled full-stack developer with a deep love for graphic design and frontend design,
            enabling me to create visually stunning and intuitive user interfaces, Managing data efficiently and building scalable web applications</p>
        </div>
        <div className="featured-text-btn">
          <button className="btn" onClick={downloadCV}>
            Download CV <i className="uil uil-file-alt"></i>
          </button>
        </div>
        <div className="social_icons">
          <a href="https://www.linkedin.com/in/aryan-sharma-196a22233/" className="icon" target="_blank" rel="noopener noreferrer">
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a href="https://github.com/Zilean12" className="icon" target="_blank" rel="noopener noreferrer">
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <Image src="/01.jpeg" alt="avatar" width={400} height={400} />
        </div>
      </div>
    </section>
  );
}