export function AboutText({ about, language }) {
  return (
    <>
      <h2 className="text-xl font-light mb-6">
        {language === "de" ? "BIOGRAFIE" : "BIOGRAPHY"}
      </h2>
      <p className="leading-relaxed">{about.intro}</p>
      <p className="leading-relaxed">{about.bio}</p>
      <p className="leading-relaxed">{about.journey}</p>
      <p className="leading-relaxed">{about.training}</p>
      <p className="leading-relaxed">{about.current}</p>
    </>
  );
}
