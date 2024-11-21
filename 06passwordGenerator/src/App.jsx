import { useCallback, useState,useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*_-+=><?/*-+";
    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length +1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,characterAllowed,passwordGenerator])
 
  const passwordRef=useRef(null)

  const copyPasswordToclipboard=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(Password)
  },[Password])

  return (
    <>
      <div className="w-full max-w-md mx-auto text-center px-4 py-3 my-8 rounded-lg  text-orange-500  bg-gray-700">
        <h1 className="text-center text-white my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
          type="text"
          className="outline-none w-full py-1 px-3  " 
          value={Password}
          ref={passwordRef}
          />
          <button onClick={copyPasswordToclipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5">Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-2">
            <input type="range"
             min={6} 
             max={50}
             value={length}
             className="cursor-pointer"
             onChange={(e)=>{setLength(e.target.value)}}
             />
             <label htmlFor="">Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-2">
              <input type="checkbox" 
              defaultChecked={numberAllowed}
              onChange={()=>{setNumberAllowed((prev)=>!prev)}}
              
              />
              <label htmlFor="">Number</label>
          </div>
          <div className="flex items-center gap-x-2">
          <input type="checkbox" 
              defaultChecked={characterAllowed}
              onChange={()=>{setCharacterAllowed((prev)=>!prev)}}
              />
              <label htmlFor="">Character</label>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
