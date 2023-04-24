import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet'
const Contact = () => {
    const [animateClass, setAnimateClass] = useState("text-animate");
    const refForm = useRef();
    useEffect(() => {
        setTimeout(() => {
            return setAnimateClass('text-animate-hover');
        }, 3000);
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            

        ).then(() => {
            alert('Message sent');
            window.location.reload(false);
        },
            () => {
                alert("Failsed to send message");
            })
    }
    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters strArray={"Contact me".split("")} idx={15}
                            letterClass={animateClass} />
                    </h1>

                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, asperiores nostrum? Voluptate laudantium illum harum aut asperiores, vitae perferendis corrupti recusandae sit quis ad aspernatur impedit iusto amet error. Et.
                    </p>
                    <div className="contact-form">
                        <form action="" ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder='E-mail' required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type='text' name='subject' required />
                                </li>
                                <li>
                                    <textarea name="message" placeholder='Message' required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value={"Send"} />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Raja Aravindha
                    <br />
                    India,
                    <br />
                    Bangalore, Karnataka
                    <span><a href="mailto:rajaaravindha.a@gmail.com">rajaaravindha.a@gmail.com</a></span>
                </div>
                <div className="map-wrap map ">
                    <MapContainer center={[12.951866740064574, 77.5602545667033]} zoom={13}>

                        <TileLayer
                            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                            url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
                        />
                        <Marker position={[12.9149, 77.5206]} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })} >
                            <Popup>
                                Raja lives here
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    );
}

export default Contact;
