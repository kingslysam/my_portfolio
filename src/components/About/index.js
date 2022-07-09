import './index.scss'
import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faJava, faJsSquare, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import Loader from "react-loaders";
import { useState } from "react";

const About = () => {
  const [letterClass] = useState("text-animate")
  return(

    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
           strArray={['A','b','o','u','t',' ','m','e','.']}
           idx={15}
           />
        </h1>
        <p>I am a visionary and driven person, which are qualities that are essential for web development.
          I have an abundance of energy and passion, and I'm more than eager to follow my interests wherever they may lead me.
          I'm a passionate, outgoing, multi-talented soul with a built-in capacity to inspire and amuse.
          I'm never content to simply generate ideas. Instead, I feel compelled to take action on them nearly immediately.
        </p>
        <p>
          My boundless energy enables me to pursue a wide range of interests, pastimes, academic specialties, and creative pursuits.
          I can learn new things quickly, take up new skills, and manage several projects and roles rather well.
        </p>
        <a type="button" className="flat-button" value="RESUME" href="https://docs.google.com/document/d/1kpK3k3pKZZelGDScMd_eq7RBukb9Ais0bmXjgdnUCn8/edit?usp=sharing">RESUME</a>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faReact} color="#0000FF"/>
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#09E908"/>
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faJava} color="#DD0031"/>
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faJsSquare} color="#E96108"/>
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faPython} color="#F1FF33"/>
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faDatabase} color="#636C61"/>
          </div>
        </div>
      </div >
    </div>
      <Loader type="pacman"/>
    </>
  )
}

export default About