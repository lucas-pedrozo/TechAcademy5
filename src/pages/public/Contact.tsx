import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_kehdmv1", // Service ID
        "template_cnx6jg6", // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "ezw7bj20CfvyUEfMm" // User ID
      )
      .then(
        () => { // Ignore 'response' by using '_'
          alert("Email enviado com sucesso!");
          setFormData({ email: "", name: "", message: "" });
        },
        (error) => {
          alert("Erro ao enviar email: " + error.text);
        }
      );
  };

  return (
    <section className="m-auto max-w-[630px] px-[10px] py-[6em]">
      <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-xl border-[1px] border-white p-[20px] w-full rounded-[20px] shadow-[0px_2px_10px_rgba(0,0,0,0.6)] animate-once animate-duration-600 animate-ease-out animate-fade-up">
        <h2
          className="text-[2.5rem] font-bold text-center pt-[10px] pb-[30px]"
          style={{ letterSpacing: "6px" }}
        >
          CONTACT
        </h2>
        <form
          onSubmit={sendEmail}
          className="flex flex-col gap-[20px] animate-once animate-duration-600 animate-ease-out animate-fade-up"
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-[rgba(255,255,255,0.1)] backdrop-blur-xl border-[1px] border-white py-[8px] px-[20px] rounded-[40px] placeholder-white text-white font-medium animate-fade animate-once animate-duration-500 animate-delay-200 animate-normal placeholder:tracking-wide focus:outline-none focus:border-white"
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-[rgba(255,255,255,0.1)] backdrop-blur-xl border-[1px] border-white py-[8px] px-[20px] rounded-[40px] placeholder-white text-white font-medium animate-fade animate-once animate-duration-500 animate-delay-250 animate-normal placeholder:tracking-wide focus:outline-none focus:border-white"
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full bg-[rgba(255,255,255,0.1)] backdrop-blur-xl border-[1px] border-white py-[8px] px-[20px] rounded-[20px] min-h-[280px] placeholder-white text-white font-medium animate-fade animate-once animate-duration-500 animate-delay-300 animate-normal placeholder:tracking-wide focus:outline-none focus:border-white"
          ></textarea>
          <div className="flex justify-end pt-[10px]">
            <button
              type="submit"
              className="bg-white text-black shadow-[0_2px_8px_rgba(0,0,0,0.6)] hover:shadow-[0_2px_8px_rgba(255,255,255,0.6)] transition duration-500 transform hover:scale-105 px-[20px] py-[8px] font-bold text-[1rem] rounded-[40px] cursor-pointer animate-fade animate-once animate-duration-500 animate-delay-450 animate-normal"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
