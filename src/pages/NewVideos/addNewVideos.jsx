import "./addNewVideos.css"
import { Link } from "react-router-dom";
import { Button } from "../../components/button/button";
import Input from "../../components/inputs/input";
import Select from "../../components/inputs/select";
import TextArea from "../../components/inputs/textArea";
import { useState, useEffect } from "react"
import { useGetData } from "../../hook/useDatas";
import { putVideo } from "../../function/postVideoAndCategory";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

export default function AddNewVideos() {
    const [name, setName] = useState();
    const [linkVideo, setLinkVideo] = useState()
    const [category, setCategory] = useState()
    const [description, setDescription] = useState()
    const [idUser, setIdUser] = useState()
    const [linkVideoid, setLinkVideoId] = useState()
    const [login, setLogin] = useState(false);

    const schema = yup.object({
        title: yup.string().required("Titulo é obrigatório").min(3, "Mínimo 3 caracteres"),
        idVideo: yup.string().required("Link do video é obrigatório").url("Exemplo: https://www.youtube.com/watch?v=IugcUbuK0eU"),
        password: yup.number().typeError("Senha do usuário obrigatória").required("Senha do usuário obrigatório").integer().min(6, "Minimo 6 caracteres")

    }).required();


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });



    const data = useGetData();

    useEffect(() => {
        if (linkVideo) {
            const linkVideoTrated = linkVideo.slice(linkVideo.indexOf("watch?v=") + 8, linkVideo.indexOf("watch?v=") + 8 + 11)
            setLinkVideoId(linkVideoTrated)

        }
    }, [linkVideo])

    function submit(object) {
        putVideo(data, category, object.title, linkVideoid, description, object.password, setLogin)
    }

    return (
        <>
            {
                login ? (
                    <div>cadastro realizado com sucesso</div>
                ) :
                    (
                        <form
                            onSubmit={handleSubmit(submit)}
                            className="newVideos">

                            <h2 className="title">Novo Video</h2>

                            <Input type="text" title="Titulo" name="title"
                                register={register}
                                errors={errors.title?.message}
                            />
                            <Input type="text" title="Link do video" name="idVideo"
                                onChange={(event) => setLinkVideo(event.target.value)}
                                register={register}
                                errors={errors.idVideo?.message}
                            />



                            <Select name="Categoria"
                                onChange={(event) => setCategory(event.target.value)}
                                valueTrue={parseInt(category) === 0 ? true : false}
                            >
                                {data.map(({ category, id }) => (
                                    <option key={id} value={category}>{category}</option>
                                ))}
                            </Select>


                            <TextArea placeholder="Descrição"
                                onChange={(event) => setDescription(event.target.value)}
                            />

                            <Input type="password" name="password" title="Código de segurança"

                                register={register}
                                errors={errors.password?.message}
                            />

                            <div className="buttons">
                                <div className="firstButtons">
                                    <Button type="submit" $blue>Salvar</Button>
                                    <Button $gray>Limpar</Button>
                                </div>
                                <div>
                                    <Button type="button" $blue><Link to={"/add-new-category"}>Nova categoria</Link></Button>
                                </div>
                            </div>

                        </form>
                    )}
        </>
    )
}
