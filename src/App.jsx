import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Dog } from './component/index.jsx';

function App() {
    const [data, setData] = useState();

    useEffect(() => {
        async function getData() {
            const res = await fetch("https://v2.api.noroff.dev/auction/listings");
            const data = await res.json();
            console.log(data);
        }
        getData();
    }, []);
    return (
        <>
            <Link to={"/test"}>To test page</Link>
            <Dog />
        </>
    );
}

export default App;
