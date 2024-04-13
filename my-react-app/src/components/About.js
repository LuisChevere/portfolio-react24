import React from "react";
import headshot from '../assets/images/compressheadshot.jpg';

export default function AboutMe () {

    return (
        <section>
        <div className="AboutMe">
            <img className="headshot" src={headshot} alt="headshot"></img>
            <div className="bio">
            <h1> Luis Chevere</h1>
            <h2>Front-End Web Developer</h2>
            <p>My name is Luis Chevere. I pursued my passion for web development by attending UTSA-San Antonio, where I completed their Full-Stack Web Development program. My journey into web development began at a young age, back in the days of customizing Myspace landing pages. Although it took me some time to reconnect with something I loved doing as a teen, in 2022, I reignited my passion for web development.</p>
            </div>
        </div>
        <hr className='hr'></hr>
        </section>

    );
}