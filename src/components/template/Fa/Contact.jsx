"use client";

import Swal from "sweetalert2";
import ContactSection from "../common/ContactSection";

const Contact = ({ services, user, number, email, address, name }) => {
  const handleSubmit = async (formData) => {
    try {
      const response = await fetch("https://api.myresome.ir/api/SendMassage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          title: "پیام شما ارسال شد",
          text: `فرم شما به ${name} ارسال شد.`,
          icon: "success",
          timer: 3000,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          title: "خطا در ارسال پیام",
          text: "لطفاً دوباره تلاش کنید.",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "خطا",
        text: "مشکلی در ارتباط با سرور پیش آمد.",
        icon: "error",
      });
    }
  };

  return (
    <ContactSection
      services={services}
      user={user}
      number={number}
      email={email}
      address={address}
      name={name}
      title="همکاری با ما"
      description={
        <>
          همکاری با ما به معنای تجربه‌ای متفاوت و سازنده است.
          <br />
          با تعهد به کیفیت و دقت، همراهی شما را به یک مسیر موفق و رضایت‌بخش تبدیل می‌کنیم
          <br />
          با هم می‌توانیم به اهداف بزرگ‌تری دست یابیم و پروژه‌های موفقیت‌آمیزی خلق کنیم.
        </>
      }
      submitText="ارسال پیام"
      placeholders={{
        firstName: "نام",
        lastName: "نام خانوادگی",
        email: "ایمیل",
        phone: "شماره تماس",
        service: "نوع خدمات",
        message: "متن",
      }}
      onSubmit={handleSubmit}
      isRTL
    />
  );
};

export default Contact;
