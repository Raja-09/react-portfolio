import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJava, faJs, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    const [animateClass, setAnimateClass] = useState("text-animate");
    useEffect(() => {
        setTimeout(() => {
            return setAnimateClass('text-animate-hover');
        }, 3000);
    }, [])
    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={animateClass} strArray={"About me".split("")}
                        idx={15} />
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, eius accusantium sapiente necessitatibus alias possimus iure hic optio deserunt consequuntur earum commodi voluptates doloremque laborum, iusto expedita excepturi perspiciatis quis.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur vitae consequatur vero natus cumque necessitatibus unde ullam voluptas magnam corrupti voluptate nisi voluptatum, quia, maxime tenetur, libero voluptatem nobis adipisci.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos sint porro maxime, temporibus saepe hic illo quisquam numquam quia? Saepe inventore veritatis in nisi nesciunt praesentium! Tenetur, accusamus similique ad non, perspiciatis voluptatum totam sit quae voluptates, incidunt obcaecati facilis facere numquam soluta temporibus voluptas excepturi deserunt. Fugiat, unde modi?</p>


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
                        <FontAwesomeIcon icon={faJsSquare} color='#efd81d' />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faGitAlt} color='#ec4d28' />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faNodeJs} color='green'/>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default About;
