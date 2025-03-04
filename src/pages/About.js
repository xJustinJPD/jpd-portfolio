import MyImage from "../assets/images/About.jpeg"

const About = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: "../assets/images/About.jpeg"}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">About Me</h1>
            <p className="mb-5">My name is Justin, I'm a 23 year computer science major from Dublin, Ireland.</p>
            <p className="mb-5">I grew up in Dublin and have had a passion for gaming and sports since a young age.</p>
            <p className="mb-5">I joined the IADT BSc in Creative Computing in 2021, and have been accepted to the UCD MSc in Computer Science (Negotiated Learning) starting in September, 2025.</p>
            <p className="mb-5">Hoping to graduate from IADT this summer, and from UCD in 2026. I'm excited to see what the future holds!</p>
            </div>
        </div>
        </div>
    );
};

export default About;