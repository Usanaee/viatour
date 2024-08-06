import React from "react";
import InputField from "../../../components/InputField";
import TextAreaInputField from "../../../components/TextAreaInputField";
import UploadFile from "../../../components/UploadFile";
import FillButton from "../../../components/FillButton";
function Content() {
  return (
    <div>
      <div className="flex gap-4 flex-wrap">
        <InputField
          id="title"
          name="title"
          type="text"
          placeholder="Tour Title"
        />
        <InputField
          id="category"
          name="category"
          type="text"
          placeholder="Category"
          w={""}
        />
        <InputField
          id="keywords"
          name="keywords"
          type="text"
          placeholder="Keywords"
          w={100}
        />
        <TextAreaInputField
          rows={8}
          columns={""}
          id="info"
          name="info"
          placeholder="Information"
          type="text"
        />
      </div>
      <div className=" mt-4 space-y-5">
        <h2 className="text-xl">Gallery</h2>
        <div className="flex gap-3 flex-wrap">
          <UploadFile />
          <UploadFile />
          <UploadFile />
          <UploadFile />
        </div>
        <p>PNG or JPG no bigger than 800px wide and tall.</p>
        <FillButton btnText="Save Changes" />
      </div>
    </div>
  );
}

export default Content;
