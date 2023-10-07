import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_vvesv5z",
          "template_j21y54f",
          form.current,
          "SgRLKZfrnY3png9eP"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      form.current.reset();
    }
  };

  const inputTextarea =
    " w-full p-6 rounded-lg bg-transparent border border-solid border-slate-400 resize-none text-black dark:text-slate-300";
  return (
    <form className="flex flex-col gap-4 mt-1" ref={form} onSubmit={sendEmail}>
      <input
        type="text"
        name="name"
        placeholder="Your Full Name"
        className={inputTextarea}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className={inputTextarea}
        required
      />
      <textarea
        name="message"
        rows={7}
        placeholder="Your Message"
        className={inputTextarea}
        required
      ></textarea>
      <button type="submit" className="btn btn-primary mb-4">
        Send Message
      </button>
    </form>
  );
};

export default Form;
