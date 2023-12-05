"use client"

const TimeLine = () => {
  return (
    <div
      style={{
        color: "#8b4513",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#d2b48c",
      }}
    >
      <div className="max-w-screen-md w-full gap-10 p-10">
        <h1 className="text-2xl font-bold">Anders Guldbek</h1>

        <div className="mt-10 grid-cols-1 gap-2 grid">
          <h2 className="text-4xl font-extrabold">Engineering Manager</h2>
          <i className="text-black">2023 - Present</i>
          <p className="text-black">Abtion, Odense</p>
          <div>
            Spearheaded a team of developers, focusing on career development and
            enhancement of their technical skills. Played a pivotal role in
            guiding team members towards excelling in various development
            technologies.
          </div>
        </div>

        <div className="mt-10 grid-cols-1 gap-2 grid">
          <h2 className="text-4xl font-extrabold">
            Senior Software Developer - Consultant
          </h2>
          <i className="text-black">May 2022 - Mar 2023</i>
          <p className="text-black">Karnov Group Denmark, Copenhagen</p>
          <div>
            Development of Karnov's digital law platform, integrating legal
            trials and case studies. Utilized TypeScript, React, and Rails in a
            contract position while also engaged with Abtion.
          </div>
        </div>

        <div className="mt-10 grid-cols-1 gap-2 grid">
          <h2 className="text-4xl font-extrabold">
            Senior Software Developer - Consultant
          </h2>
          <i className="text-black">Jul 2021 - May 2022</i>
          <p className="text-black">TV2 Danmark, Odense</p>
          <div>
            Development of Karnov's digital law platform, integrating legal
            trials and case studies. Utilized TypeScript, React, and Rails in a
            contract position while also engaged with Abtion.
          </div>
        </div>

        <div className="mt-10 grid-cols-1 gap-2 grid">
          <h2 className="text-4xl font-extrabold">Senior Developer</h2>
          <i className="text-black">May 2021 - Present</i>
          <p className="text-black">Abtion, Odense</p>
          <div>
            Managed multiple projects in a dynamic digital agency environment,
            encompassing maintenance and new feature development. Worked on
            countless big projects with some of the biggest companies in
            Denmark. Employed a diverse tech stack including TypeScript, React,
            React Native, Node, NextJS, and Rails.
          </div>
        </div>

        <div className="mt-10 grid-cols-1 gap-2 grid">
          <h2 className="text-4xl font-extrabold">Developer</h2>
          <i className="text-black">Apr 2018 - May 2021</i>
          <p className="text-black">Abtion, Odense</p>
          <div>
            Collaborated closely with clients on project-based work. Applied a
            broad range of technologies including Rails, PHP, JavaScript, and
            React in various projects.
          </div>
        </div>

        <div className="mt-10 grid-cols-1 gap-2 grid">
          <h2 className="text-4xl font-extrabold">Web Developer</h2>
          <i className="text-black">Sep 2017 - Apr 2018</i>
          <p className="text-black">AndBie Creative, Copenhagen</p>
          <div>
            Embarked on professional development career, focusing on daily web
            development tasks for client projects.
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimeLine
