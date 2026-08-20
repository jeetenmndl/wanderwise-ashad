import React from 'react'
import Navbar from '../components/common/Navbar'
import { Button } from '../components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const Contact = () => {
  return (
    <div>
      <Navbar />

      <Button>Click me</Button>
      <Button variant='outline' className="bg-destructive">Click me</Button>

      <HoverCard>
        <HoverCardTrigger>Hover</HoverCardTrigger>
        <HoverCardContent>
          
          <img src='/heroImage.jpg' alt="dfdfd" />
        </HoverCardContent>
      </HoverCard>

    </div>
  )
}

export default Contact