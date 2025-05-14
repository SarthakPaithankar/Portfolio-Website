import Photo1 from './assets/port1.jpeg'
import Photo2 from './assets/port2.jpeg'
import Photo3 from './assets/port3.jpeg'
import Photo4 from './assets/port4.jpeg'
import Photo5 from './assets/port5.jpeg'
import Photo6 from './assets/port6.jpeg'
import Photo7 from './assets/port7.jpeg'
import Photo8 from './assets/port8.jpeg'
import Photo9 from './assets/port9.jpeg'
import Photo10 from './assets/port10.jpeg'
const Photography = () => {
    return(
       <div className="bg-black min-h-screen border-8">
            <div className="grid grid-cols-2 gap-4 m-6">
                <div>
                    <img className="h-auto max-w-full rounded-lg transition duration-300 ease-in-out hover:scale-101" src={Photo1} alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg transition duration-300 ease-in-out hover:scale-101" src={Photo3} alt=""/>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 m-6">
                <div>
                    <img className="h-auto max-w-full rounded-lg transition duration-300 ease-in-out hover:scale-101" src={Photo2} alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg transition duration-300 ease-in-out hover:scale-101" src={Photo5} alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg transition duration-300 ease-in-out hover:scale-101" src={Photo7} alt=""/>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 m-6">
                <div>
                    <img className="h-auto max-w-full rounded-lg transition duration-300 ease-in-out hover:scale-101" src={Photo9} alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg transition duration-300 ease-in-out hover:scale-101" src={Photo6} alt=""/>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 m-6">
                <div>
                    <img className="h-auto max-w-full rounded-lg transition duration-300 ease-in-out hover:scale-101" src={Photo10} alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg transition duration-300 ease-in-out hover:scale-101" src={Photo4} alt=""/>
                </div>
                
            </div>

       </div>
       
    );
};

export default Photography;