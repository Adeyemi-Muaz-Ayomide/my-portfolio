import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const articleStyle =
    "bg-slate-400 p-4 border border-solid border-transparent transition-all duration-500 ease-in text-center rounded-2xl hover:bg-transparent hover:border-slate-300 dark:bg-[#292524] dark:hover:bg-transparent";
  const contactOptionIcon = "text-2xl mb-2 text-indigo-500";
  const contactOptionIconAnchor =
    "mt-3 inline-block text-sm font-bold font-poppins dark:text-slate-300";
  const inputTextarea =
    " w-full p-6 rounded-lg bg-transparent border border-solid border-slate-400 resize-none text-black dark:text-slate-300";
  return (
    <section id="contact" className="my-0">
      <h1 className=" mb-12 mt-0 ">Contact Me</h1>

      <div className="container w-[70%] grid grid-cols-[40%,58%] gap-[5%] max-[1000px]:grid-cols-1 max-[1000px]:gap-8 max-[600px]:w-[90%]">
        <div className=" flex flex-col gap-5">
          <article className={articleStyle}>
            <MdOutlineMail className={contactOptionIcon} />
            <h4 className="dark:text-yellow-100 font-Inter font-bold">Email</h4>
            <h5 className="text-slate-700">Adeyemimuaz1@gmail.com</h5>
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
            <h4 className="dark:text-yellow-100 font-Inter font-bold">
              Messenger
            </h4>
            <h5 className="text-slate-700">Adeyemimuaz1@gmail.com</h5>
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
            <h4 className="dark:text-yellow-100 font-Inter font-bold">
              WhatsApp
            </h4>
            <h5 className="text-slate-700">Adeyemimuaz1@gmail.com</h5>
            <a
              href="mailto:Adeyemimuaz1@gmail.com"
              target="_blank"
              className={contactOptionIconAnchor}
            >
              Send a message
            </a>
          </article>
        </div>

        <form className="flex flex-col gap-4 mt-1">
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
        <a
          href="#header"
          className=" relative right-[-55rem] bottom-20 font-light text-base rotate-90 max-[600px]:hidden dark:text-slate-300 dark:hover:dark:text-slate-700"
        >
          Back To Top
        </a>
      </div>
    </section>
  );
};

export default Contact;
