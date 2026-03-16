import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

// noch an Formspree anbinden // dort kostenfrei anmelden und neues formular erstellen und eine form-action-url erhalten

// in Datenschutz erwähnen!

// auf EN und DE anbieten

export default function Contact() {
  const { language } = useContext(LanguageContext);

  const placeholderDeEn = {
    name: language === "de" ? "Name" : "Name",
    email: language === "de" ? "E-Mail" : "Email",
    msg: language === "de" ? "Nachricht" : "Message",
    btn: language === "de" ? "Absenden →" : "Submit →",
  };

  return (
    <>
      <form
        action="https://formspree.io/f/meine-form-id"
        method="POST"
        className="flex flex-col gap-4 max-w-md mx-auto"
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
          className="text-gray-500 px-4 py-2 hover:text-red-500 bg-transparent"
        >
          {language === "de" ? "Absenden" : "Submit"}
          <span>&#8594;</span>
        </button>
      </form>
    </>
  );
}
