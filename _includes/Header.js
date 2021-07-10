import Head from 'next/head';
import Link from 'next/link'; 

function Header(props){
	return(
		<div className="pl-5 pr-5 mt-5">	
			<Head>
				<title>{props.title}</title>
			</Head>

			<div className="space-y-4">
				<a href="/" className="text-3xl font-body font-bold hover:underline text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">@neocho</a>
			</div>

			<div className="flex font-body mt-2 mb-5 w-30 space-x-5">	
				<Link href="/">
					<a className="font-body text-md font-bold">About</a>
				</Link>

				<Link href='/posts'>
					<a className="font-body text-md font-bold">Posts</a>
				</Link>

				<Link href='/books'>
					<a className="font-body text-md font-bold">Books</a>
				</Link>

				<Link href='/vibe'>
					<a className="font-body text-md font-bold animate-bounce">Vibe</a>
				</Link>
			</div> 
		</div>
	);
}

export default Header;
