import { LinkedInIcon, MailIcon, PhoneIcon, WhatsappIcon } from "./icons";
export default function Contact() {
  return (
    <>
      <section id="contact" className="relative mx-auto max-w-7xl px-4 py-24">
        <h2 className="mb-20 text-center text-4xl font-bold lg:text-5xl">
          Contact Me
        </h2>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 text-lg md:grid-cols-2 md:gap-8">
          <a
            href="https://www.linkedin.com/in/p-srija-31b557230/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6 rounded-2xl border p-6 transition-colors hover:border-blue-500"
          >
            <LinkedInIcon className="h-8 w-8" />
            LinkedIn
          </a>
          <a
            href="mailto:pothasrija97@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6 rounded-2xl border p-6 transition-colors hover:border-orange-500"
          >
            <MailIcon className="h-8 w-8" />
            Email
          </a>
          <a
            href="https://wa.me/919182704402"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6 rounded-2xl border p-6 transition-colors hover:border-emerald-500"
          >
            <WhatsappIcon className="h-8 w-8" />
            Whatsapp
          </a>
          <a
            href="tel:9182704402"
            className="flex items-center gap-6 rounded-2xl border p-6 transition-colors hover:border-slate-500"
          >
            <PhoneIcon className="h-8 w-8" />
            Call
          </a>
        </div>
      </section>
    </>
  );
}
