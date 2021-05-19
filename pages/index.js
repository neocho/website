import { getConfig, getPosts } from '@api'; 
import Link from 'next/link'; 
import Header from '@includes/Header';
import Footer from '@includes/Footer'; 

export default function Home() { 
	return (
		<div className="min-h-screen p-7 max-w-md">
			<Header title={"Neo's Website"}/>
			<div className="font-body text-base mt-5 break-words space-y-3"> 	
				<p>Taking a break from college to learn new things.</p>
				<p>Want to collaborate on a project, shoot me a <a href="https://twitter.com/neocho_" className="hover:underline font-semibold">DM</a>!</p> 
				<p>In my free time I like to read, meditate, workout, and listen to music.</p> 		
            </div>
			<div className="hover:underline font-body text-base text-lg font-bold mt-5 w-30">	
				 <Link href='/posts'>
					<a>Posts</a>
				 </Link>
			</div> 
			<div className="hover:underline font-body text-base text-lg font-bold w-30">
				 <Link href='/books'>
					<a>Books</a>
				 </Link>
			</div> 
			<Footer />
	     </div>
	); 
}

