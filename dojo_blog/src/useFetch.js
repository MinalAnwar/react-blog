import { useState, useEffect } from "react"
const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setPending] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const abortcontroller = new AbortController()//t abort fetch when go to other page during loading
        setTimeout(() => {
            //using this useeffect to fectch data from json file
            fetch(url, { signal: abortcontroller.signal }) // connecting abort controller with this fetch
                .then(res => {
                    if (!res.ok) {
                        throw Error("Could not fetch the data for that resourse")
                    }
                    return res.json()
                })
                .then(data => {
                    setData(data);
                    setPending(false)
                })
                .catch(err => {
                    if (err.name == "AbortError") {
                        console.log("fetch aborted")
                    }
                    else {
                        setError(err.message)
                        setPending(false)
                    }
                })
        }, 800)

        return () => abortcontroller.abort() // this says abort the fetch which is associated to this 
    }, [url])
    const changeData = (state) => {
        setData(state)
    }
    return { data, isPending, error, changeData }
}

export default useFetch;
