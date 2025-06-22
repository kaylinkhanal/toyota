'use client'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

const Counter = () => {
    let [a, setA] = useState(5)
    const decrement = (() => {
        if(!(a===0)){
            setA(a-1)
        }  
    })

    const increment= (()=>{
        if (!(a===10))
        setA(a+1)
    })
    return (
        <div>
            {a} <br />
            <Button className='m-2 cursor-pointer' onClick={increment}>Increment</Button>
            <Button className='cursor-pointer' onClick={decrement}>Decrement</Button>
        </div>
    )
}

export default Counter