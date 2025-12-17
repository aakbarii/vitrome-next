import TestimonialsSection from "../common/TestimonialsSection";

const Testimonial = ({ comments }) => {
  return (
    <TestimonialsSection
      comments={comments}
      title="داستان های مشتریان ما"
      description={
        <>
          هر داستان یک سفر است که با همکاری و تلاش مشترک به دست آمده است.
          <br />
          با داستان‌های مشتریان ما، به عمق تجربه‌های الهام‌بخش آن‌ها می‌پردازیم.
        </>
      }
      isRTL
    />
  );
};

export default Testimonial;
