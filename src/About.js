import { Link } from 'react-router-dom'; 

function About() {
	return (
		<div className="min-h-screen p-7 max-w-md"> 
			<div className="font-sans font-bold text-base w-30"> 
				<Link to='/'>&lt; Back</Link> 
			</div> 
			<div className="font-sans text-base mt-5 break-words space-y-5"> 	
				<p>Hi! I am finishing my last year in college studying computer science. I love 
				   learning about new things and building! If you want to collaborate on a 
				   project, please send me a <a href="https://twitter.com/neocho_" className="hover:underline font-semibold">DM</a>!</p> 
				<p>I spend my time thinking about agritech, social e-commerce and crpyto. Currently, I am learning more about distributed systems.</p> 
				<p>In my free time I like to read, meditate, workout, code and garden occasionaly.</p> 		
				<p>I am currently available for interviews and chats.</p>	
            </div>
		</div> 
	);
}

export default About; 
