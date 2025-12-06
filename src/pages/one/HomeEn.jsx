import HeaderEn from "../../components/layout/one/HederEn";
import ContactEn from "../../components/template/En/ContactEn";
import HeroEn from "../../components/template/En/HeroEn";
import PortfolioEn from "../../components/template/En/PortfolioEn";
import ResumeEn from "../../components/template/En/ResumeEn";
import ServicesEn from "../../components/template/En/ServicesEn";
import SkillsEn from "../../components/template/En/SkillsEn";
import TestimonialEn from "../../components/template/En/TestimonialEn";
import React from "react";

function HomeEn({ data , darkStatus }) {
  return (
    <>
      <HeaderEn email={data?.information?.email} />
      <HeroEn
        links={data?.links}
        counters={data?.counters}
        information={data?.information}
      />
      <ServicesEn services={data?.services} />
      <SkillsEn skills={data?.skills} />
      <ResumeEn education={data?.education} resumes={data?.resomes} />
      <PortfolioEn projects={data?.projects} />
      <TestimonialEn comments={data?.comments} />
      <ContactEn
        name={data?.information?.name}
        services={data?.services}
        user={data?.user}
        address={data?.information?.address}
        email={data?.information?.email}
        number={data?.information?.number}
      />
    </>
  );
}

export default HomeEn;
