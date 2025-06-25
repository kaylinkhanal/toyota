'use client'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
const keys = [
    ['AC','⌫','%','/'],
    ['7','8','9','*'],
    ['4','5','6','-'],
    ['1','2','3','+'],
    ['00','0','.','='],
]

const symbols = [
    'AC','+','%','/','*','-','+','00','0','.','=',
]

const Calculator = () => {
    const [output,setOutput] = useState('')

    const handleCalculation = (val) =>{
        if(output === '0' && !symbols.includes(val)) {
            setOutput(val)
            return;
        }
        if(output?.toString().slice(-1) === val && symbols.includes(val)) return;

        switch (val) {
            case '=':
                setOutput(eval(output).toString())
                break;
            case '%':
                setOutput(eval(`${output} / 100`))
                break;
            case '⌫':
                setOutput(output.slice(0, -1))
                break;
            case 'AC':
                setOutput('')
                break;
            case '.':
                setOutput(output == '' ? '0.' : output + val)
                break;
            default:
                setOutput(output + val)
                break;
        }
    
    }
  return (
    <div className='bg-black w-72 '>
        <div className='w-64 h-12 text-white border border-white rounded'>
            {!output ? `|` : output}
        </div>
        {keys.map((item,id)=>{
            return (
                <div key={id} className='flex items-center justify-center  m-2 p-2 text-white gap-2'>
                    {item.map((val, idx)=>{
                        return (
                            <Button
                            onClick={()=> handleCalculation(val)}
                            key={idx} className={`flex items-center 
                            justify-center ${symbols.includes(val) ? 'bg-orange-400' : 'bg-gray-400'} rounded-full p-4 h-12 w-12`
                            }> 
                            {val}
                                </Button>
                        )
                    })}
                    </div>
            )
        })}
        
    </div>
  )
}

export default Calculator