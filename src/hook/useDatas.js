import { useState, useEffect } from "react"

export function useGetData() {

    const [getData, setGetData] = useState([])

    useEffect(() => {

        async function getData() {
            const response = await fetch("https://json-server-aluraflix.vercel.app/category", {
                headers: { Accept: "Application/json" },
            })

            const responseJson = await response.json()
            setGetData(responseJson)
        }

        getData()
    }, [getData.length])


    return getData

}