import Head from 'next/head';
import { IconContext } from 'react-icons'; 
import { FiTwitter, FiGithub } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi'; 

function Header(props){
	return(
		<div>	
			<Head>
				<title>{props.title}</title>
			</Head>
			<div className="w-30 space-y-2">
				<a href="/" className="text-xl font-body font-bold hover:underline">@neocho</a>
				<nav className="flex flex-row space-x-3">	
					<IconContext.Provider value={{ color: "black"}}> 
						<a href="https://twitter.com/neocho_" className="text-xl"><FiTwitter /></a>
						<a href="https://github.com/neocho" className="text-xl"><FiGithub /></a>
						<a href="mailto:choneo.ch@gmail.com" className="text-xl"><HiOutlineMail /></a>
					</IconContext.Provider>
				</nav>
			</div> 
		</div>
	);
}

export default Header;
