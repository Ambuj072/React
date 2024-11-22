import { useState,useEffect } from "react";


function ClearUp(){
    const [size ,setSize]=useState(window.innerWidth)

useEffect(()=>{
    addEventListener('resize',()=>{
        setSize(()=>window.innerWidth)

    })
    return removeEventListener('resize',setSize)
})

    return(

        <>
        <div className="h-screen w-full flex text-center justify-center items-center text-4xl  bg-slate-300">
        <h1 className="uppercase">width of the window is :<span className="text-blue-700"> {size} </span></h1>
        </div>
        </>
    )
}
export default ClearUp;