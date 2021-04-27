function Home(){
    return (
        <div className="text-left sm:text-left m-12">
			<div className="mb-4"> 
				<h1 className="text-2xl font-serif">Neo Cho</h1>
			</div>
			
			<div className="mb-2">
				<p className="text-md font-serif">Spending 2021 learning + building + reflecting. </p>	
			</div>

            <div className="mb-2">
                <p className="text-md font-serif">Finishing my last year at <a href="https://www.cecs.ucf.edu/" className="font-medium font-serif"> UCF</a>. </p>
            </div>
      
            <div className="mb-3">
                <p className="text-md font-serif">Thinking about social e-commerce, agritech & crypto.</p>
            </div>

            <div className="flex"> 
                <div className="mr-4">	
                    <a href="https://twitter.com/neocho_" className="text-md font-semibold underline font-serif">Twitter</a>
                </div>  

                <div className="mr-4">
                    <a href="https://www.linkedin.com/in/neocho/" className="text-md font-semibold underline font-serif">LinkedIn</a>
                </div> 

                <div className="mr-4">
                    <a href="https://github.com/neocho" className="text-md font-semibold underline font-serif">Github</a>
                </div> 

                <div className="mr-4">
                    <a href="mailto:choneo.ch@gmail.com" className="text-md font-semibold underline font-serif">Email</a>
                </div> 
            </div>

        </div>
    );
}

export default Home;
