import Header from '@includes/Header';
import Footer from '@includes/Footer'; 

export default function Books() {
	return (
		<div className="place-items-center min-h-screen">
			<div className="ml-2">

				<Header title={"Books"}/>
			
				<div className="font-body text-sm space-y-2 pl-5 pr-5"> 	
					<p>Coming soon!</p>	
				</div>

				<Footer />

			</div>
		</div>
	);
}



