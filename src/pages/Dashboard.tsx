import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <main className="grid grid-cols-12">
        <div className="col-span-4 flex flex-col items-center py-10">
          <div>
            <img
              src="./profile.png"
              alt="User Profile Image"
              className="size-20"
            />
          </div>
          <div className="text-center my-4 space-y-2">
            <strong className="italic">@rajm-dv</strong>
            <p className="text-xl font-medium">raj@gmail.com</p>
          </div>
          <div className="space-y-2 my-10">
            <p className="text-lg font-medium">Change password</p>
            <div className="flex flex-col items-center space-y-3">
              <input
                type="password"
                name="newPassword"
                placeholder="Enter the new password"
                className="h-12 border border-slate-500 placeholder:text-slate-500 p-2"
              />
              <input
                name="oldPassword"
                type="password"
                placeholder="Enter the current password"
                className="h-12 border border-slate-500 placeholder:text-slate-500 p-2"
              />
              <button className="w-full bg-green-500 p-3 text-lg font-medium hover:bg-green-600 text-white mt-5">
                Update
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-8">
          <div>Hwllo</div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
