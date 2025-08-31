export default function Education() {
  return (
    <section className="section" id="education">
      <div className="top-header">
        <h1>Education</h1>
      </div>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Bachelor of Technology in Computer Science</h3>
            <p>NIIT UNIVERSITY, Rajasthan</p>
            <span className="year-range">2021 - Present</span>
            <br />
            <div className="education-details">
              <ul>
                <li>Specialization in <strong>Big Data Engineering</strong></li>
                <li><strong>Relevant Coursework:</strong> Data Structures, Algorithms, Data Lakes, Database Management, Software Engineering</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h2>Poddar Brio International School, Badlapur</h2>
            <p>Class 12</p>
            <span className="year-range">2020 - 2021</span>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h2>Poddar Brio International School, Badlapur</h2>
            <p>Class 10</p>
            <span className="year-range">2018 - 2019</span>
          </div>
        </div>
      </div>
    </section>
  );
}