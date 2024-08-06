import InputField from "../components/InputField";
import TextAreaInputField from "../components/TextAreaInputField";
import FillButton from "../components/FillButton";
function WriteComment() {
  return (
    <div className="space-y-8 border-b border-slate-400 py-16">
      <h1 className="text-[#08083c] text-3xl font-medium">Leave Reply</h1>
      <div>
        <p className="text-red-500" >Your email address will not be published. Required fields are marked *</p>
        <div className="flex gap-2 flex-wrap my-4">
        <InputField
          id="name"
          name="name"
          type="text"
          placeholder="Name"
        />
        <InputField
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          w={""}
        />
        <InputField
          id="title"
          name="title"
          type="text"
          placeholder="Title"
          w={100}
        />
        <TextAreaInputField
          rows={5}
          w={100}
          id="comment"
          name="comment"
          placeholder="Comment"
          type="text"
        />
      </div>
      <FillButton btnText="Post Comment" />
      </div>
    </div>
  );
}

export default WriteComment;
