import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import * as z from 'zod'

const formSchema = z.object({
    name: z.string().min(5, "Name must be atleast 5 characters").trim(),
    email: z.string().email().min(8, "Email to short").trim(),
    password: z.string().min(8, "Must be atleast 8 characters").trim(),
    confirmPassword: z.string().min(8, "Must be atleast 8 characters").trim(),
}).refine((data) => { return data.password === data.confirmPassword }, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
});

const Register = () => {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
           name: "",
           email: "",
           password: "",
           confirmPassword: ""
        },
    })

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)}>

            
        </form>
    )
}

export default Register