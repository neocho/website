import { useEffect, useState } from 'react'; 
import { getConfig, getPosts } from '@api'; 
import Head from 'next/head';
import Link from 'next/link'; 
import 'tailwindcss/tailwind.css';

export default function Home() { 
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
		<div className="min-h-screen p-7">
			<Head>
				<title>Neo's Website</title>
			</Head>
			<div className="font-sans text-base text-lg font-bold w-30">
				<nav>
					<a href="/" className="hover:underline">@neocho</a>
				</nav>
			</div> 
			<div className="hover:underline font-sans text-base text-lg font-bold mt-5 w-30">
				 <Link href='/about'>
					<a>About</a>
				 </Link>
			</div> 
			<div className="hover:underline font-sans text-base text-lg font-bold w-30">	
				 <Link href='/posts'>
					<a>Posts</a>
				 </Link>
			</div> 
			<div className="hover:underline font-sans text-base text-lg font-bold w-30">	
				<Link href='/contact'>
					<a>Contact</a>
				</Link>
			</div> 
			<div className="text-base font-sans text-lg mt-10">		
			<footer>
				<h1> {emoji[currIdx]} neocho.eth </h1>
			</footer>	
			</div>
	     </div>
	); 
}

