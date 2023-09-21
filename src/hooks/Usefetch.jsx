import { useEffect, useState } from "react"


export function Usefetch(url) {
    const [data, setData] = useState(null)
    const [isPending, setPending] = useState(false)
    const [error, seteror] = useState(null)
    useEffect(()=>{
        const fetchData = async ()=>{
            setPending(true)

            try {
                const req = await fetch(url)
                if (!req.ok) {
                    throw new Error(req.statusText)
                }
                const data = await req.json()
                setData(data)
                setPending(false)
            } catch (err) {
                seteror(err.message)
                setPending(false)

            }
          
        }

        fetchData()
    }, [url])
    return { data,isPending,error }
}



