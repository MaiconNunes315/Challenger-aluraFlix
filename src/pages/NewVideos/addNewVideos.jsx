import "./addNewVideos.css"
import { Link } from "react-router-dom";
import { Button } from "../../components/button/button";
import Input from "../../components/inputs/input";
import Select from "../../components/inputs/select";
import TextArea from "../../components/inputs/textArea";
import { useState } from "react"
import { useGetData } from "../../hook/useDatas";
import { putVideo } from "../../function/postVideoAndCategory";

export default function AddNewVideos() {
    const [name, setName] = useState();
    const [linkVideo, setLinkVideo] = useState()
    const [category, setCategory] = useState()
    const [description, setDescription] = useState()
    const [idUser, setIdUser] = useState()

    const data = useGetData();

    return (
        <form
            onSubmit={async (event) => {
                event.preventDefault()
                await putVideo(data, category, name, linkVideo, description, idUser)
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
                {data.map(({ category, id }) => (
                    <option key={id} value={category}>{category}</option>
                ))}
            </Select>

            <TextArea placeholder="Descrição"
                onChange={(event) => setDescription(event.target.value)}
            />

            <Input type="password" required={true} title="Código de segurança"
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
