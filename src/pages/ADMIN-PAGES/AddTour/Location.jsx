import React from "react";
import InputField from "../../../components/InputField";
import FillButton from "../../../components/FillButton";
function Location() {
  return (
    <div>
      <h2 className="text-xl my-4">
        Provide Some General Details About Location:
      </h2>
      <div className="flex gap-4 flex-wrap">
        <InputField
          id="city"
          name="city"
          type="text"
          placeholder="City"
          w={""}
        />
        <InputField
          id="state"
          name="state"
          type="text"
          placeholder="State"
          w={""}
        />
        <InputField
          id="address"
          name="address"
          type="text"
          placeholder="Address"
          w={""}
        />
        <InputField
          id="zipCode"
          name="zipCode"
          type="text"
          placeholder="Zip Code"
          w={""}
        />
        <h2 className="text-xl">Map Details:</h2>
        <div className="w-full flex flex-wrap gap-4">
          <InputField
            id="latitude"
            name="latitude"
            type="text"
            placeholder="Map Latitude"
            w={""}
          />
          <InputField
            id="longitude"
            name="longitude"
            type="text"
            placeholder="Map Longitude"
            w={""}
          />
          <InputField
            id="mapZoom"
            name="mapZoom"
            type="text"
            placeholder="Map Zoom"
            w={100}
          />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109823.40662141154!2d73.01233516165867!3d30.662650656474728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922b62cd8405a6d%3A0x6cce79c0f78cbfb7!2sSahiwal%2C%20Sahiwal%20District%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1721632335420!5m2!1sen!2s"
            className="w-full h-[600px]"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <FillButton btnText="Save Changes" />
        </div>
      </div>
    </div>
  );
}

export default Location;
