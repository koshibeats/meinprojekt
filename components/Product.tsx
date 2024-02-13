//import css from "../src/styles/store.module.css"
import Image from "next/image";


const Product = ({imageSrc , desc, price, name} ) => {
  return (
    <>
      <div className=" mt-40 flex items-center justify-center text-3xl">
        <h1 className="mb-5">Sample Pack</h1>
      </div>
      
      <div className="flex items-center justify-center gap-x-10 mb-40">
      <div >
              <img src={imageSrc}></img>
            <h2>{name}</h2>
            <div >
              <p>{desc}</p>
              <p>{price}</p>
            </div>
            </div >
            
      </div>
      <div className=" mt-40 flex items-center justify-center text-3xl">
        

      </div>
    </>
  );
};



          
          
        

export default Product;
