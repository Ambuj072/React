import { useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <>
   <h1 className="text-3xl bg-green-500 text-black p-4 rounded-xl font-mono mb-4">
  Tailwind CSS
   </h1>
   <div className="flex space-x-4 items-center flex-wrap">
  <Card Name="Pancakes with Honey and Strawberries"
   discription={"Fluffy pancakes topped with sweet honey and fresh strawberries"} 
  Link={"https://images.pexels.com/photos/20109560/pexels-photo-20109560/free-photo-of-pancakes-with-honey-and-strawberries.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}/>
  
  <Card Name="Delicious Chocolate Cherry Brownies on Marble"
  discription={"Indulge in fudgy chocolate brownies with a burst of cherry"}
  Link={"https://images.pexels.com/photos/29318422/pexels-photo-29318422/free-photo-of-delicious-chocolate-cherry-brownies-on-marble.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}/>
  </div>
    </>
  )
}

export default App
