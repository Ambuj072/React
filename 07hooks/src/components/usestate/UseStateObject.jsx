
import { useState } from "react";

function UseStateObject() {
    const [inputVal, setInputVal] = useState(
        {
            user_name:"",
            email:"",
        }
    );

    const handleChange = (event) => {
        const name=event.target.name
        const value=event.target.value

        setInputVal((prev)=>{
            return {...prev,[name]:value}
        })
    };

    return (
        <>
            <div className="h-screen flex justify-center items-center bg-slate-300">
              
                <div className="w-full max-w-sm py-10 px-3 bg-slate-500 rounded-md">
                    <h2 className="text-center text-white mb-4 text-xl">Registration Form</h2>
                    <form className="flex flex-col px-5 w-full" action="/submit_form" method="POST">
                     
                        <div className="mb-3">
                            <label  className="block text-white">Name:</label>
                            <input 
                                value={inputVal.name} 
                                onChange={handleChange} 
                                className="rounded-md w-full py-2 px-4 mt-1" 
                                type="text" 
                                name="user_name" 
                               
                            />
                        </div>

                        
                        <div className="mb-3">
                            <label htmlFor="email" className="block text-white">Email:</label>
                            <input 
                                className="rounded-md w-full py-2 px-4 mt-1" 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={inputVal.email} 
                                onChange={handleChange}
                                 
                            />
                        </div>

                       
                        <div className="mb-3">
                            <label htmlFor="password" className="block text-white">Password:</label>
                            <input 
                                className="rounded-md w-full py-2 px-4 mt-1" 
                                type="password" 
                                id="password" 
                                name="password" 
                                
                            />
                        </div>

                      
                        <div className="mb-3">
                            <label htmlFor="confirm_password" className="block text-white">Confirm Password:</label>
                            <input 
                                className="rounded-md w-full py-2 px-4 mt-1" 
                                type="password" 
                                id="confirm_password" 
                                name="confirm_password" 
                               
                            />
                        </div>

                      
                        <button type="submit" className="mt-4 py-2 px-4 rounded-md bg-blue-600 text-white hover:bg-blue-700">Submit</button>

                        
                        <p className="mt-4 text-white">{`Your name is: ${inputVal.user_name} and Email is :${inputVal.email}`}</p>
                    </form>
                </div>
            </div>
        </>
    );
}

export default UseStateObject;
