import headshot from './assets/headshot.jpeg'
import Udp from './assets/udp.png'
import Proxy from './assets/proxy.png'
import Dfs from './assets/dfs.png'
import Active from './assets/active.png'
import Wrapped from './assets/Wrapped.png'
import Photo from './assets/photo.png'
import Website from './assets/Personal-website.webp'
import Website1 from './assets/p_web.webp'
import Future from './assets/future.webp'

import { TypeAnimation } from 'react-type-animation';
const Home = () => {
    return(
        <div className="grid grid-cols-2 min-h-screen w-full bg-black font-Terminal bg-[url(./assets/background2.png)] bg-no-repeat">
            <div className="flex justify-center items-end p-10 h-full">
                <div className="w-full h-full flex justify-center items-center">
                    <img src={headshot} alt="Headshot" className="max-h-[90%] w-3/4 object-contain rounded-xl"/>
                </div>
            </div>

            <div className="flex justify-center items-center p-4 h-full">
                <div className="w-full h-[90%] border-2 border-green-600 rounded-xl flex flex-col items-start justify-start bg-black overflow-y-auto p-4">
                    <p className="text-center px-4 text-amber-50 text-2xl">
                        <TypeAnimation
                            sequence={[
                                'I am Sarthak',
                                1000, 
                                'I am a Coder',
                                1000,
                                'I am a Triathlete',
                                1000,
                                'I am Sarthak',
                                10000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '2em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                        <p> 
                            I am a senior in Computer Science at the University of Colorado with a passion in Software Development and Network Engineering.
                            I have been a Course Assistance for Software Development, Data Structures, and Computational Thinking which has give me a lot of experience working with students from different backgrounds.
                            <br /> Check out some of my Projects!
                        </p>
                    </p>
                    <div className="grid grid-cols-4 p-3 mt-15">
                        <div>
                            <a href="https://activeu.onrender.com/" >
                                <img src={Active} alt="Headshot" className="w-5/6 h-auto object-contain rounded-xl max-w-xs transition duration-300 ease-in-out hover:scale-110" />
                            </a>
                        </div>
                        <div>
                            <a href="https://github.com/SarthakPaithankar/Proxy-Server/tree/main" >
                                <img src={Proxy} alt="Headshot" className="w-5/6 h-auto object-contain rounded-xl max-w-xs transition duration-300 ease-in-out hover:scale-110" />
                            </a>
                        </div>
                        <div>
                            <a href="https://github.com/SarthakPaithankar/Spotify_rewrap_clean" >
                                <img src={Wrapped} alt="Headshot" className="w-5/6 h-auto object-contain rounded-xl max-w-xs transition duration-300 ease-in-out hover:scale-110" />
                            </a>    
                        </div>
                        <div>
                            <a href="https://github.com/SarthakPaithankar/Distributed-File-System" >
                                <img src={Dfs} alt="Headshot" className="w-5/6 h-auto object-contain rounded-xl max-w-xs transition duration-300 ease-in-out hover:scale-110" />
                            </a>
                        </div>
                        <div><img src={Udp} alt="Headshot" className="w-5/6  h-auto object-contain rounded-xl max-w-xs transition duration-300 ease-in-out hover:scale-110" /></div>
                        <div>
                            <a href='https://github.com/SarthakPaithankar/Portfolio-Website'>
                                <img src={Website1} alt="Headshot" className="w-5/6 h-auto object-contain rounded-xl max-w-xs transition duration-300 ease-in-out hover:scale-110" />
                            </a>
                        </div>
                        <div>
                            <a href='./photography'>
                                <img src={Photo} alt="Headshot" className="w-3/4 h-auto object-contain rounded-xl max-w-xs transition duration-300 ease-in-out hover:scale-110" />
                            </a>
                        </div>
                        <div>
                            <img src={Future} alt="Headshot" className="w-3/4 h-auto object-contain rounded-xl max-w-xs transition duration-300 ease-in-out hover:scale-110" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;