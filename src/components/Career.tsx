import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* AWS Internship */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AWS AI-ML Virtual Internship</h4>
                <h5>AWS Academy</h5>
              </div>
              <h3>Sep 2023 – Nov 2023</h3>
            </div>
            <p>
              Worked on data preprocessing, feature engineering and machine
              learning model training. Learned end-to-end ML workflows and
              evaluated model performance using cloud-based AI tools.
            </p>
          </div>

          {/* Google Internship */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Generative AI Virtual Internship</h4>
                <h5>Google</h5>
              </div>
              <h3>Jul 2024 – Sep 2024</h3>
            </div>
            <p>
              Explored generative AI concepts, large language models and prompt
              engineering. Built AI-driven use cases and experimented with
              real-world applications of LLM technologies.
            </p>
          </div>

          {/* Nvidia Training */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI / ML Training</h4>
                <h5>Nvidia</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed 80-hour training focused on machine learning concepts,
              model development, and AI application building using modern ML
              tools and frameworks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;