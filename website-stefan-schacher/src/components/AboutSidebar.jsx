export function AboutSidebar({ about, language }) {
  return (
    <aside className="w-full lg:w-1/5 space-y-6">
      <section>
        <h2 className="text-xl font-light mb-6">
          {language === "de" ? "KONTAKT" : "CONTACT"}
        </h2>
        <p>{about.contact.name}</p>
        <p>{about.contact.phone}</p>
        <p>{about.contact.email}</p>
      </section>

      <section>
        <h2 className="text-xl font-light mb-6">STUDIO</h2>
        <p>{about.studio.street}</p>
        <p>{about.studio.zipCode}</p>
      </section>
    </aside>
  );
}
