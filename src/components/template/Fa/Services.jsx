import ServicesSection from "../common/ServicesSection";

const Services = ({ services }) => {
  return (
    <ServicesSection
      services={services}
      title="خدمات با کیفیت من"
      description={
        <>
          ارائه خدمات با کیفیت ما، تجربه‌ای متفاوت و رضایت‌بخش برای شما فراهم می‌کند.
          <br /> ما با دقت و توجه بهترین خدمات را ارائه می‌کنیم تا شما همیشه از همکاری با ما لذت ببرید.
        </>
      }
    />
  );
};

export default Services;
