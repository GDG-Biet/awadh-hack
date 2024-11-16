import Crewcard from "./Crewcard";
import Stars from "./ui/stars";

export default function Crew() {
  return (
    <div className="bg-black bg-opacity-50 text-gray-700 min-h-screen flex flex-col items-center justify-center ">
      <h2 className="text-4xl font-bold text-white border-b-4 border-amber-400 duration-200">
        Meet the Team
      </h2>
      <Crewcard />
    </div>
  );
}
