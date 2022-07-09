import './index.scss'
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useRef, useState } from "react";

const Contact = () => {
  const [letterClass] = useState("text-animate")
  const form = useRef()

  /*useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])*/

  const sendEmail = (e) =>{
  e.preventDefault()

  emailjs.sendForm(
    'service_62oy1hq','template_tsh9fyh',form.current,'IsDppwpIig55owwPc'
  )
    .then(
      ()=> {
        alert('Message sent successfully')
        window.location.reload(false)
      },
      ()=>{
        alert('Failed to send, please try again')
      }
    )
  }

  return(
    <>
      <div className="container contact-page">
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C','o','n','t','a','c','t',' ','m','e.']}
              idx={15}
            />
          </h1>
          <p>
            If you have other request or question, dont hesitate to contact
            me using below form either.
          </p>
          <div className='contact-form'>
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required/>
                </li>
                <li className="half">
                  <input type="text" name="email" placeholder="E-mail" required/>
                </li>
                <li>
                  <input type="text" name="subject" placeholder="Subject" required/>
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required>
                  </textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND"/>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
          Samuel Yona Killagane,
          <br/>
          Dar-es-Salaam, Tanzania.
          <br/>
          <span>samyona48@gmail.com</span>
        </div>
        <div className='map-wrap'>
          <MapContainer center={[-6.771599833528282, 39.23953469233271]} zoom={23}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Marker position={[-6.771599833528282, 39.23953469233271]}>
              <Popup>I live here,</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman"/>
    </>
  )

}

export default Contact