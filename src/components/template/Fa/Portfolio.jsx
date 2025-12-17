import PortfolioSection from "../common/PortfolioSection";

const Portfolio = ({ projects }) => {
  return (
    <PortfolioSection
      projects={projects}
      title="پروژه های اخیر"
      description={
        <>
          ما تلاش کرده‌ایم تا با ترکیبی از خلاقیت و تخصص، نتایج بی‌نظیری برای مشتریان خود به ارمغان بیاوریم.
          <br />
          با همکاری نزدیک و تمرکز بر جزئیات، پروژه‌های موفق و منحصر به فردی را به سرانجام رسانده‌ایم.
        </>
      }
    />
  );
};

export default Portfolio;