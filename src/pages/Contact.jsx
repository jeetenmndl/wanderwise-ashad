import React, { useEffect, useState } from 'react'
import Navbar from '../components/common/Navbar'
import { Button } from '../components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Contact = () => {
  const [count, setCount] = useState("jeeten");

  useEffect(()=>{
    console.log("Use effect is running");
  }, [count])


  return (
    <div>
      <Navbar />

     <h1 className='text-5xl font-bold text-center'>{count}</h1>

     <Button onClick={()=>{setCount(count + "hello"); console.log(count)}} >Add</Button>

    </div>
  )
}

export default Contact