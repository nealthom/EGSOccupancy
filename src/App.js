import React, { useEffect, useState } from "react";
import MyDropzone from "./MyDropzone";

import { jsondate } from "./utils/jsondate";

import "./styles.css";

export default function App() {
  const [rawdata, setRawData] = useState();
  const [data, setData] = useState();
  useEffect(() => {
    if (rawdata) {
      jsondate(rawdata, setData);
    }
  }, [rawdata]);

  return (
    <div className="App">
      <h1>Spreadsheet</h1>
      <MyDropzone set={setRawData} />
      {data ? JSON.stringify(data) : ""}
    </div>
  );
}
