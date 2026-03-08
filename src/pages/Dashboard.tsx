import { Cross, Trash2, X } from "lucide-react";
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
        <div className="grid grid-cols-3 my-2">
          <div className="bg-blue-500 p-5">
            <p className="text-lg">Total links</p>
            <p className="text-2xl font-medium">200</p>
          </div>
          <div className="bg-orange-500 p-5">
            <p className="text-lg">Total Clicks</p>
            <p className="text-2xl font-medium">4000</p>
          </div>
          <div className="bg-red-500 p-5">
            <p className="text-lg">Dead links</p>
            <p className="text-2xl font-medium">10</p>
          </div>
        </div>
        <table className="table-auto w-full my-10">
          <thead className="bg-slate-200">
            <tr className="h-12">
              <th>Serial</th>
              <th>Origin</th>
              <th>Redirection</th>
              <th>Dead Status</th>
              <th>Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-100 h-12">
              <th>1</th>
              <th>https://gogole.com</th>
              <th>https://abs.com</th>
              <th>No</th>
              <th>View</th>
              <th className="flex justify-center items-center h-12">
                <Trash2 className="size-5 text-red-500" />
              </th>
            </tr>
            <tr className="bg-slate-50 h-12">
              <th>2</th>
              <th>https://gogole.com</th>
              <th>https://abs.com</th>
              <th>No</th>
              <th>View</th>
              <th className="flex justify-center items-center h-12">
                <Trash2 className="size-5 text-red-500" />
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
