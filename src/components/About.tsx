import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGaugeHigh, faPaintbrush, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';



export default function About() {
  return (
    <div className=" bg-black pt-16">
        <div className=" text-6xl text-center pt-10">
            About <span className=" text-primary">Me</span>
        </div>
        <div className=" text-xl text-center mt-5 font-thin">
            Get to know <span className=" text-primary">me</span>
        </div>
        <div className="grid grid-cols-2 mt-16">
            <div className="ml-16 col-span-1">
                <div className=" leading-relaxed text-4xl font-medium">
                    <p>I'm a creative <span className=" text-primary">web developer</span>  based in Lagos, Nigeria</p>
                </div>
                <div className="text-2xl mt-5 leading-10 text-gray-200">
                Experienced in front-end development and passionate about crafting intuitive and visually appealing web experiences. Dedicated to staying updated on industry trends and best practices to deliver cutting-edge solutions. 
                </div>
                <div className="mt-10 text-center text-xl font-mono">
                     <code>Download CV</code>   
                </div>
            </div>
            <div className="text-center">
                <img src="" alt="imageeee" />
            </div>
        </div>
        <div className="mx-16">
        <div className=" text-5xl text-center mt-16">
            My <span className=" text-primary">Services</span>
        </div>
        <div className="mt-16 grid grid-cols-3">
            <div className="col-span-1 card mr-5">
                
                <FontAwesomeIcon icon={faPaintbrush} className="text-6xl"/>
                <div className="text-2xl font-semibold mt-10">
                User Interface (UI) <span className="text-primary">Development</span> 
                </div>
                <div className="mt-5 text-xl">
                Using frontend technologies to Ensure that the development  of a UI is visually appealing, responsive, and user-friendly and enhancing the overall user experience of web applications.
                </div>
                
             

            </div>

            <div className="col-span-1 card mr-5">
                
                <FontAwesomeIcon icon={faPuzzlePiece} className="text-6xl"/>
                <div className="text-2xl font-semibold mt-10">
                Cross-Browser <br></br><span className="text-primary">Compatibility</span> 
                </div>
                <div className="mt-5 text-xl">
                Test and troubleshoot the functionality and appearance of websites to ensure consistency and optimal performance regardless of the user's browser choice.
                </div>
        
            </div>

            <div className="col-span-1 card mr-5">
                
                <FontAwesomeIcon icon={faGaugeHigh} className="text-6xl"/>
                <div className="text-2xl font-semibold mt-10">
                Optimization and Performance<br></br><span className="text-primary">Enhancement</span> 
                </div>
                <div className="mt-5 text-xl">
                Minimize loading times, reduce file sizes, and implement techniques like code minification and caching to enhance the overall performance and responsiveness of the website.
                </div>
                
             

            </div>
        </div>
        </div>
        <div>
        <div className=" text-5xl text-center mt-16">
            My <span className=" text-primary">Skills</span>
        </div>
        <div>

        </div>
        </div>
        <div className="p-10 bg-ash text-center mt-16">
            CC Oghenevwaire {new Date().getFullYear()}
        </div>
    </div>
  )
}
