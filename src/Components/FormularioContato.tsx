import { useState } from "react"
import { useForm } from 'react-hook-form'

export default function Formulario() {
    const [ enviado, setEnviado ] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmit = (data: any) => {
        console.log(data)
        setEnviado(true)
    }

    return (
        <div className="w-9/12 flex justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center flex-col text-slate-200 w-full">
                <div className="flex flex-row justify-center gap-10 w-full">
                    <div className="w-2/6">
                        <div className="flex flex-col mb-4">
                            <label className="text-lg">Nome:</label>
                            <input
                                className="text-slate-200 h-9 outline-none rounded-lg bg-slate-800 p-2 w-full"
                                placeholder="Nome"
                                type="text"
                                {...register('nome', {
                                    required: true
                                })}
                            />
                            {errors.nome && <p>Seu nome é importante para continuar</p>}
                        </div>

                        <div className="flex flex-col mb-4">
                            <label className="text-lg">E-mail:</label>
                            <input
                                className="text-slate-200 h-9 outline-none rounded-lg bg-slate-800 p-2 w-full"
                                type="text"
                                placeholder="E-mail"
                                {...register('email', {
                                    required: true,
                                    pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
                                })}
                            />
                            {errors.email && <p>Informe um email válido para continuar</p>}
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="text-lg">Assunto:</label>
                            <input
                                className="text-slate-200 h-9 outline-none rounded-lg bg-slate-800 p-2 w-full"
                                type="text"
                                placeholder="Assunto"
                                {...register('assunto', {
                                    required: true
                                })}
                            />
                            {errors.assunto && <p>Assunto não pode ser vazio</p>}
                        </div>
                    </div>
                    <div className="flex flex-col mb-4 w-2/6">
                        <label className="text-lg">Mensagem:</label>
                        <textarea
                            className="text-slate-200 h-9 outline-none rounded-lg bg-slate-800 p-2 h-full"
                            placeholder="Mensagem"
                            {...register('mensagem', {
                                required: true
                            })}
                        />
                        {errors.mensagem && <p>Mensagem não pode ser vazio</p>}
                    </div>
                </div>
                    {enviado ? 
                        <button className="buttonFormGreen w-80 rounded-lg mt-5">
                            Enviado
                        </button> : 
                        <button className="buttonForm w-80 rounded-lg mt-5">
                            Enviar mensagem
                        </button>
                    }
            </form>
        </div>
    )
}