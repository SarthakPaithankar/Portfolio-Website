const Resume = () => {
    return(
        <div className="bg-black min-h-screen flex justify-center items-center">
            <ol className="relative min-h-screen border-s border-green-600 ">
                <li class="mb-10 ms-4 text-red-500">
                    <time className="mb-1 text-3xl font-Terminal leading-none  text-red-500">Profesional Experience</time>
                </li>             
                <li class="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-3xl font-Terminal leading-none  text-gray-400 dark:text-gray-500">Present</time>
                    <h3 className="text-3xl font-Terminal text-green-600">Course Assistant for Software Development and Methods</h3>
                    <ul className="mb-4 text-xl font-Terminal text-amber-50">
                        <li>
                            Assist students with concepts such as REST APIs, templating engines, JS-frameworks
                        </li>
                        <li>
                            Assist in integrating APIs into group projects, ensuring seamless implementation and functionality
                        </li>
                    </ul>
                    
                </li>
                <li class="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-3xl font-Terminal leading-none text-gray-400 dark:text-gray-500">Fall 2024</time>
                    <h3 className="text-3xl font-Terminal text-green-600">Course Assistant for Computational Thinking</h3>
                    <ul className="mb-4 text-xl font-Terminal text-amber-50">
                        <li>
                            Assisted students with learning python fundamentals and helped design a basic Wordle project
                        </li>
                        <li>
                            Held Office Hours to assist with debugging projects
                        </li>
                    </ul>
                </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-3xl font-Terminal leading-none text-gray-400 dark:text-gray-500">Summer 2024</time>
                    <h3 className="text-3xl font-Terminal text-green-600">Student Grounds Worker</h3>
                    <ul className="mb-4 text-xl font-Terminal text-amber-50">
                        <li>
                            Worked in teams to design and maintain flower beds around campus
                        </li>
                        <li>
                            Monitored plant health and addressed issues such as pests and diseases to maintain the longevity of flower beds.
                        </li>
                    </ul>
                    
                </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-3xl font-Terminal leading-none text-gray-400 dark:text-gray-500">Spring 2024</time>
                    <h3 className="text-3xl font-Terminal text-green-600">Course Assistant for Data Structures</h3>
                    <ul className="mb-4 text-xl font-Terminal text-amber-50">
                        <li>
                            Provided support to students to build a restaurant database by implementing hash table and priority queue
                        </li>
                        <li>
                            Used tools such as GDB and Valgrind to provide debugging assistance to students
                        </li>
                    </ul>
                </li>
                <li class="mb-10 ms-4 text-red-500">
                    <time className="mb-1 text-3xl font-Terminal leading-none  text-red-500">Activities</time>
                </li> 
                <li class="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-3xl font-Terminal leading-none  text-gray-400 dark:text-gray-500">2024-2025</time>
                    <h3 className="text-3xl font-Terminal text-green-600">Marketing Officer CU Triathlon</h3>
                    <ul className="mb-4 text-xl font-Terminal text-amber-50">
                        <li>
                            Maintain all social media for the team
                        </li>
                        <li>
                            Assist with recruiting and marketing at team events
                        </li>
                    </ul>
                </li>
                <li class="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-3xl font-Terminal leading-none  text-gray-400 dark:text-gray-500">2024-2025</time>
                    <h3 className="text-3xl font-Terminal text-green-600">Marketing | Theta Tau (Professional Co-ed Engineering Fraternity)</h3>
                    <ul className="mb-4 text-xl font-Terminal text-amber-50">
                        <li>
                            Assist with social media rebranding
                        </li>
                        <li>
                            Document fraternity events and news
                        </li>
                    </ul>
                </li>
            </ol>
        </div>
    );
};

export default Resume;