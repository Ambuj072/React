import React from "react";
function Card({Name,Link,discription}) {
    return (  
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black ">
          <img
            src={Link}
            alt=""
            className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            take It
            </span>
          <h2 className="text-xl font-semibold tracking-wide">{Name}</h2>
          </div>
          <p className="text-gray-300">
          {discription}
          </p>
        </div>
    );
}

export default Card;