import React from "react";
import '../index.css'
import Auth from "./AuthComponent"
import { useState } from "react";
import Userinfo from "./Userinfo";
import { useEffect } from "react";

import { browserName } from "react-device-detect";



function Page() {
  console.log(browserName)
  if (browserName.includes("instagram") || browserName.includes("Instagram")){
    const linkvar="https://clone-my-trips.vercel.app/"
    useEffect(()=>{
      document.getElementById("clicklink").click()
    },[])
    return(<div className="insta-container"> 
      <p>This app can't be displayed in instagram</p>
      <h6>Click on below button</h6>
      <a id="clicklink" href={linkvar} target="_blank" download>Open in browser</a>
      </div>)
  }
  else{
    const [datavar,useDatavar]=useState("")
    function dataHandle(data){
    useDatavar(data)
  }
    return (<>
    {!datavar&&<><h4>Select the Account</h4><Auth updateData = {dataHandle}></Auth></>}
    {datavar&&<><h4>User details</h4><Userinfo props={datavar}></Userinfo></>}
    </>
    )
  }
  
  }
  
  export default Page