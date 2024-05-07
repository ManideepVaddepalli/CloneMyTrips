import React from "react";
import '../index.css'
import Auth from "./AuthComponent"
import { useState } from "react";
import Userinfo from "./Userinfo";

import { browserName } from "react-device-detect";



function Page() {
  console.log(browserName)
  if (browserName.includes("instagram") || browserName.includes("Instagram")){
    const linkvar="https://clone-my-trips.vercel.app/"
    window.open(linkvar,"_blank")
    class test extends React.Component{
      componentDidMount(){
        document.getElementById("clicklink").click()
      }
      render(){
        return(<a href={linkvar} target="_blank" download>Open in browser</a>)
      }
    }
    
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