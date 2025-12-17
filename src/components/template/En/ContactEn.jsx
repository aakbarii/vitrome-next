"use client";

import ContactSection from "../common/ContactSection";

const Contact = ({ services, user, number, email, address, name }) => {
  const handleSubmit = async (formData) => {
    // Simple client alert to match previous behavior
    alert(`Your message has been sent to ${name}`);
    console.log("Form data:", formData);
  };

  return (
    <ContactSection
      services={services}
      user={user}
      number={number}
      email={email}
      address={address}
      name={name}
      title="Let's work together!"
      description="I design and code beautifully simple things and I love what I do. Just simple like that!"
      submitText="Send Message"
      placeholders={{
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        phone: "Phone Number",
        service: "Choose Service",
        message: "Message",
      }}
      onSubmit={handleSubmit}
    />
  );
};

export default Contact;
