import Header from '@includes/Header';
import Footer from '@includes/Footer'; 
import { ReactSketchCanvas } from 'react-sketch-canvas';

export default function Vibe() { 
    const styles = {
        border: '10px solid #000000',
        borderRadius: '3%',
        width: '350px',
        height: '400px'
    };

	return (
		<div className="place-items-center min-h-screen">
			<div className="ml-2">
				<Header title={"Vibe"}/>
                
                <div className="ml-4 mr-4 flex flex-col w-full">

                    <h1 className="text-base text-3xl font-semibold ml-3 mb-3 mt-3">🎨</h1>
                    
                    <ReactSketchCanvas
                        style={styles}
                        strokeWidth={3}
                        strokeColor="black"
                    />
                </div>
                    
				<Footer />
			</div>
		</div>
	); 
}

