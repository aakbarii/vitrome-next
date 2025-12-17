import SkillsSection from "../common/SkillsSection";

const Skills = ({ skills }) => {
  return (
    <SkillsSection
      skills={skills}
      title="مهارت ها"
      description={
        <>
          با ترکیبی از تجربه و دانش، مهارت‌های ما تضمین می‌کند که پروژه‌های شما به بهترین نحو انجام شوند.
          <br />
          ما با تخصص خود، توانایی‌هایی فراتر از انتظار را به شما ارائه می‌دهیم تا تجربه‌ای بی‌نظیر و موفق داشته باشید.
        </>
      }
    />
  );
};

export default Skills;
