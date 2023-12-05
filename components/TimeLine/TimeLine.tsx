"use client"

import { animated, config, useSpring } from "@react-spring/web"
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax"
import useScrollTo from "react-spring-scroll-to-hook"
import { useRef } from "react"
import Image from "next/image"

const TimeLine = () => {
  const parallax = useRef<IParallax>(null!)

  const url = (name: string, wrap = false) =>
    `${
      wrap ? "url(" : ""
    }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
      wrap ? ")" : ""
    }`

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

const Explosions = () => {
  return (
    <>
      <ParallaxLayer offset={0.5} speed={-0.1} style={{ opacity: 0.3 }}>
        <Image
          src="/bigbang.svg"
          alt={""}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "6%", marginLeft: "20%", height: "auto" }}
        />
        <Image
          src="/bigbang.svg"
          alt={""}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "7%", marginLeft: "25%", height: "auto" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.1} style={{ opacity: 0.2 }}>
        <Image
          src="/bigbang.svg"
          alt={""}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "5%", marginLeft: "80%", height: "auto" }}
        />
        <Image
          src="/bigbang.svg"
          alt={""}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "7%", marginLeft: "65%", height: "auto" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0.2} speed={-0.1} style={{ opacity: 0.2 }}>
        <Image
          src="/bigbang.svg"
          alt={""}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "10%", marginLeft: "80%", height: "auto" }}
        />
        <Image
          src="/bigbang.svg"
          alt={""}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "3%", marginLeft: "65%", height: "auto" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0.1} speed={-0.2} style={{ opacity: 0.35 }}>
        <Image
          src="/bigbang.svg"
          alt={""}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "7%", marginLeft: "15%", height: "auto" }}
        />
        <Image
          src="/bigbang.svg"
          alt={""}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "7%", marginLeft: "25%", height: "auto" }}
        />
      </ParallaxLayer>
    </>
  )
}
const Planets = () => {
  return (
    <>
      <ParallaxLayer offset={0.5} speed={-0.2} style={{ opacity: 0.6 }}>
        <Image
          src="/nodejs-icon.svg"
          alt={""}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "6%", marginLeft: "5%", height: "auto" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.3} style={{ opacity: 0.5 }}>
        <Image
          src="/react.svg"
          alt={""}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "7%", marginLeft: "65%", height: "auto" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.1} style={{ opacity: 0.6 }}>
        <Image
          src="/plant.svg"
          alt={""}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "10%", marginLeft: "80%", height: "auto" }}
        />
        <Image
          src="/ruby.svg"
          alt={""}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "3%", marginLeft: "65%", height: "auto" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0.1} speed={-0.2} style={{ opacity: 0.35 }}>
        <Image
          src="/red-planet.svg"
          alt={""}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "7%", marginLeft: "15%", height: "auto" }}
        />
        <Image
          src="/typescript.svg"
          alt={""}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "7%", marginLeft: "25%", height: "auto" }}
        />
      </ParallaxLayer>
    </>
  )
}
const Clouds = ({ startFromPage }: { startFromPage: number }) => {
  const url = (name: string, wrap = false) =>
    `${
      wrap ? "url(" : ""
    }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
      wrap ? ")" : ""
    }`
  return (
    <>
      <ParallaxLayer
        offset={startFromPage + 0}
        speed={0.8}
        style={{ opacity: 0.1 }}
      >
        <img
          src={url("cloud")}
          style={{ display: "block", width: "20%", marginLeft: "55%" }}
        />
        <img
          src={url("cloud")}
          style={{ display: "block", width: "10%", marginLeft: "15%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={startFromPage + 0.75}
        speed={0.5}
        style={{ opacity: 0.1 }}
      >
        <img
          src={url("cloud")}
          style={{ display: "block", width: "20%", marginLeft: "70%" }}
        />
        <img
          src={url("cloud")}
          style={{ display: "block", width: "20%", marginLeft: "40%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={startFromPage + 0}
        speed={0.2}
        style={{ opacity: 0.2 }}
      >
        <img
          src={url("cloud")}
          style={{ display: "block", width: "10%", marginLeft: "10%" }}
        />
        <img
          src={url("cloud")}
          style={{ display: "block", width: "20%", marginLeft: "75%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={startFromPage + 0.6}
        speed={-0.1}
        style={{ opacity: 0.4 }}
      >
        <img
          src={url("cloud")}
          style={{ display: "block", width: "20%", marginLeft: "60%" }}
        />
        <img
          src={url("cloud")}
          style={{ display: "block", width: "25%", marginLeft: "30%" }}
        />
        <img
          src={url("cloud")}
          style={{ display: "block", width: "10%", marginLeft: "80%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={startFromPage + 1.6}
        speed={0.4}
        style={{ opacity: 0.6 }}
      >
        <img
          src={url("cloud")}
          style={{ display: "block", width: "20%", marginLeft: "5%" }}
        />
        <img
          src={url("cloud")}
          style={{ display: "block", width: "15%", marginLeft: "75%" }}
        />
      </ParallaxLayer>
    </>
  )
}

interface ParallaxSectionProps {
  offset: number
  speed: number
  className: string
  children: React.ReactNode
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  offset,
  speed,
  children,
  className,
}) => (
  <ParallaxLayer
    offset={offset}
    speed={speed}
    style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
  >
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
      }}
      className={className}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100vh",
          zIndex: 1,
        }}
      >
        {children}
      </div>
    </div>
  </ParallaxLayer>
)

export default TimeLine
