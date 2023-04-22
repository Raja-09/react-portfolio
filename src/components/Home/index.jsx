import './index.scss';
import LogoTitle from "../../assets/images/R-Logo.png"
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = 'aja Aravindha'.split("");
    const jobArray = 'Web developer'.split("");

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover');
        }, 4500);
    }, [])
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>

                    <br />

                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>

                    <img src={LogoTitle} alt="My name" />

                    <AnimatedLetters letterClass={letterClass}
                        strArray={nameArray}
                        idx={15} />
                    <br />

                    <AnimatedLetters letterClass={letterClass}
                        strArray={jobArray}
                        idx={28}
                    />
                </h1>
                <h2>Full-Stack Developer / Programmer / Student</h2>
                <Link to='/contact' className='flat-button'>Contact Me</Link>
            </div>

        </div>
    );
};

export default Home;
