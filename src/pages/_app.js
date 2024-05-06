import "@/styles/globals.css";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8081/api')
        .then(res => res.json())
        .then(data => setData(data.message)) // Assuming 'data.message' is what you want from the response
        .catch(err => console.log(err));
    }, []); // Empty dependency array makes the effect run only once on mount

    return (
        <div>
            <h1>{data ? data : "Loading..."}</h1>
            <Component {...pageProps} />
        </div>
    );
}


