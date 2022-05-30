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
        <div className="w-9/12 flex justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center flex-col text-slate-200">
                <div className="flex flex-row justify-center gap-10">
                    <div>
                        <div className="flex flex-col mb-4">
                            <label className="text-lg">Nome:</label>
                            <input
                                className="text-slate-900 "
                                placeholder="Nome"
                                type="text"
                                {...register('nome', {
                                    required : true
                                })}
                            />
                            {errors.nome && <p>Seu nome é importante para continuar</p>}
                        </div>

                        <div className="flex flex-col mb-4">
                            <label className="text-lg">E-mail:</label>
                            <input
                                type="email"
                                placeholder="E-mail"
                                {...register('email', {
                                    required: true,
                                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                                })}
                            />
                            {errors.email && <p>Informe um email válido para continuar</p>}
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="text-lg">Assunto:</label>
                            <input
                                type="text"
                                placeholder="Assunto"
                                {...register('assunto', {
                                    required: true
                                })}
                            />
                            {errors.assunto && <p>Assunto não pode ser vazio</p>}
                        </div>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="text-lg">Mensagem:</label>
                        <input
                            type="text"
                            placeholder="Mensagem"
                            {...register('mensagem', {
                                required: true
                            })}
                        />
                        {errors.mensagem && <p>Mensagem não pode ser vazio</p>}
                    </div>
                </div>
                <button>Submit Contact</button>
            </form>
        </div>
    )
}