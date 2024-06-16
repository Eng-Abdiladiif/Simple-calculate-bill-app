"use client";

import Description from "@/components/Description";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [bill, setbill] = useState();
  const [resto, setResto] = useState();
  const [result, setResult] = useState();
  const [name, setName] = useState();

  const handleinputBill = (event) => {
    setbill(event.target.value);
  };

  const handleInputResto = (Event) => {
    setResto(Event.target.value);
  };

  const handleName = (Event) => {
    setName(Event.target.value);
  };

  const calculationResult = () => {
    const Total = Number(bill) + Number(resto);

    setResult(Total);
  };

  return (
    <>
      <div className="bg-blue-800 dark:bg-gray-700/25 w-full h-72">
        {/* navbar */}
        <div>
          <Navbar />
          <Description />
        </div>

        <div
          className="bg-white md:max-w-2xl mx-auto h-[600px] 
      mt-[40px] max-w-[400px] rounded-lg  md:h-[360px]  space-y-4
      shadow-md shadow-blue-500 dark:shadow-sm dark:shadow-white"
        >
          {/* two bar */}
          <div className="flex flex-col justify-around 
           md:flex-row">
          <div className="p-3 space-y-3">
            {/* name */}
            <div className="flex flex-col space-y-3 md:w-60">
              <label
                htmlFor=""
                className="text-black text-md font-sans
          font-bold"
              >
                Name
              </label>

              <input
                type="text"
                className=" bg-gray-300 px-5 py-2 
      rounded-md  disabled:opacity-50 disabled:cursor-not-allowed
      text-black"
                placeholder="Enter Your Name"
                value={name}
                onChange={handleName}
              />
            </div>

            {/* Total Bill */}
            <div className="flex flex-col space-y-3 md:w-60">
              <label
                htmlFor=""
                className="text-black text-md font-sans
font-bold"
              >
                Total Bill
              </label>

              <input
                type="number"
                className=" bg-gray-300 px-5 py-2 
rounded-md  disabled:opacity-50 disabled:cursor-not-allowed
text-black"
                placeholder="Total Bill"
                value={bill}
                onChange={handleinputBill}
              />
            </div>
            {/* Deyn */}
            <div className="flex flex-col space-y-3 md:w-60">
              <label
                htmlFor=""
                className="text-black text-md font-sans
         font-bold"
              >
                Deyn
              </label>

              <input
                type="text"
                className=" bg-gray-300 px-5 py-2 
rounded-md  disabled:opacity-50 disabled:cursor-not-allowed
text-black"
                placeholder="Deyn"
                value={resto}
                onChange={handleInputResto}
              />
            </div>
          </div>

          <div className="text-black md:mt-10 mt-5 px-10 md:px-0" >

          {/* 1th */}
          <div>

            <h1 className=" font-Poppins text-lg font-bold">Bill sheet App</h1>
            <h2 className="font-DM text-lg font-bold
            text-blue-800 italic capitalize"
            >{`your full Name is : ${name}`}</h2>
          </div>
          {/* 2th */}
          <div className=" mt-10">

            <h1 className="text-xl font-bold">Total: {`$${bill}`}</h1>
            <h2 className="text-xl font-bold">Deyn: {`$${resto}`}</h2>
          </div>
          {/* 3th */}

          <div className="mt-5">
            <button className="px-5 py-2 bg-blue-600 text-white
            rounded-full hover:bg-blue-900 transition-all duration-500" onClick={calculationResult}>

              Calculate

            </button>


            <div className="mt-10">


              <h1 className="text-4xl font-bold text-red-700">

                ${result}
              </h1>


            </div>
          </div>






          



          </div>
          </div>
         
        </div>
      </div>
    </>
  );
}
