import Link from 'next/link'; 
import Head from 'next/head';
import 'tailwindcss/tailwind.css';

export default function Contact() {
	return (
		<div className="min-h-screen p-7 max-w-md"> 
			<Head>
				<title>Contact</title> 
			</Head>
			<div className="font-sans font-bold text-base w-30"> 
				<Link href='/'>&lt; Back</Link> 
			</div> 
			<div className="font-sans font-medium mt-5 w-30 space-y-1"> 
				<h1>🐦 <a href="https://twitter.com/neocho_" className="hover:underline"> Twitter</a></h1>
				<h1>✉️  <a href="mailto:choneo.ch@gmail.com" className="hover:underline"> Email</a></h1>
				<h1>💻 <a href="https://github.com/neocho" className="hover:underline"> Github</a></h1>
             </div>
			<div className="font-sans font-medium mt-5 w-30"> 	
				<h1>DMs open on Twitter!</h1>
			</div>
		</div> 
	); 
}

