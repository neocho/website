import Header from '@includes/Header';
import Footer from '@includes/Footer'; 

export default function Home() { 
	return (
		<div className="place-items-center min-h-screen">
			<div className="ml-2">
				<Header title={"Home"}/>

				<div className="font-body text-sm space-y-2 w-auto pl-5 pr-5 mb-5"> 	
					<p>Hi there! Welcome to my home on the internet!</p>
				</div>
				
				<div className="font-body text-sm space-y-2 w-auto pl-5 pr-5"> 	
					<p>I'm currently taking a break from college to learn new things.</p>
					<p>If you want to collaborate on a project or just chat, shoot me a <a href="https://twitter.com/neocho_" className="hover:underline font-semibold">DM</a>!</p> 
					<p>In my free time I like to read, meditate, workout, and listen to music.</p> 		
				</div>

				<Footer />

			</div>
		</div>
	); 
}

