import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3 bg-slate-300 h-dvh sticky top-0">
        <div className="flex p-6 bg-blue-500">
          <div className="flex items-center">
            <div className="bg-white text-blue-700 rounded-full size-11 flex items-center justify-center text-3xl font-semibold">
              R
            </div>
            <div className="ml-3 italic">
              <p className="font-semibold">@rajm-dv</p>
              <p className="text-sm">rajmanna@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="space-y-2 my-10 px-5">
          <p className="text-lg font-medium">Change password</p>
          <input
            name="newPassword"
            type="text"
            className="w-full border border-slate-500 h-12 indent-2 placeholder:text-slate-500"
            placeholder="Enter new password"
          />
          <input
            name="oldPassword"
            type="password"
            className="w-full border border-slate-500 h-12 indent-2 placeholder:text-slate-500"
            placeholder="Enter current password"
          />
          <button className="h-12 bg-green-500 font-medium w-full hover:bg-green-600 text-white">
            Update
          </button>
        </div>
      </div>
      <div className="col-span-9 px-8">
        <Navbar />
      </div>
    </div>
  );
};

export default Dashboard;
