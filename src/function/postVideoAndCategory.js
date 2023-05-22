import { useGetData } from "../hook/useDatas"

export async function postCategory(userId, setCategory) {

    if (process.env.REACT_APP_USER == userId) {
        try {
            await fetch("http://localhost:3030/category", {
                method: "POST",
                headers: { "Content-Type": "application/json; charset=UTF-8" },
                body: JSON.stringify(setCategory)
            })

            alert("Cadastro realizado com sucesso")
        } catch (error) {
            return error
        }
    } else {
        alert("Código do usuário incorreto")
    }

}

export async function putVideo(data, category, name, linkVideo, description, userId, login) {

    const checkCategory = data.find((option) => option.category === category)

    let video = checkCategory.videos.push({
        title: name,
        idVideo: linkVideo,
        descriptionVideo: description
    })

    if (process.env.REACT_APP_USER == userId || parseInt(category) !== 0) {

        try {
            await fetch(`http://localhost:3030/category/${checkCategory.id}`, {
                method: "PUT",
                headers: { "Content-type": "application/json; charset=UTF-8" },
                body: JSON.stringify(checkCategory)
            })

            alert("Cadastro realizado com sucesso")

        } catch (error) {
            alert(error)
        }
    } else {
        alert("Código de segurança incorreto")
    }

}
