import { Link } from 'react-router-dom'; 

function Contact() {
	return (
		<div className="ml-10 mt-10 text-left"> 
			<div className="font-sans font-bold text-base items-center w-30"> 
				<Link to='/'>&lt; Back</Link> 
			</div> 
			<div className="font-sans font-medium items-center mt-5 w-30 space-y-1"> 
				<h1>🐦 <a href="https://twitter.com/neocho_" className="hover:underline"> Twitter</a></h1>
				<h1>✉️  <a href="mailto:choneo.ch@gmail.com" className="hover:underline"> Email</a></h1>
				<h1>💻 <a href="https://github.com/neocho" className="hover:underline"> Github</a></h1>
             </div>
			<div className="font-sans font-medium items-center mt-5 w-30"> 	
				<h1>DMs open on Twitter!</h1>
			</div>
		</div> 
	); 
}

export default Contact; 
