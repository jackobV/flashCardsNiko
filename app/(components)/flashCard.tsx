import {useEffect, useState} from "react";

type FlashCardType = {
    id:number,
    n:number,
    pojem:string,
    vyznam:string,
}

export default function FlashCard(props:FlashCardType ){
    const [status, setStatus] = useState(0)
    function setStatusFunc() {
        if(status === 0){
            setStatus(1)
        }else{
            setStatus(0)
        }
    }
    useEffect(()=>{
        setStatus(status)
    },[status])
    return(
        <div className="flex flex-col items-center cursor-pointer" onClick={setStatusFunc}>
            <div className="bg-gray-700 rounded-lg h-72 w-96 text-white text-center flex flex-col justify-center p-4">
                <p>
                    {
                        status === 0 ?
                            props.vyznam :
                            props.pojem
                    }
                </p>

            </div>
        </div>

    )
}