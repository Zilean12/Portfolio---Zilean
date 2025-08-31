import Image from 'next/image';

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="top-header">
        <h1>Certifications</h1>
      </div>
      <div className="certifications-container">
        <div className="certification-box">
          <h3>Microsoft Certified: Azure Fundamentals</h3>
          <Image src="/AZ900.jpg" alt="Azure Fundamentals Certification" className="certification-img" width={400} height={300} />
        </div>
      </div>
    </section>
  );
}