import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const articleStyle =
    "p-5 border border-solid border-transparent text-center rounded-2xl hover:bg-transparent hover:border-transparent";
  const contactOptionIcon = "text-2xl mb-2";
  const contactOptionIconAnchor = "mt-3 inline-block text-sm";
  const inputTextarea =
    " w-full p-6 rounded-lg bg-transparent border border-solid border-slate-400 resize-none text-white";
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container w-[58%] grid grid-cols-[30%,58%] gap-[12%] max-[1000px]:grid-cols-1 max-[1000px]:gap-8 max-[600px]:w-[90%]">
        <div className=" flex flex-col gap-5">
          <article className={articleStyle}>
            <MdOutlineMail className={contactOptionIcon} />
            <h4>Email</h4>
            <h5>Adeyemimuaz1@gmail.com</h5>
            <a
              href="mailto:Adeyemimuaz1@gmail.com"
              target="_blank"
              className={contactOptionIconAnchor}
            >
              Send a message
            </a>
          </article>
          <article className={articleStyle}>
            <RiMessengerLine className={contactOptionIcon} />
            <h4>Messenger</h4>
            <h5>Adeyemimuaz1@gmail.com</h5>
            <a
              href="mailto:Adeyemimuaz1@gmail.com"
              target="_blank"
              className={contactOptionIconAnchor}
            >
              Send a message
            </a>
          </article>
          <article className={articleStyle}>
            <BsWhatsapp className={contactOptionIcon} />
            <h4>WhatsApp</h4>
            <h5>Adeyemimuaz1@gmail.com</h5>
            <a
              href="mailto:Adeyemimuaz1@gmail.com"
              target="_blank"
              className={contactOptionIconAnchor}
            >
              Send a message
            </a>
          </article>
        </div>

        <form className="flex flex-col gap-5">
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
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
