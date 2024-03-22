import { faContactBook, faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons/faMessage";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Contact() {
  return (
    <div className=" bg-ash pt-16">
     <div className=" text-6xl text-center  pt-10">
            Contact <span className=" text-primary">Me</span>
        </div>
        <div className=" text-xl text-center mt-5 mb-10 font-thin">
           <span className=" text-primary">Get</span> in touch
        </div>
        <div className="grid grid-cols-2 pb-16 mx-20">
          <div className="col-span-1 text-center ml-16 px-16 mt-16">
            <p className="text-3xl">Message Me</p>
            <form action="">
              <div className="mt-6">
              <input type="text" placeholder="Name" className="bg-black w-[100%] rounded-xl py-3 px-4 placeholder:text-gray-400 placeholder:text-xl"/>
              </div>
              <div className="mt-9">
              <input type="text" placeholder="Email" className="bg-black w-[100%] rounded-xl py-3 px-4 placeholder:text-gray-400 placeholder:text-xl"/>
              </div>
              <div className="mt-9">
              <input type="text" placeholder="Subject" className="bg-black w-[100%] rounded-xl py-3 px-4 placeholder:text-gray-400 placeholder:text-xl"/>
              </div>
              <div className="mt-9">
              <textarea placeholder="Message"  className="bg-black w-[100%] h-36 rounded-xl py-3 px-4 placeholder:text-gray-400 placeholder:text-xl"/>

              <button className="bg-primary rounded py-3 px-4 mt-8 mb-10 text-xl ">Submit</button>
              </div>
           
            </form>
          </div>
          <div className="col-span-1 py-9 px-32 rounded-xl  bg-black">
            <p className='mt-5 mb-16 text-center font-bold text-2xl'>Contact Info</p>
            <div className="grid grid-cols-10 text-lg">
              <div className="col-span-1">
                <FontAwesomeIcon icon={faContactBook} className="text-3xl text-primary"/>
              </div>
              <div className="col-span-9 pl-2">
                <div>
                <p className="font-bold">Name</p>
                <p>Oghenevwaire Onobrudu</p>
                  </div>
              </div>
              
            </div>
            <div className="grid grid-cols-10 text-lg mt-12">
              <div className="col-span-1">
                <FontAwesomeIcon icon={faMapLocation} className="text-3xl text-primary"/>
              </div>
              <div className="col-span-9 pl-2">
                <div>
                <p className="font-bold">Location</p>
                <p>Lagos, Nigeria</p>
                  </div>
              </div>
              
            </div>
            <div className="grid grid-cols-10 text-lg mt-12">
              <div className="col-span-1">
                <FontAwesomeIcon icon={faMessage} className="text-3xl text-primary"/>
              </div>
              <div className="col-span-9 pl-2">
                <div>
                <p className="font-bold">Mail</p>
                <p>vwaireonobrudu@gmail.com</p>
                  </div>
              </div>
              
            </div>
            <div className="grid grid-cols-10 text-lg mt-12">
              <div className="col-span-1">
                <FontAwesomeIcon icon={faPhone} className="text-3xl text-primary"/>
              </div>
              <div className="col-span-9">
                <div>
                <p className="font-bold">Call</p>
                <p>+2348130954077</p>
                  </div>
              </div>
              
            </div>

          </div>
        </div>
        <div className="p-10 bg-black text-center mt-16">
            CC Oghenevwaire {new Date().getFullYear()}
        </div>
      </div>
  )
}
