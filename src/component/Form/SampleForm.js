import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
// import { FormData } from "./FormData";

const fileTypes = ["JPG", "PNG", "GIF"];


function SampleForm({arr , upload}) {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  arr.map((item) => console.log(item));

  return (
    <div class="p-3 mb-2 bg-white text-dark">
      <form class="w-75 p-3 border border-secondary rounded">

        {arr.map((item, index) => {
          return (
            <>
              <div key={index} class="form-group">
                <label
                  for={item.for}
                  className="d-flex justify-content-start"
                >
                  {item.title}
                </label>
                <input
                  type={item.type}
                  class="form-control"
                  id={item.id}
                  aria-describedby="emailHelp"
                  placeholder={item.placeholder}
                />
              </div>
              <br></br>
            </>
          );
        })}
        
        <br></br>

        {upload ? 
        <div class="form-group file-upload-wrapper">
          <FileUploader
            multiple={true}
            handleChange={handleChange}
            name="file"
            types={fileTypes}
          />
          {/* <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p> */}
        </div> : "" }

        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button type="reset" class="btn btn-secondary">
            Reset
          </button>
          <button type="submit" class="btn btn-success">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default SampleForm;
