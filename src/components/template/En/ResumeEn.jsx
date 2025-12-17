import ResumeSection from "../common/ResumeSection";

const Resume = ({ education, resumes }) => {
  return (
    <ResumeSection
      education={education}
      resumes={resumes}
      experienceTitle="My Experience"
      educationTitle="My Education"
    />
  );
};

export default Resume;
