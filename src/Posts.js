import { Link } from 'react-router-dom'; 

function Posts() {
	return (
		<div className="ml-10 mt-10 text-left"> 
			<div className="font-sans font-bold text-base items-center w-30"> 
				<Link to='/'>&lt; Back</Link> 
			</div> 
			<div className="font-sans text-base items-center mt-5 w-30 space-y-14"> 
            </div>
		</div> 
	);
}

export default Posts;
