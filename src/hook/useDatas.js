import { useState, useEffect } from "react"

export function useGetData() {

    const [getData, setGetData] = useState([])

    useEffect(() => {

        async function getData() {
            const response = await fetch("http://localhost:3030/category", {
                headers: { Accept: "Application/json" },
            })

            const responseJson = await response.json()
            setGetData(responseJson)
        }

        getData()
    }, [getData.length])


    return getData

}