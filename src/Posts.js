import { Link } from 'react-router-dom'; 

function Posts() {
	return (
		<div className="min-h-screen p-7 max-w-md"> 
			<div className="font-sans font-bold text-base w-30"> 
				<Link to='/'>&lt; Back</Link> 
			</div> 
			<div className="font-sans text-base mt-5 w-30 space-y-14"> 
            </div>
		</div> 
	);
}

export default Posts;
