import { Link } from "react-router-dom";
import { Button } from "../../components/button/button";
import Input from "../../components/inputs/input";
import "./addNewVideos.css"
import Select from "../../components/inputs/select";
import TextArea from "../../components/inputs/textArea";
import { useState, useEffect } from "react"

export default function AddNewVideos() {
    const [name, setName] = useState();
    const [linkVideo, setLinkVideo] = useState()
    const [category, setCategory] = useState()
    const [description, setDescription] = useState()
    const [idUser, setIdUser] = useState()
    const [options, setOptions] = useState([]);
    const [users, setUsers] = useState([]);






    useEffect(() => {
        async function getData() {
            const response = await fetch("http://localhost:3030/category");
            const responseJson = await response.json();

            setOptions(responseJson)
        }
        async function getUser() {
            const getUser = await fetch("http://localhost:3030/users");
            const user = await getUser.json()
            setUsers(user);

        }
        getData()
        getUser()
    }, [])

    return (
        <form
            onSubmit={async (event) => {
                event.preventDefault()

                const checkCategory = options.find((option) => option.category === category)
                const checkUser = users.findIndex((users) => parseInt(users) === parseInt(idUser))

                let video = checkCategory.videos.push({
                    title: name,
                    idVideo: linkVideo,
                    descriptionVideo: description
                })

                if (checkUser === 0) {
                    try {
                        await fetch(`http://localhost:3030/category/${checkCategory.id}`, {
                            method: "PUT",
                            headers: { "Content-type": "application/json; charset=UTF-8" },
                            body: JSON.stringify(checkCategory)
                        })
                        console.log(checkCategory)

                    } catch (error) {
                        console.log(error)
                    }
                } else {
                    alert("Código de segurança incorreto")
                }
            }}
            className="newVideos">
            <h2 className="title">Novo Video</h2>

            <Input type="text" title="Titulo" required={true}
                onChange={(event) => setName(event.target.value)}
            />
            <Input type="text" title="Link do video" required={true}
                onChange={(event) => setLinkVideo(event.target.value)}
            />

            <Select name="Categoria" required={true}
                onChange={(event) => setCategory(event.target.value)}
            >
                {options.map(({ category, id }) => (
                    <option key={id} value={category}>{category}</option>
                ))}
            </Select>

            <TextArea placeholder="Descrição"
                onChange={(event) => setDescription(event.target.value)}
            />

            <Input type="text" required={true} title="Código de segurança"
                onChange={(event) => setIdUser(event.target.value)}
            />

            <div className="buttons">
                <div className="firstButtons">
                    <Button $blue>Salvar</Button>
                    <Button $gray>Limpar</Button>
                </div>
                <div>
                    <Button type="button" $blue><Link to={"/add-new-category"}>Nova categoria</Link></Button>
                </div>
            </div>

        </form>
    )
}
