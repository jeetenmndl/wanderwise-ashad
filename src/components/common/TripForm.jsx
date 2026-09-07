import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const budgetSchema = z.object({
  total: z.number().min(1, "Must be atleast 1"),
  spent: z.number().optional()
})

const formSchema = z.object({
    title: z.string().min(5, "Must be atleast 5 characters"),
    description: z.string().optional(),
    startDate: z.date(),
    endDate: z.date(),
    destinations: z.array(
      z.string().min(3, "Must be atleast 3 characters")
    ).min(1, "Atleast one destination is required"),
    budget: budgetSchema
}).refine((data)=>{return data.startDate <= data.endDate},{
  message: "Start date must be before end date",
  path: ["startDate"]
})

const TripForm = () => {

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    }
  })

  return (
    <div>TripForm</div>
  )
}

export default TripForm