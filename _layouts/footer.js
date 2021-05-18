import { useEffect, useState } from 'react'; 

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
		<div className="text-sm font-body font-bold mt-5">		
			<footer>
				<h1>{emoji[currIdx]}&nbsp; neocho.eth</h1>
			</footer>	
		</div>
	);
}

export default Footer; 
