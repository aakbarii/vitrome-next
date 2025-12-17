import PortfolioSection from "../common/PortfolioSection";

const Portfolio = ({ projects }) => {
  return (
    <PortfolioSection
      projects={projects}
      title="My Recent Works"
      description="We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers."
    />
  );
};

export default Portfolio;