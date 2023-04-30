"use client"
import FlashCard from "@/app/(components)/flashCard";


//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
import dataImport from "../csvjson.json"
import {useEffect, useState} from "react";
export default function FlashCardProvider(){
    type FlashCardType = {
        id:number,
        n:number,
        pojem:string,
        vyznam:string,
    }
    const [data,setData] = useState(dataImport)
    const [mode, setMode] = useState(0)
    const [id, setId] = useState(0);
    let dataDisplay = <FlashCard id={data[id].id} n={data[id].n} pojem={data[id].pojem} vyznam={data[id].význam} beginStatus={0} />

    function SetMode(){
        if(mode === 0){
            Reset()
            let randomArr = data.sort(() => Math.random() - 0.5);
            setData(randomArr)
            setMode(1)

        }else{
            setData(dataImport)
            setMode(0)
        }
    }
    function NextCard(){
        setId(id + 1)
    }
    function Reset(){
        setId(0)
    }
    function PrevCard(){
        setId(id - 1)
    }
    useEffect(()=>{
        console.log(data[id])
        console.log(id)
        dataDisplay = <FlashCard id={data[id].id} n={data[id].n} pojem={data[id].pojem} vyznam={data[id].význam} beginStatus={0} />

    },[id])
    return(
        <div className="flex flex-col h-screen items-center bg-gray-300 text-black">
            <div onClick={SetMode} className="py-10">Randomizovat</div>
            <div className="flex flex-row text-gray-400 text-sm gap-x-2 pb-1">
                <div>ID otázky: {data[id].id}</div>
                <div onClick={Reset} className="cursor-pointer text-gray-gray-500">reset</div>
            </div>
            <div className="grid grid-cols-5  w-full">
                <div className="col-span-1 flex flex-col items-center cursor-pointer h-72 justify-center" onClick={PrevCard}>
                    <div className="px-4 py-2 bg-gray-500 rounded-xl text-white font-medium">Prev</div>
                </div>
                <div className="col-span-3">
                    {dataDisplay}
                </div>
                <div className="col-span-1 flex flex-col items-center cursor-pointer h-72 justify-center" onClick={NextCard}>
                    <div className="px-4 py-2 bg-gray-500 rounded-xl text-white font-medium">Next</div>
                </div>

            </div>
        </div>

    )
}