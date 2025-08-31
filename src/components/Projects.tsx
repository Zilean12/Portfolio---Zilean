export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="top-header">
        <h1>Projects</h1>
      </div>
      <div className="project-container">
        <div className="project-box">
          <i className="uil uil-chart-line"></i>
          <h3>Olympic Data Analytics</h3>
          <label>Tokyo Olympic 2021 Data</label>
          <label>Jun 2024 - July 2024</label>
          <div className="project-details">
            <ul>
              <li>Demonstrated a data engineering workflow using Azure services on Tokyo 2021 Olympics data.</li>
              <li>Extracted data from an API.</li>
              <li>Ingested data into Azure Data Lake Storage using Azure Data Factory.</li>
              <li>Transformed data using Apache Spark in Azure Databricks.</li>
              <li>Analyzed data with Synapse Analytics.</li>
              <li>Efficiently processed and transformed Olympic data, generating insightful visualizations and analysis.</li>
            </ul>
            <div className="project-links">
              <a href="https://github.com/Zilean12/Olympic-Data-Analytics.git" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
        <div className="project-box">
          <i className="uil uil-briefcase-alt"></i>
          <h3>Digital Marketplace</h3>
          <label>Marketplace for Used Furniture</label>
          <label>Jan 2024 - May 2024</label>
          <div className="project-details">
            <ul>
              <li>Built a full-stack web application using the MERN stack.</li>
              <li>Website has major features like Seller and Buyer Dashboard, Product Filter, Auth, JWT.</li>
              <li>Developed Firebase authentication for secure user access.</li>
              <li>Implemented JWT tokens for maintaining user sessions.</li>
              <li>Engineered intuitive user interfaces with image uploads and furniture listing management.</li>
              <li>Orchestrated integration of payment gateways and advanced search functionalities.</li>
            </ul>
            <div className="project-links">
              <a href="https://github.com/Rpandey010/FurniHub.co.git" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://furnihub-co.netlify.app/" target="_blank" rel="noopener noreferrer">Live Website</a>
            </div>
          </div>
        </div>
        <div className="project-box">
          <i className="uil uil-users-alt"></i>
          <h3>Vegetation Recognition Using YOLO</h3>
          <label>Object Detection Using YOLO</label>
          <label>Jan 2024 - May 2024</label>
          <div className="project-details">
            <ul>
              <li>Developed an application for vegetation recognition using YOLO (You Only Look Once) object detection.</li>
              <li>Features include object detection, custom training, integration, real-time processing, and user interface design.</li>
            </ul>
          </div>
        </div>
        <div className="project-box">
          <i className="uil uil-wrench"></i>
          <h3>Smart Laundry Management System</h3>
          <label>IoT Smart LMS</label>
          <label>May 2024 - June 2024</label>
          <div className="project-details">
            <ul>
              <li>Developed an IoT-based Smart Laundry Management System (LMS) for efficient laundry management.</li>
              <li>Features include IoT integration, remote monitoring, data analytics, notifications, energy efficiency, and maintenance alerts.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}