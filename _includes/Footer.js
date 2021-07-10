import { useEffect, useState } from 'react'; 
import { IconContext } from 'react-icons'; 
import { MdEmail } from 'react-icons/md'; 
import { FaDiscord, FaTwitterSquare, FaTelegramPlane, FaGithub } from 'react-icons/fa';

function Footer() {
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
		<div className="mt-10 pl-4 mb-5">		
			<footer>
				{/* <h1>{emoji[currIdx]}&nbsp; neocho.eth</h1> */}
				<div>
					<nav className="flex flex-row space-x-5 justify-center items-center h-10 w-56 rounded-full border-b border-l border-gray-200 bg-gray-300 bg-opacity-5 backdrop-filter backdrop-blur-lg">	
						<IconContext.Provider value={{ color: "0xff", size: "22px"}}> 
							<a href="https://twitter.com/neocho_" className="text-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><FaTwitterSquare /></a>
							<a href="https://github.com/neocho" className="text-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><FaGithub /></a>
							<a href="https://telegram.me/wholelottan3o" className="text-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><FaTelegramPlane /></a>
							<a href="https://discordapp.com/users/372536855167631362/" className="text-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><FaDiscord /></a>
							<a href="mailto:choneo.ch@gmail.com" className="text-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><MdEmail /></a>
						</IconContext.Provider>
					</nav>
				</div>
			</footer>	
		</div>
	);
}

export default Footer; 
