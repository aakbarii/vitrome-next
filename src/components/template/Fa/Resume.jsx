import ResumeSection from "../common/ResumeSection";

const Resume = ({ education, resumes }) => {
  return (
    <ResumeSection
      education={education}
      resumes={resumes}
      experienceTitle="سابقه کاری من"
      educationTitle="تحصیلات من"
    />
  );
};

export default Resume;
