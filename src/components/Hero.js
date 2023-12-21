import MyImage from '../assets/images/home.jpeg'
import { Link } from 'react-router-dom';

const Hero = () => {
	return (
		<div className="hero min-h-screen bg-base-200 px-4 glass">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<img
					src={MyImage}
					className="max-w-sm rounded-lg shadow-2xl" alt="pink"
				/>
				<div>
					<div className="justify-content-center">
					<h1 className="text-5xl font-bold">Justins Portfolio</h1>
					</div>
					<p className="py-6">
						Hi, I'm Justin, I'm a full stack developer currently studying in university. I love coding and hope to work with some great people through that in the future, come check out my projects.
					</p>
					<button className="btn btn-primary"><Link to='/projects'>All My Projects</Link></button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
