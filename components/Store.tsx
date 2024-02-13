//import css from "../src/styles/store.module.css"
import Image from "next/image";
const Store = () => {
  return (
    <>
      <div className=" mt-40 flex items-center justify-center text-3xl">
        <h1 className="mb-5">Sample Packs</h1>
      </div>
      
      <div className="flex items-center justify-center gap-x-10 mb-40">
      <div >
              <Image 
                src="/cover1.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            
            <div >
              <p>Loopkit Palace</p>
              <p>30$</p>
            </div>
            </div >
            
      </div>
      <div className=" mt-40 flex items-center justify-center text-3xl">
        <h1 className="mb-5">Guitar Loops</h1>
      </div>
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
        <h1 className="mb-5">RnB Loops</h1>
      </div>
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
        <h1 className="mb-5">Hard Loops</h1>
      </div>
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
    
    
          

      
    </>
  );
};

export default Store;
