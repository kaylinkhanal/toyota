'use client'
import { useState } from 'react';
import { Button } from '@/components/ui/button'


const keys = [
    ['AC','+/-','%','/'],
    ['7','8','9','*'],
    ['4','5','6','-'],
    ['1','2','3','+'],
    ['00','0','.','='],
]

const operators = [
    '+','-','/','*','='
]

const symbols= [
  'AC','+/-','%'
]

const blackList = ['*','/']

const Calculator = () => {

  const [output,setOutput] = useState('');

  const handleCalculation = (val) =>{
    const lastChar = output?.toString().slice(-1)
    switch(val){
      case '=':
        setOutput(eval(output))
        break
      case 'AC':
        setOutput('')
        break

      case '.':
        lastChar === '.' ? setOutput(output) : setOutput(output + val) 
        break

      case '*':
        if(lastChar === '*' )
          setOutput(output)
        else if (lastChar === '/')
           setOutput(output.slice(0,-1) + val)
        else
         setOutput(output + val)
        break

      case '/':
        if(lastChar === '/' )
          setOutput(output)
        else if (lastChar === '*')
           setOutput(output.slice(0,-1) + val)
        else
         setOutput(output + val)
        break


      case '+/-':


      default:
        setOutput(output + val)
    }
  }



  return (
    <div className='m-30 ml-90 bg-black w-70 h-100'>
      
      <div className=' mr-5 pt-13 h-20 text-right text-2xl text-white' >
         {output}
      </div>
      {keys.map((item,index)=>{
        return(
          <div  className = 'flex justify-center w-70 h-15 text-white gap-3 p-5' key ={index}>
            {item.map((val,id)=>{
              return(
                <Button onClick={()=>{handleCalculation(val)}} className={`${operators.includes(val) ? 'bg-orange-400' :     symbols.includes(val) ? 'bg-gray-400' : 'bg-gray-500'
                } rounded-full p-5 `} key = {id}>
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