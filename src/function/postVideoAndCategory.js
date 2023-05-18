import { useGetData } from "../hook/useDatas"

export async function postCategory(userId, setCategory) {

    if (process.env.REACT_APP_USER == userId) {
        try {
            await fetch("http://localhost:3030/category", {
                method: "POST",
                headers: { "Content-Type": "application/json; charset=UTF-8" },
                body: JSON.stringify(setCategory)
            })
            return setCategory
        } catch (error) {
            return error
        }
    } else {
        alert("Usuário incorreto")
    }

}

export async function putVideo(data, category, name, linkVideo, description, userId) {

    const checkCategory = data.find((option) => option.category === category)

    let video = checkCategory.videos.push({
        title: name,
        idVideo: linkVideo,
        descriptionVideo: description
    })

    if (process.env.REACT_APP_USER == userId) {
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

}
