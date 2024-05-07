import React from "react";
import '../index.css'
import Auth from "./AuthComponent"
import { useState } from "react";
import Userinfo from "./Userinfo";
import { Helmet } from 'react-helmet';
import { browserName, browserVersion } from "react-device-detect";



function Page() {
  console.log(browserName)
  if (browserName.includes("instagram") || browserName.includes("Instagram")){
    window.location.href="https://clone-my-trips.vercel.app/"
  }
  else{
    const [datavar,useDatavar]=useState("")
    function dataHandle(data){
    useDatavar(data)
  }
    return (<>
    <Helmet>
        <script src="../script.js"></script>
    </Helmet>
    {!datavar&&<><h4>Select the Account</h4><Auth updateData = {dataHandle}></Auth></>}
    {datavar&&<><h4>User details</h4><Userinfo props={datavar}></Userinfo></>}
    </>
    )
  }
  
  }
  
  export default Page