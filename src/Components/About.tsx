import BGShape from "./ProfileBG";

export default function About() {
  return (
    <>
      <section id="about" className="mx-auto max-w-7xl px-4 py-10">
        <h2 className="heading relative text-center text-5xl font-bold tracking-wider">
          About Me
        </h2>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2">
          <div className="relative flex items-center justify-start lg:justify-center lg:p-8">
            <div className="z-10 mx-auto aspect-square w-3/6 overflow-hidden rounded-full bg-amber-300 sm:w-2/6 lg:w-3/6">
              <img
                src="pic.png"
                alt=""
                className="relative left-2 top-6 w-full object-cover"
              />
            </div>
            <BGShape className="absolute z-0 h-full w-full opacity-40" />
            {/* <img
              src="pic.png"
              alt=""
              className="mx-auto aspect-square w-4/6 bg-red-500 object-cover grayscale lg:w-1/2"
            /> */}
          </div>
          <div className="flex items-center justify-center pt-10 text-lg leading-loose tracking-wider text-white/90 lg:p-8">
            Motivated and dedicated Frontend Developer with a solid foundation
            in HTML, CSS, JavaScript, and React.js. Experienced in creating
            responsive and user-friendly web applications. Proven ability to
            work effectively in team settings, communicate technical concepts
            clearly, and continuously learn and adapt to new technologies.
            Committed to delivering high-quality work and contributing to the
            success of the team and company. Seeking a challenging role to
            leverage my skills and contribute to impactful projects skills.
          </div>
        </div>
      </section>
    </>
  );
}
