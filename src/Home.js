import { Link } from 'react-router-dom'; 
import { useEffect, useState } from 'react'; 

function Home(){
	const [emoji, setEmoji] = useState(['🌍', '⚡️', '🚀', '🥳', '👽', '💥']);
	const [currIdx, setCurrIdx] = useState(0); 
	
	useEffect(() => {
		const interval = setInterval(() => {
			var newIdx = currIdx  === 5 ? 0 : currIdx+1; 
			setCurrIdx(newIdx); 	
		}, 1000);

		return () => clearInterval(interval); 
	},[currIdx]); 

    return (
        <div className="ml-10 mt-10 text-left">
			<div className="font-sans text-base font-bold items-center w-30"> 
				<nav> 
					<a href="/" className="hover:underline">@neocho</a>		
				</nav>
			</div>
			<div className="hover:underline font-sans text-base font-bold items-center mt-5 w-30"> 	
				<Link to='/about'>About</Link>	
			</div>	
			<div className="hover:underline font-sans text-base font-bold items-center w-30"> 	
				<Link to='/posts'>Posts</Link>	
			</div>
			<div className="hover:underline font-sans text-base font-bold items-center w-30"> 
				<Link to='/contact'>Contact</Link>	
			</div>
			<div className="text-base font-sans mt-10">
				<footer>	
					<h1> {emoji[currIdx]} neocho.eth </h1> 
				</footer>
			</div>	
        </div>
    );
}

export default Home;
