import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from "react-router-dom";
import './index.scss';
import {useState} from "react";
import AnimatedLetters from "../AnimatedLetters";
import Logo from "./Logo";
import Loader from "react-loaders";

const Home = () => {
  const [letterClass] = useState("text-animate")
  const nameArray = ['a','m','u','e','l',' ','K','i','l','l','a','g','a','n','e']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  /*useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])*/


  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}></span>
          <span className={`${letterClass} _12`}>Greetings,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitle} alt = "developer"/>
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
          <br/>
          <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={30}/>
        </h1>
        <h2> Back-End Developer/ Java Expert / Computer Maintenance Expert  </h2>
        <Link to="/contacts" className='flat-button'>CONTACT ME</Link>
      </div>
      <Logo/>
    </div>
      <Loader type="pacman" />
      </>
  );

}

export default Home