import React from "react";
import Checkbox from "../../../components/Checkbox";
import FillButton from "../../../components/FillButton";
function Included() {
  return (
    <div className="flex ">
      <div className="w-1/2 space-y-4 text-slate-600">
        <Checkbox label="Beverages, drinking water, morning tea and buffet lunch" id="1" forlabel="1"  />
        <Checkbox label="Local taxes" id="2" forlabel="2" />
        <Checkbox label="Hotel pickup and drop-off by air-conditioned minivan" id="3" forlabel="3" />
        <Checkbox label="InsuranceTransfer to a private pier" id="4" forlabel="4" />
        <Checkbox label="Soft drinks" id="5" forlabel="5" />
        <Checkbox label="Tour Guide" id="6" forlabel="6" />
        <div className="pt-4" id="7" forlabel="7" >
          <FillButton btnText="Save Changes" />
        </div>
      </div>
      <div className="w-1/2 space-y-4 4 text-slate-600">
        <Checkbox label="Towel" id="8" forlabel="8" />
        <Checkbox label="Tips" id="9" forlabel="9" />
        <Checkbox label="Alcoholic Beverages" id="10" forlabel="10" />
      </div>
    </div>
  );
}

export default Included;
