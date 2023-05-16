import React, { useState, useEffect } from 'react'
import Input from '../../components/inputs/input'
import "../NewVideos/addNewVideos.css"
import TextArea from '../../components/inputs/textArea'
import { Button } from '../../components/button/button'
import { Table, Th, Td, Tr, Tbody } from '../../components/table/table'

export default function AddNewCategory() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [color, setColor] = useState("#FFBA05");
    const [user, setUser] = useState();
    const [userId, setUserId] = useState();
    const [data, setData] = useState([]);

    useEffect(() => {

        (async () => {
            const res = await fetch("http://localhost:3030/category")
            const resJson = await res.json();

            setData(resJson);
        })()

        const getUser = async () => {
            const getUsers = await fetch("http://localhost:3030/users");
            const users = await getUsers.json()
            setUser(users);
        }

        getUser()

    }, [data.length])

    const setCategory = {
        category: name,
        descriptionCategory: description,
        color: color,
        "videos": []
    }

    return (
        <form className='newVideos' onSubmit={async (event) => {
            event.preventDefault();
            const checkUser = user.findIndex((users) => parseInt(users) === parseInt(userId))

            if (checkUser === 0) {
                try {
                    await fetch("http://localhost:3030/category", {
                        method: "POST",
                        headers: { "Content-Type": "application/json; charset=UTF-8" },
                        body: JSON.stringify(setCategory)
                    })

                } catch (error) {
                    console.log(error)
                }
            } else {
                alert("Usuário incorreto")
            }

        }}>
            <h2 className='title'>Nova categoria</h2>
            <Input type="text" title="Nome" required={true} onChange={(event) => setName(event.target.value)} />
            <TextArea placeholder="Descrição" onChange={(event) => setDescription(event.target.value)} />
            <Input type="color" title="Cor" required={true} value={color} onChange={(event) => setColor(event.target.value)} />
            <Input type="password" title="Código de segurança" required={true} onChange={(event) => setUserId(event.target.value)} />
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
                            <Td className='button' onClick={async (event) => {
                                await fetch(`http://localhost:3030/category/${id}`, {
                                    method: "DELETE",
                                    headers: { "Content-Type": "application/json; charset=UTF-8" },
                                })
                            }}>Remover</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </form>
    )
}
