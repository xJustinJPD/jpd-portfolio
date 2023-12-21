import MyImage from "../assets/images/About.jpeg"

const About = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: "../assets/images/About.jpeg"}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">About Me</h1>
            <p className="mb-5">My name is Justin, I'm a 22 year old fullstack website developer from Dublin Ireland.</p>
            <p className="mb-5">I grew up in Dublin and have had a passion for gaming and sports since a young age.</p>
            <p className="mb-5">Graduated secondary school in 2020 and after taking a year out due to covid, in 2021 joined the course I'm in now, IADTs Creative Computing BSc. </p>
            <p className="mb-5">My goal is to graduate with a 2:1 and move on to a masters, FINGERS CROSSED!!!</p>
            </div>
        </div>
        </div>
    );
};

export default About;