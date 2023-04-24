import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faHtml5, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import mongo from '../../assets/images/MongoDB_Logomark_SpringGreen.png'
import express from '../../assets/images/pngwing.com.png'
import { Link } from 'react-router-dom';

const About = () => {
    const [animateClass, setAnimateClass] = useState("text-animate");
    useEffect(() => {
        setTimeout(() => {
            return setAnimateClass('text-animate-hover');
        }, 3000);
    }, [])
    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={animateClass} strArray={"About me".split("")}
                            idx={15} />
                    </h1>
                    <p> Aspiring software developer studying Computer Science and Engineering at VIT Vellore. Passionate about writing clean and efficient code, with a strong interest in software engineering and web development. Practicing full-stack development based primarily on the <AnimatedLetters strArray={"MERN".split("")} letterClass={animateClass} idx={23} /> stack and technologies such as Firebase, Netlify, Git and other Developer tools.</p>
                    <p> Active learner and always eager to learn and explore new frameworks and tools. Currently focused on honing my skills in web development and actively seeking opportunities that help in improving my skill set and enriching my knowledge.</p>
                    <p>Open to work and looking for internship oppurtunities and collaboration projects. Get in touch using the details provided in the <Link className='inline-links' to={"/contact"} >contact page</Link> for project collabs. </p>

                    <h2><AnimatedLetters letterClass={animateClass} strArray={"Happy Coding".split("")} idx={15}/></h2>

                </div>

                <div className="stage-cube-cont">
                    <div className="cube-spinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faReact} color='#5ed4f4' />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color='#f06529' />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color='#28a4d9' />
                        </div>
                        <div className="face4">
                            <img src={mongo} className='box-icon-mongo' alt='mongodb' />
                        </div>
                        <div className="face5">
                            <img src={express} className='box-icon-exp' alt="" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faNodeJs} color='green' />
                        </div>
                    </div>

                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}
export default About;
