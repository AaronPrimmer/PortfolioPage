import resume from "../data/resume.json";

export default function Resume() {
  return (
    <>
      <div className="resume-main">
        <div className="resume-header">
          <div className="resume-info">
            <h2>{resume[0].name}</h2>
            <p>{resume[0].email}</p>
            <p>
              <a href={resume[0].linkedin}>
                <img
                  src="/images/linkedInLogo.png"
                  alt="LinkedIn"
                  className="logo-images"
                />
              </a>{" "}
              <a href={resume[0].github}>
                <img
                  src="/images/githubLogo.png"
                  alt="GitHub"
                  className="logo-images"
                />
              </a>
            </p>
            <p></p>
            <h5>Objective</h5>
            <p>{resume[0].objective}</p>
            <h3>Education</h3>
            {resume[0].education.map((edu, index) => (
              <div key={index}>
                <h5>{edu.degree}</h5>
                <p>{edu.institution}</p>
                <p>
                  {edu.startDate} - {edu.endDate}
                </p>
              </div>
            ))}
          </div>
          <div className="resume-summary">
            <h3>Summary</h3>
            <p>{resume[0].summary}</p>
            <div className="resume-details">
              <div>
                <h3>Skills</h3>
                <ul className="resume-ul">
                  {resume[0].skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Experience</h3>
                {resume[0].experience.map((job, index) => (
                  <div key={index}>
                    <h5>{job.position}</h5>
                    <p>{job.company}</p>
                    <p>
                      {job.startDate} - {job.endDate}
                    </p>
                    <p>{job.duration}</p>
                    <p>{job.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="resume-education"></div>
          </div>
        </div>
      </div>
    </>
  );
}
