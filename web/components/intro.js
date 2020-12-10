import TextLogo from "./text-logo";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <TextLogo className="md:pr-8" />
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Only the fun ones{" "}
        <span role="img" aria-label="glass of red wine">
          🍷
        </span>{" "}
      </h4>
    </section>
  );
}
