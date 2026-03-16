import React from "react";

// noch an Formspree anbinden // dort kostenfrei anmelden und neues formular erstellen und eine form-action-url erhalten

// in Datenschutz erwähnen!

// auf EN und DE anbieten

export default function Contact() {
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
          placeholder="Name"
          required
          className="border px-3 py-2"
        />
        <input
          type="email"
          name="email"
          placeholder="E-Mail"
          required
          className="border px-3 py-2"
        />
        <textarea
          name="message"
          placeholder="Nachricht"
          rows={7}
          required
          className="border px-3 py-2"
        />
        {/* btn-komponente reinholen! */}
        <button
          type="submit"
          className="text-gray-500 px-4 py-2 hover:text-red-500 bg-transparent"
        >
          Absenden &#8594;
        </button>
      </form>
    </>
  );
}
