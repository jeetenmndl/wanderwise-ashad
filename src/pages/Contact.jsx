import React from 'react'
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

      <Card className="w-80">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction>Card Action</CardAction>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>

    </div>
  )
}

export default Contact