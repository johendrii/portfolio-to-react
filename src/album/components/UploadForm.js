import React, { useState } from "react";
import useFirestore from "../hooks/useFirestore";
import ProgressBar from "./ProgressBar";
import { db } from "../../firebase/firebase";

const UploadForm = () => {
  const { docs } = useFirestore("images");

  const allId = docs.map((doc) => doc.id);

  console.log(allId.length);

  console.log(allId[5]);

  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const changeHandler = async (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type) && allId.length > 5) {
      await db.collection("images").doc(allId[5]).delete();
      setFile(selected);
      setError("");
    } else if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpeg)");
    }
  };
  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
