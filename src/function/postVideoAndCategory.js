

export async function postCategory(userId, setCategory) {

    if (parseInt(process.env.REACT_APP_USER) === userId) {
        try {
            await fetch("https://json-server-aluraflix.vercel.app/category", {
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

export async function putVideo(data, category, name, linkVideo, description, userId) {

    const checkCategory = data.find((option) => option.category === category)

    checkCategory.videos.push({
        title: name,
        idVideo: linkVideo.slice(linkVideo.indexOf("watch?v=") + 8, linkVideo.indexOf("watch?v=") + 8 + 11),
        descriptionVideo: description
    })

    if (parseInt(process.env.REACT_APP_USER) === userId || parseInt(category) !== 0) {

        try {
            await fetch(`https://json-server-aluraflix.vercel.app/category/${checkCategory.id}`, {
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
