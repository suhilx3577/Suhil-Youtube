import { useRouteError } from "react-router-dom"

const Error =()=>{

    const err = useRouteError();
    // console.log(err);
    return(
        <>
        <h1>{err.status+ " :" +err.statusText}</h1>
        <h3>{err.data}</h3>
        </>
    )
}

export default Error