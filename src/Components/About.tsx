export default function About() {
  return (
    <>
      <section
        id="about"
        className="mx-auto my-20 max-w-7xl px-4 py-24 lg:px-8"
      >
        <div className="mb-10 text-4xl font-bold tracking-wider lg:mb-0 lg:border-4 lg:p-6 lg:text-5xl">
          About Me
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:border-x-4 lg:border-b-4">
          <div className="flex items-center justify-start lg:justify-center lg:p-8">
            <img
              src="pic.png"
              alt=""
              className="mx-auto h-auto w-4/6 grayscale lg:w-1/2"
            />
          </div>
          <div className="flex items-center justify-center pt-10 text-lg leading-loose tracking-wider text-white/90 lg:border-l-4 lg:p-8">
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
