import Link from 'next/link';  
import Head from 'next/head';
import Header from '@includes/Header';
import Footer from '@includes/Footer'; 

export default function About() {
	return (
		<div className="min-h-screen p-7 max-w-md"> 
			<Header title={"Books"} />
			<div className="font-body text-base mt-5 break-words space-y-5"> 	
				<p> Coming soon. </p>
            </div>
			<Footer />
		</div> 
	);
}

