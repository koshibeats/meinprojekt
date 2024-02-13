import React, {PropsWithChildren} from "react";
import Navbar from "./Navbar";
//import Footer from "./Footer";
const Layout = ({children} : PropsWithChildren) => {


return(
    <>
        <Navbar></Navbar>
        {children}

    </>
    
    

)
}
export default Layout;