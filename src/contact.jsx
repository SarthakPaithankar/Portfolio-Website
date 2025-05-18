import Instagram from './assets/Instagram.png'
import LinkedIn from './assets/Linkedin.png'
import Github from './assets/Github.png'
import Resume from './assets/resume.webp'
const Contact = () => {
    return(
        <div className="bg-black min-h-screen bg-[url(./assets/background2.png)] bg-no-repeat flex justify-center items-center text-amber-50 p-4 relative">
            <div className='absolute w-100 h-100 bg-green-600 blur-2xl z-0'></div>
            <div className="grid grid-cols-2 gap-2 w-100 h-100  rounded-lg z-10 ">
                <div>
                    <a href="https://www.linkedin.com/in/sarthak-paithankar-b5111b294/">
                        <img class="h-auto max-w-full rounded-lg transition duration-300 ease-in-out hover:scale-110" src={LinkedIn} alt="Linkedin"/>
                    </a>
                </div>
                <div>
                    <a href="https://www.instagram.com/sarthak_paithankar/">
                        <img class="h-auto max-w-full rounded-lg transition duration-300 ease-in-out hover:scale-110" src={Instagram} alt="Instagram"/>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/SarthakPaithankar">
                        <img class="h-auto max-w-full rounded-lg transition duration-300 ease-in-out hover:scale-110" src={Github} alt="Github"/>
                    </a>
                </div>
                <div>
                    <a href="https://docs.google.com/document/d/1SOTf90mfjZ2nOfJNl_z3Z9iaRy6fwx1IZejBP_ZxGUs/edit?usp=sharing">
                        <img class="h-auto max-w-full rounded-lg transition duration-300 ease-in-out hover:scale-110" src={Resume} alt="Resume"/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;