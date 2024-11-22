import { useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";



function UseState() {
    const [count,setCount]=useState(0)


    return (
      <>
     
        <div className="h-screen flex justify-center items-center  bg-[#CC99FF] ">
            <div className="w-full gap-6 px-4 py-8 rounded-md max-w-md mx-auto text-center flex justify-center bg-slate-100">
            <button onClick={()=>setCount(count+1)} className="text-indigo-600 hover:text-indigo-800"><CiSquarePlus className="text-7xl "/></button>
            <h1 className="text-5xl mt-2">{count}</h1>
            <button onClick={()=>(count===0)? setCount(0):setCount(count-1)} className="text-indigo-600 hover:text-indigo-800"> <CiSquareMinus className="text-7xl" /></button>
            </div>
        </div>
        
      </>
    )
  }
  
  export default UseState;