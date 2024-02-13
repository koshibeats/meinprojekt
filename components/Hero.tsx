import React from 'react'
import Image from "next/image";


const Hero =() => {
  return (
    <> <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img '>
    
    <div className="" />
    <div className='p-5 text-white z-[2] mt-[-10rem]'>
      <h2 className='text-5xl font-bold'>Elevate your Sound</h2>
      <p className='py-5 text-xl'></p>
      <button className='px-8 py-2 border'>Shop =></button>
      
    </div>
    
  </div>
  <div className="flex items-center justify-center text-2xl font-bold">Popular Picks</div>
  <div className="flex items-center justify-center text-lg ">You can start here</div>
  <div className="flex items-center justify-center gap-x-10">
            <div >
              <Image 
                src="/cover1.jpg"
                width={200}
                height={200}
                alt="Picture of the author"
              />
            
            <div >
              <p>Loopkit Palace</p>
              <p>30$</p>
            </div>
            </div >
              <div >
                <Image
                  src="/cover3.jpeg"
                  width={200}
                  height={200}
                  alt="Picture of the author"
                />
              
              <div >
                <p>Loopkit Palace</p>
                <p>30$</p>
              </div>
              </div>
              <div>
                <div >
                  <Image
                    src="/cover2.jpeg"
                    width={200}
                    height={200}
                    alt="Picture of the author"
                  />
                
                
                <div>
                  <p>Loopkit Palace</p>
                  <p>30$</p>
                  </div></div>
                  </div></div>
    
                  <div className=" mt-40 flex items-center justify-center text-3xl">
        

      </div>
      
      </>
      )};
      export default Hero;