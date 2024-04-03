import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import Typical from 'react-typical';

export default function Home() {
  return (
    <div className=" relative">
      <div className="pt-[20%]">
        <p className="text-5xl text-center font-semibold"><span className=" text-primary ">Oghenevwaire</span>  David Onobrudu</p>
        <p className="text-center text-2xl mt-9">I am a <span className="text-primary"><Typical  steps={['Frontend Developer', 1000, 'Freelancer!', 2000,'Nigerian',2000]}
        loop={Infinity}
        wrapper="b"
/></span> </p>
      </div>
      <div className="absolute left-7 top-[70%]">
      <p><img src={github} alt="" className="w-12 mb-3"/></p>
      <p><img src={facebook} alt="" className="w-12 mb-3"/></p>
      <p><img src={linkedin} alt="" className="w-12 mb-3"/></p>
      <p><img src={twitter} alt="" className="w-12 mb-3"/></p>
      </div>
      </div>
  )
}
