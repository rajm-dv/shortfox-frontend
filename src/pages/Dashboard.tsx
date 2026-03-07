import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3 bg-slate-300 h-dvh sticky top-0">
        <div className="flex p-5">
          <div className="flex items-center">
            <div className="bg-blue-500 rounded-full size-12 flex items-center justify-center p-4 text-3xl font-semibold text-white">
              R
            </div>
            <div className="ml-3">
              <p className="font-semibold italic">@rajm-dv</p>
              <p className="text-sm">rajmanna@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-9 pl-5 pr-10">
        <Navbar />
      </div>
    </div>
  );
};

export default Dashboard;
