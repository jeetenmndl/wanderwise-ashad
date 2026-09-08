import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Field, FieldError, FieldLabel } from '../ui/field'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

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
}).refine((data) => { return data.startDate <= data.endDate }, {
  message: "Start date must be before end date",
  path: ["startDate"]
})

const TripForm = () => {

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date().toISOString().split('T')[0],
      destinations: [' '],
      budget: {
        total: '',
        spent: ''
      }

    }
  })

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Card className="w-1/3 mx-auto">
        <CardHeader>
          <CardTitle>Add your Trip</CardTitle>
          <CardDescription>Fill out the details of your next trip.</CardDescription>
        </CardHeader>

        <CardContent>
          <Controller
            name="title"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Enter trip title</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  type="text"
                  placeholder="Trip to Nepal with Friends"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && <FieldError errors={s[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            name="description"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Enter trip description</FieldLabel>
                <Textarea
                  {...field}
                  id={field.name}
                  type="text"
                  placeholder="Trip to Nepal with Friends"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <div className="grid grid-cols-2 gap-2">

            <Controller
              name="startDate"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Enter start date</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    type="date"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && <FieldError errors={s[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
              name="endDate"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Enter end date</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    type="date"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && <FieldError errors={s[fieldState.error]} />}
                </Field>
              )}
            />

          </div>

          <div className="grid grid-cols-2 gap-2">

            <Controller
              name="budget.total"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Enter budget of trip</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    type="number"
                    placeholder="20000"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && <FieldError errors={s[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
              name="budget.spent"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Enter the spent amount</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    type="number"
                    placeholder="2000"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && <FieldError errors={s[fieldState.error]} />}
                </Field>
              )}
            />

          </div>





        </CardContent>
      </Card>
    </form>
  )
}

export default TripForm