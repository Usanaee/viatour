import InputField from "../../../components/InputField";
import { CiTrash } from "react-icons/ci";
import FillButton from "../../../components/FillButton";
function Pricing() {
  return (
    <div>
      <InputField
        id="tourPrice"
        name="tourPrice"
        type="text"
        placeholder="Tour Price"
        w={100}
      />
      <h2 className="text-2xl font-medium my-6">Extra Price</h2>
      <div className="flex gap-4 items-center flex-wrap">
        <InputField
          id="spb"
          name="spb"
          type="text"
          placeholder="Add Service Per Booking"
          w={""}
        />
        <InputField
          id="description"
          name="description"
          type="text"
          placeholder="Description"
          w={""}
        />
        <InputField
          id="extraPrice"
          name="extraPrice"
          type="text"
          placeholder="Price"
          w={""}
        />
        <CiTrash className="text-3xl cursor-pointer" />
      </div>
      <div className="flex gap-4 items-center flex-wrap">
        <InputField
          id="spb"
          name="spb"
          type="text"
          placeholder="Add Service Per Booking"
          w={""}
        />
        <InputField
          id="description"
          name="description"
          type="text"
          placeholder="Description"
          w={""}
        />
        <InputField
          id="extraPrice"
          name="extraPrice"
          type="text"
          placeholder="Price"
          w={""}
        />
        <CiTrash className="text-3xl cursor-pointer" />
      </div>
      <div  className="my-4" >
        <FillButton btnText="Save Changes" />
      </div>
    </div>
  );
}

export default Pricing;
