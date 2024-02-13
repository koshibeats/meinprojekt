import  "../styles/globals.css";
import type {AppProps} from "next/app"
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";


function MyApp({ Component, pageProps }: AppProps) {
 
    return (
      <>
      <Layout></Layout>
      <Component {...pageProps} /></>
        
      
    );
  }
  export default MyApp;