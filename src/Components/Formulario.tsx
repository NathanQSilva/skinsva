import { useState } from "react"
import { useForm } from 'react-hook-form'

export default function Formulario() {

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm()

    const onSubmit = (data: any) => console.log(data)

    return (
        <div className="border w-9/12">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <h3>Contact Form</h3>
                </div>
                <div>
                    <input
                        type="text"
                        {...register('name')}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        {...register('sobrenome', {
                            required: true
                        })}
                    />
                    {errors.sobrenome && <p>Last name is required.</p>}
                </div>
                <div>
                    <input
                        type="text"
                        {...register('idade', {
                            required: true,
                            pattern: /\d+/
                        })}
                    />
                    {errors.idade && <p>Age is required.</p>}
                </div>
                <div>
                    <button>Submit Contact</button>
                </div>
            </form>
        </div>
    )
}