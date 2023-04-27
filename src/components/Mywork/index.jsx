import React, { useEffect, useState } from 'react';
import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import Project from '../Project';
import amazon from "../../assets/images/Screenshot 2023-04-27 201851.png"
import travel from "../../assets/images/Screenshot 2023-04-27 215837.png"
import portfolio from "../../assets/images/Screenshot 2023-04-27 220004.png"
import superchat from "../../assets/images/Screenshot 2023-04-27 220324.png"
import blog from "../../assets/images/Screenshot 2023-04-27 221036.png"
import music from "../../assets/images/Screenshot 2023-04-27 221221.png"
import Sidebar from '../Sidebar';


function Mywork() {

    const projects = [
        {
            img: amazon,
            title: "Amazon App using React and Firebase",
            desc: "An amazon clone webiste that was built using tools liek react and firebase. The frontend is powered by ReactJS along with other modules for designing and the backend is completely handled by Firebase, it takes care of things such as user authentication. It also using Redux for state management between mutiple pages, you can add items to the cart from the shop page and then later view them in the cart page where you can proceed to checkout. "
            , link: "https://github.com/Raja-09/amazon-clone"
        },
        {
            img: travel,
            title: "Travellopedia - Travel Guide Website",
            desc: "A travel guide website built using ReactJs and Firebase. This app provides the user with a list of tourists locations for the user to visit which are sorted and also classified based on the states. The user can then proceed to add their favorite places to visit and view them later for when plannign their trips' plan. We provide detials on the place you want to visit, its description and the location making it easy for the user to get to know the place more before visiting."
            , link: "https://github.com/Raja-09/travel-guide-website"
        },
        {
            img: portfolio,
            title: "React Portfolio App"
            , desc: "A react app built for showcasing my skills and learning animations and frontend design. This is a ReactJs app that uses advanced animations and transitions that are provided by the animate.css library. Also has functionalities to contact me using forms and loaders from loaders.css."
            , link: "https://github.com/Raja-09/react-portfolio"
        }
    ];
    const projects1 = [
        {
            img: superchat,
            title: "React Chat Application",
            desc: "A simple chat application built with ReactJs and firebase that first authenticates the user and allows them to log in, after which it is a common chatting field for anyone to post messages and read them, user can also delete messages."
            , link: "https://github.com/Raja-09/superchat"
        },
        {
            img: blog,
            title: "ExpressJs Blogging Website",
            desc: "A simple blogging web application built using EJS Templates and ExpressJs Modules. The frontend is built using EJS templates and the backend and the posting part is handled using the Express framework with routing and handling requests in the website. This App was built as a learning process and challenge that is being provided by the online Web Development Course by The App Brewery."
            , link: "https://github.com/Raja-09/blog-website"
        },
        {
            img: music,
            title: "React music player application",
            desc: "A frontend music application that shows your main playlists, functionaly to search musics and add them to playlists coming soon. Under development"
            , link: "https://github.com/Raja-09/music-player-v1"
        },

    ];
    const [animateClass, setAnimateClass] = useState("text-animate");
    useEffect(() => {
        setTimeout(() => {
            return setAnimateClass('text-animate-hover');
        }, 3000);
    }, [])
    return (

        <>
            <Sidebar />
            <div className="container my-work">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={animateClass} strArray={"My projects".split("")}
                            idx={15} />
                    </h1>
                    <div className="projects">
                        <Project projects={projects} idx={10} />
                    </div>
                    <div className="projects">
                        <Project projects={projects1} idx={13} />
                    </div>
                </div>
            </div>
            <img alt="" className='bg-image' />
            <Loader type='pacman' />
        </>
    )
}

export default Mywork
