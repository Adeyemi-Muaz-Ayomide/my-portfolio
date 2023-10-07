import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import Form from "./Form";

const Contact = () => {
  const articleStyle =
    "bg-slate-400 p-4 border border-solid border-transparent transition-all duration-500 ease-in text-center rounded-2xl hover:bg-transparent hover:border-slate-300 dark:bg-[#292524] dark:hover:bg-transparent";
  const contactOptionIcon = "text-2xl mb-2 text-indigo-500";
  const contactOptionIconAnchor =
    "mt-3 inline-block text-sm font-bold font-poppins dark:text-slate-300";

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
            <h5 className="text-slate-700">Adeyemi Muaz Ayomide</h5>
            <a
              href="https://m.me/"
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
            <h5 className="text-slate-700">+2347084605347</h5>
            <a
              href="https://wa.me/+2347084605347?text=heyyyy.com/send?phone=+2347084605347"
              target="_blank"
              className={contactOptionIconAnchor}
            >
              Send a message
            </a>
          </article>
        </div>

        <Form />
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
