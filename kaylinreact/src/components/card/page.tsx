import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from '../ui/badge'

const CustomCard = ({item, id }) => {
  return (
    <Card className="w-full max-w-sm">
    <CardHeader>
      <CardTitle>{item.name}</CardTitle>
    </CardHeader>
    <CardContent>
      <img src={item.image} alt="Card Image"  className='w-full' height={100}/>
      <div>
      </div> 
    </CardContent>
    <CardFooter className="flex-col gap-2">
    price:        {item.price}
    <Badge variant=" destructive">20% off</Badge>
    </CardFooter>
  </Card>
   
  )
}

export default CustomCard

