import HeaderFa from "../../components/layout/one/HederFa";
import HeroFa from "../../components/template/Fa/HeroFa";
import Contact from "../../components/template/Fa/Contact";
import Portfolio from "../../components/template/Fa/Portfolio";
import Resume from "../../components/template/Fa/Resume";
import Services from "../../components/template/Fa/Services";
import Skills from "../../components/template/Fa/Skills";
import Testimonial from "../../components/template/Fa/Testimonial";
import React from "react";

function Home({ data , darkStatus }) {

  return (
    <>
      <HeaderFa darkStatus={darkStatus} email={data?.information?.email} />
      <HeroFa
        links={data?.links}
        counters={data?.counters}
        information={data?.information}
      />
      <Services services={data?.services} />
      <Skills skills={data?.skills} />
      <Resume education={data?.education} resumes={data?.resomes} />
      <Portfolio projects={data?.projects} />
      <Testimonial comments={data?.comments} />
      <Contact
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

export default Home;
