import Instagram from './assets/Instagram.png'
import LinkedIn from './assets/Linkedin.png'
import Github from './assets/Github.png'
const Contact = () => {
    return(
        <div className="bg-black min-h-screen flex justify-center items-center text-amber-50 p-4 relative">
            <div className='absolute w-100 h-100 bg-green-600 blur-2xl z-0'></div>
            <div className="grid grid-cols-2 gap-2 w-100 h-100  rounded-lg z-10 ">
                    <div className=''>
                        <img class="h-auto max-w-full rounded-lg transition duration-300 ease-in-out hover:scale-110" src={LinkedIn} alt=""/>
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg transition duration-300 ease-in-out hover:scale-110" src={Instagram} alt=""/>
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg transition duration-300 ease-in-out hover:scale-110" src={Github} alt=""/>
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg transition duration-300 ease-in-out hover:scale-110" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt=""/>
                    </div>
            </div>
        </div>
    );
};

export default Contact;