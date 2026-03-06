import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 bg-red-500">
        <div className="flex px-2"></div>
      </div>
      <div className="col-span-10 pr-20">
        <Navbar />
      </div>
    </div>
  );
};

export default Dashboard;
