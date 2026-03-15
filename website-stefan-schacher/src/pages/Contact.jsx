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
          className="border px-3 py-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="E-Mail"
          required
          className="border px-3 py-2 rounded"
        />
        <textarea
          name="message"
          placeholder="Nachricht"
          rows={5}
          required
          className="border px-3 py-2 rounded"
        />
        {/* btn an design anpassen */}
        <button
          type="submit"
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Absenden
        </button>
      </form>
    </>
  );
}
