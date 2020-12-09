import React, {useEffect, useState} from "react";
import Table from "./components/Table";

function App() {
    const [tableData,setTableData] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/shipments")
            .then(response => response.json())
            .then(json => setTableData(json))
    }, [])

    return (
        <div className="mr-5 ml-5 mt-5">
            <Table tableData={tableData}/>
        </div>
    );
}

export default App;
