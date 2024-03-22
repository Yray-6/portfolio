import pic from '../assets/bg.jpg'

export default function Portfolio() {
  return (
    <div className=" bg-ash pt-16">
        <div className=" text-6xl text-center  pt-10">
             <span className=" text-primary">My</span> Portfolio
        </div>
        <div className=" text-xl text-center mt-5 mb-10 font-thin">
          Some of my <span className=" text-primary">Works</span> 
        </div>

        <div className=" px-32 mt-40 mb-16">
            <div className=" lg:grid-cols-2 grid ">
                <div className="lg:col-span-1 ">
                    <img src={pic} alt="" className='w-[100%] object-cover h-[450px]'/>
                </div>
                <div className='lg:col-span-1 lg:relative'>
                    <div className='bg-black py-8 px-10 lg:absolute lg:top-[20%] lg:left-[-10%]'>
                        <p className='text-primary text-3xl font-bold mb-8'>Project 1</p>
                        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex excepturi id voluptas sed totam officiis quia rerum veniam asperiores voluptatum cumque laudantium quibusdam sit deleniti voluptate, quos, adipisci amet ut.</p>
                        <div className='text-center mt-8'>
                        <button className=' py-4 px-5 bg-primary rounded-lg'>Link to my Project</button>
                        </div>
                        
                    </div>
                    

                </div>
            </div>
        </div>
        <div className=" px-32 mt-40 mb-16">
            <div className=" lg:grid-cols-2 grid ">
                <div className="lg:col-span-1 ">
                    <img src={pic} alt="" className='w-[100%] object-cover h-[450px]'/>
                </div>
                <div className='lg:col-span-1 lg:relative'>
                    <div className='bg-black py-8 px-10 lg:absolute lg:top-[20%] lg:left-[-10%]'>
                        <p className='text-primary text-3xl font-bold mb-8'>Project 1</p>
                        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex excepturi id voluptas sed totam officiis quia rerum veniam asperiores voluptatum cumque laudantium quibusdam sit deleniti voluptate, quos, adipisci amet ut.</p>
                        <div className='text-center mt-8'>
                        <button className=' py-4 px-5 bg-primary rounded-lg'>Link to my Project</button>
                        </div>
                        
                    </div>
                    

                </div>
            </div>
        </div>
        <div className=" px-32 mt-40 mb-16">
            <div className=" lg:grid-cols-2 grid ">
                <div className="lg:col-span-1 ">
                    <img src={pic} alt="" className='w-[100%] object-cover h-[450px]'/>
                </div>
                <div className='lg:col-span-1 lg:relative'>
                    <div className='bg-black py-8 px-10 lg:absolute lg:top-[20%] lg:left-[-10%]'>
                        <p className='text-primary text-3xl font-bold mb-8'>Project 1</p>
                        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex excepturi id voluptas sed totam officiis quia rerum veniam asperiores voluptatum cumque laudantium quibusdam sit deleniti voluptate, quos, adipisci amet ut.</p>
                        <div className='text-center mt-8'>
                        <button className=' py-4 px-5 bg-primary rounded-lg'>Link to my Project</button>
                        </div>
                        
                    </div>
                    

                </div>
            </div>
        </div>
        <div className=" px-32 mt-40 pb-16">
            <div className=" lg:grid-cols-2 grid ">
                <div className="lg:col-span-1 ">
                    <img src={pic} alt="" className='w-[100%] object-cover h-[450px]'/>
                </div>
                <div className='lg:col-span-1 lg:relative'>
                    <div className='bg-black py-8 px-10 lg:absolute lg:top-[20%] lg:left-[-10%]'>
                        <p className='text-primary text-3xl font-bold mb-8'>Project 1</p>
                        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex excepturi id voluptas sed totam officiis quia rerum veniam asperiores voluptatum cumque laudantium quibusdam sit deleniti voluptate, quos, adipisci amet ut.</p>
                        <div className='text-center mt-8'>
                        <button className=' py-4 px-5 bg-primary rounded-lg'>Link to my Project</button>
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
