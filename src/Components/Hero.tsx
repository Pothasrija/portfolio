import BoxReveal from "./magicui/box-reveal";
import { Button } from "./ui/button";
import DotPattern from "./magicui/dot-pattern";
import { cn } from "@/lib/utils";
export default function Hero() {
  return (
    <>
      <section className="mx-auto flex h-screen max-w-7xl flex-col items-start justify-center px-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="text-left">
          <BoxReveal boxColor={"#0ed898"} duration={0.5}>
            <div className="mb-5 text-lg capitalize text-white/90">
              HELLO 👋, I'M
            </div>
          </BoxReveal>
          <BoxReveal boxColor={"#0ed898"} duration={0.5}>
            <h1 className="py-3 text-6xl font-bold text-white lg:text-7xl">
              Srija Potha
            </h1>
          </BoxReveal>
          <BoxReveal boxColor={"#0ed898"} duration={0.5}>
            <div className="my-8 text-lg font-semibold capitalize tracking-wider text-primary">
              FRONTEND WEB DEVELOPER
            </div>
          </BoxReveal>
          <BoxReveal boxColor={"#0ed898"} duration={0.5}>
            <p className="text-lg text-white">
              Passionate Web Developer who is excited for learning new things
              with 2+ years of experience.
            </p>
          </BoxReveal>
          <BoxReveal boxColor={"#0ed898"} duration={0.5}>
            <div className="mt-8">
              <a href="#contact">
                <Button className="mr-3">Contact Me</Button>
              </a>
              <Button variant={"outline"}>Download Resume</Button>
            </div>
          </BoxReveal>
        </div>

        <img
          src="hero.png"
          alt="hero image"
          className="z-20 hidden w-[33rem] drop-shadow-2xl lg:block"
        />

        <DotPattern
          width={30}
          height={30}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          )}
        />
      </section>
    </>
  );
}
