import React from "react";
import '../index.css'
import Auth from "./AuthComponent"
import { useState } from "react";
import Userinfo from "./Userinfo";

import { browserName } from "react-device-detect";



function Page() {
  console.log(browserName)
  if (browserName.includes("instagram") || browserName.includes("Instagram")){
    const openInDefaultBrowser = () => {
      window.open('https://clone-my-trips.vercel.app/', '_system');
    }
    return (
      <div>
        <p>
          To open this link in your default browser, please tap and hold on the link, then select "Open in Browser".
        </p>
        <a href="https://clone-my-trips.vercel.app/" target="_blank">This is Link</a>
        <button onClick={openInDefaultBrowser}>Open Link</button>
      </div>
    )
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