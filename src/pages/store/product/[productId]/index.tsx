
import React from 'react'
import Product from '../../../../../components/Product'
import { useSearchParams } from 'next/navigation'
import router, {useRouter} from "next/router"
import path from 'path';

import fs from 'fs';


export default function ProductDetail({ data, imageSrc , desc, price, myParamAsInt,name} ) {


  
return (

  <>
  
    <Product imageSrc={data.Products.ID[myParamAsInt].image} 
         desc={data.Products.ID[myParamAsInt].description}
          price = {data.Products.ID[myParamAsInt].price}
          name = {data.Products.ID[myParamAsInt].name}
           ></Product>
    
        
        </>
        )}


        export async function getServerSideProps({ params }) {
          const productId = params.productId;

          const myParamAsInt = parseInt(productId);

          

          
          const filePath = path.join(process.cwd(), 'public', 'db.json');
          
          try {
            // Daten aus der JSON-Datei lesen
            const jsonData = fs.readFileSync(filePath, "utf-8" );
            const data = JSON.parse(jsonData);
            
            return {
              props: {
                data,myParamAsInt
              },
            };
          } catch (error) {
            
            console.error('Fehler beim Lesen der JSON-Datei:', error);
            return {
              props: {
                data: null,
              },
            }
            
          }
          
          
        }
  
      
           
       
      
    


          



        
        

  
     