import React, { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import aboutPic from "../assets/fotograf_stefan-schacher.jpg";

export default function About() {
  const { language } = useContext(LanguageContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getTranslations() {
      try {
        const res = await fetch("/data.json");
        const json = await res.json();
        setData(json);
      } catch (e) {
        console.error(e);
      }
    }

    getTranslations();
  }, []);

  if (!data) return; // return ohne p-tag oder dergleichen, sonst war text kurz beim laden sichtbar ...

  const about = data[language].about;

  return (
    <>
      <h1 className="text-2xl font-light mb-6 text-center">
        {language === "de" ? "Über mich" : "About"}
      </h1>

      <div className="aspect-16/9 overflow-hidden flex items-center justify-center">
        <img src={aboutPic} alt="Portraitfoto Stefan Schacher" />
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1 space-y-6">
          <section>
            <p className="leading-relaxed">{about.intro}</p>
          </section>

          <section>
            <p className="leading-relaxed">{about.bio}</p>
          </section>

          <section>
            <p className="leading-relaxed">{about.journey}</p>
          </section>

          <section>
            <p className="leading-relaxed">{about.training}</p>
          </section>

          <section>
            <p className="leading-relaxed">{about.current}</p>
          </section>
        </div>

        <aside className="w-full lg:w-1/5 space-y-6">
          <section>
            <h2 className="text-xl font-light mb-6">
              {language === "de" ? "Kontakt" : "Contact"}
            </h2>
            <p>{about.contact.name}</p>
            <p>{about.contact.phone}</p>
            <p>{about.contact.email}</p>
          </section>

          <section>
            <h2 className="text-xl font-light mb-6">Studio</h2>
            <p>{about.studio.street}</p>
            <p>{about.studio.zipCode}</p>
          </section>
        </aside>
      </div>
    </>
  );
}
