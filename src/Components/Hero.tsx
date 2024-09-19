import RetroGrid from "./magicui/retro-grid";
import WordRotate from "./magicui/word-rotate";
import RoundedElement from "./MouseFollower";
import { ArrowDown01Icon } from "./icons";
export default function Hero() {
  return (
    <>
      <section className="relative mx-auto flex h-screen flex-col items-center justify-center">
        <div className="z-10 text-center">
          <div className="mb-5 text-xl capitalize text-white/90 md:text-2xl">
            HELLO 👋, I'M
          </div>
          <h1 className="py-3 text-6xl font-bold text-white md:text-7xl lg:text-8xl">
            Srija Potha
          </h1>
          <WordRotate
            className="my-5 text-2xl font-bold text-primary md:text-4xl"
            words={[
              "I'm Front-End Developer",
              "I'm Programmer",
              "I'm Tech Enthusiast",
            ]}
          />
          <div className="mt-8">
            <button className="mx-auto flex flex-col items-center justify-center gap-3 text-base md:text-lg">
              Scroll Down
              <ArrowDown01Icon className="h-8 w-8 animate-bounce text-slate-200" />
            </button>
          </div>
        </div>

        <RetroGrid />
      </section>
      <RoundedElement />
    </>
  );
}
