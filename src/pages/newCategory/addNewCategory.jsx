import React, { useState, useContext } from 'react'
import Input from '../../components/inputs/input'
import "../NewVideos/addNewVideos.css"
import TextArea from '../../components/inputs/textArea'
import { Button } from '../../components/button/button'
import { Table, Th, Td, Tr, Tbody } from '../../components/table/table'
import { postCategory } from '../../function/postVideoAndCategory'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import DataContext from '../../contexts/dataContext'

export default function AddNewCategory() {


    const [color, setColor] = useState("#FFBA05");
    const data = useContext(DataContext)



    const schema = yup.object({
        name: yup.string().required("Categoria é obrigatório").min(3, "Mínimo 3 caracteres"),
        color: yup.string().required("Cor obrigatório").min(6, "Minimo 6 caracteres"),
        password: yup.number().typeError("Senha do usuário obrigatória").required("Senha do usuário obrigatório").integer().min(6, "Minimo 6 caracteres"),
        text: yup.string().required("Descrição é obrigatório")

    }).required();


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    function submit(object) {
        const setCategory = {
            category: object.name,
            descriptionCategory: object.text,
            color: object.color,
            "videos": []
        }
        postCategory(object.password, setCategory)
    }

    return (
        <form className='newVideos' onSubmit={handleSubmit(submit)}>
            <h2 className='title'>Nova categoria</h2>
            <Input type="text" title="Nome" name="name"
                register={register}
                errors={errors.name?.message}
            />
            <TextArea placeholder="Descrição" name="text"
                register={register}
                errors={errors.text?.message} />
            <Input type="color" title="Cor" value={color} name="color"
                register={register}
                errors={errors.color?.message}
            />

            <Input type="password" name="password" title="Código de segurança"

                register={register}
                errors={errors.password?.message}
            />
            <div className='buttons'>
                <div className='firstButtons'>
                    <Button $blue >Salvar</Button>
                    <Button $gray type="reset">Limpar</Button>
                </div>
            </div>

            <Table>
                <Tbody>
                    <Tr>
                        <Th>Nome</Th>
                        <Th>Descrição</Th>
                        <Th >Editar</Th>
                        <Th >Remover</Th>
                    </Tr>
                    {data.map(({ category, descriptionCategory, id }) => (
                        <Tr key={id}>
                            <Td>{category}</Td>
                            <Td>{descriptionCategory}</Td>
                            <Td className='button'>Editar</Td>
                            <Td className='button' onClick={async () => {

                                const userId = prompt("digite o id do usuário")

                                if (parseInt(userId) === parseInt(process.env.REACT_APP_USER)) {
                                    await fetch(`http://localhost:3030/category/${id}`, {
                                        method: "DELETE",
                                        headers: { "Content-Type": "application/json; charset=UTF-8" },
                                    })
                                } else {
                                    alert("senha invalida ou não digitada")
                                }

                            }}>Remover</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </form>
    )
}
