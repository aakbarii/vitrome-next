import TestimonialsSection from "../common/TestimonialsSection";

const Testimonial = ({ comments }) => {
  return (
    <TestimonialsSection
      comments={comments}
      title="My Client's Stories"
      description="Empowering people in a new digital journey with my super services"
    />
  );
};

export default Testimonial;