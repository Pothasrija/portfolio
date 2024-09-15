import {
  BootstrapIcon,
  CSSIcon,
  HTMLIcon,
  JsIcon,
  MySQL,
  PythonIcon,
  ReactIcon,
  NodeJS,
} from "./icons";
import Particles from "./magicui/particles";

import Marquee from "./magicui/marquee";
export default function Skills() {
  return (
    <>
      <section id="skills" className="relative my-20 py-28">
        <Particles
          className="absolute inset-0"
          quantity={80}
          ease={80}
          color={"#ffffff"}
          refresh
        />
        <h2 className="mb-20 text-center text-4xl font-bold tracking-wider lg:text-5xl">
          Skills
        </h2>

        <div className="relative mx-auto max-w-7xl">
          <Marquee pauseOnHover className="[--duration:20s]">
            <div
              className={
                "relative mx-auto flex size-48 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border p-4 text-xl font-medium dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
              }
            >
              <HTMLIcon className="mb-2 w-24" />
              HTML
            </div>
            <div
              className={
                "relative mx-auto flex size-48 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border p-4 text-xl font-medium dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
              }
            >
              <CSSIcon className="mb-2 w-24" />
              CSS
            </div>
            <div
              className={
                "relative mx-auto flex size-48 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border p-4 text-xl font-medium dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
              }
            >
              <JsIcon className="mb-2 w-24" />
              JavaScript
            </div>
            <div
              className={
                "relative mx-auto flex size-48 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border p-4 text-xl font-medium dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
              }
            >
              <ReactIcon className="mb-2 w-24" />
              React JS
            </div>
            <div
              className={
                "relative mx-auto flex size-48 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border p-4 text-xl font-medium dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
              }
            >
              <MySQL className="mb-2 w-24" />
              MySQL
            </div>
            <div
              className={
                "relative mx-auto flex size-48 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border p-4 text-xl font-medium dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
              }
            >
              <BootstrapIcon className="mb-2 w-24" />
              Bootstrap
            </div>
            <div
              className={
                "relative mx-auto flex size-48 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border p-4 text-xl font-medium dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
              }
            >
              <PythonIcon className="mb-2 w-24" />
              Python
            </div>
            <div
              className={
                "relative mx-auto flex size-48 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border p-4 text-xl font-medium dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
              }
            >
              <NodeJS className="mb-2 w-24" />
              Node JS
            </div>
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
      </section>
    </>
  );
}
