import PageHeading from "../../components/PageHeading";
import PageFotter from "../../components/PageFotter";
import FillButton from "../../components/FillButton";
import UploadFile from "../../components/UploadFile";
import InputField from "../../components/InputField";
import TextAreaInputField from "../../components/TextAreaInputField";
function Profile() {
  return (
    <div>
      <PageHeading
        pageName="Your Profile"
        tagLine="Wellcome To Your Profile."
      />
      <div className="flex-col space-y-6 my-12">
        <div className=" bg-white shadow-sm w-full h-auto rounded-lg  p-8 min-w-80 ">
          <h1 className="text-2xl my-6">Profile Details</h1>
          <div className="flex gap-4 flex-wrap">
            <InputField
              id="name"
              name="name"
              type="text"
              placeholder="First Name"
            />
            <InputField
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
            />
            <InputField
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              placeholder="Phone Number"
            />
            <InputField
              id="email"
              name="email"
              type="email"
              placeholder="Email"
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
            <h2 className="text-xl">Your photo</h2>
            <div className="flex gap-3">
              <UploadFile />
              <UploadFile />
            </div>
            <p>PNG or JPG no bigger than 800px wide and tall.</p>
            <FillButton btnText="Save Changes" />
          </div>
        </div>
        <div className=" bg-white shadow-sm w-full h-auto rounded-lg  p-8 min-w-80 ">
          <h1 className="text-2xl my-6">Change Password</h1>
          <div className="space-y-4" >
            <InputField
              id="oldPassword"
              name="oldPassword"
              type="password"
              placeholder="Old Password"
            />
            <InputField
              id="newPassword"
              name="newPassword"
              type="password"
              placeholder="New Password"
            />
            <InputField
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm New Password"
            />
            <FillButton btnText="Save Changes" />
          </div>
        </div>
      </div>

      <div className=" mb-6">
        <PageFotter />
      </div>
    </div>
  );
}

export default Profile;
