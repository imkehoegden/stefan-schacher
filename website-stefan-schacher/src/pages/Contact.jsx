import React, { useContext, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

// an Formspree angebunden // dort kostenfrei angemeldet und neues formular erstellt und eine form-action-url erhalten

// noch in Datenschutz erwähnen!

export default function Contact() {
  const { language } = useContext(LanguageContext);
  // const [submitted, setSubmitted] = useState(false); // brauche ich nicht. macht formspree von alleine

  const placeholderDeEn = {
    name: language === "de" ? "Name" : "Name",
    email: language === "de" ? "E-Mail" : "Email",
    msg: language === "de" ? "Nachricht" : "Message",
    btn: language === "de" ? "Absenden →" : "Submit →",
  };

  const handleSubmit = (e) => {
    // evtl. hier das formular fetchen, damit hier Inhalte per POST an Formspree, ohne Seite aber zu reloaden, gesendet werden

    setSubmitted(true); // Standardverhalten beibehalten, denn Formspree kümmert sich ums Senden

    setTimeout(() => setSubmitted(false), 3000); // blendet Meldung nach 3 Sekunden wieder aus
  };

  return (
    <>
      <h1 className="text-2xl font-light mb-6 text-center">
        {language === "de" ? "KONTAKT" : "CONTACT"}
      </h1>

      <form
        action="https://formspree.io/f/mnjgodbq"
        method="POST"
        className="flex flex-col gap-4 max-w-[700px] mx-auto "
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder={placeholderDeEn.name}
          required
          className="border px-3 py-2"
        />
        <input
          type="email"
          name="email"
          placeholder={placeholderDeEn.email}
          required
          className="border px-3 py-2"
        />
        <textarea
          name="message"
          placeholder={placeholderDeEn.msg}
          rows={7}
          required
          className="border px-3 py-2"
        />
        {/* btn-komponente reinholen! */}
        <button
          type="submit"
          className="text-gray-500 px-4 py-2 hover:text-red-500 bg-transparent nav-link"
        >
          {language === "de" ? "ABSENDEN " : "SUBMIT "}
          <span>&#8594;</span>
        </button>

        {/* {submitted && (
          <div className="text-center mt-4 text-white font-medium">
            {language === "de"
              ? "Das Formular wurde erfolgreich abgesendet!"
              : "The Form has been successfully submitted!"}
          </div>
        )} 
         brauche ich hier nicht. macht formspree schon standardmäßig*/}
      </form>
    </>
  );
}
