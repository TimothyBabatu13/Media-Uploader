
'use client';

import { useState } from "react";

const SetTransactionButtons = () => {

    const [transactionType, setTransactionType] = useState<'BGUI' | 'APT'>('BGUI');
    
    const handleChangeTransactionType = () => {
        setTransactionType((prev)=>{
            return prev === 'BGUI' ? 'APT' : 'BGUI'
        })
    }
  return (
    <div className="flex items-center justify-between">
        <button onClick={handleChangeTransactionType} className=" text-base underline" type="button">Switch to {transactionType}</button>
        <button className="text-base underline" type="button">Set max slippage</button>
    </div>
  )
}

export default SetTransactionButtons