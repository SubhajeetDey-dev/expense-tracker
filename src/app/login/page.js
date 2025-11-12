import { User, KeyRound } from "lucide-react";

export default function login() {
  return (
    <>
      <div className="h-screen bg-gradient-to-r from-blue-400 to-purple-300 pt-16">
        <header className="flex flex-col gap-3 justify-center items-center">
          <h1 className="text-4xl font-bold text-white">Expense Tracker</h1>
          <h3 className="text-2xl font-semibold">
            Smart expense tracking for you day to day life
          </h3>
        </header>
        <div className="flex flex-col gap-4 justify-center items-center mt-16">
          <div className="border-2 border-black w-1/4 rounded-xl p-3 flex gap-5">
          <User/>
            <input
            type="text"
              className="bg-transparent text-gray-200 placeholder-gray-500 focus:outline-none w-full"
              placeholder="Enter Your Username"
            />
          </div>
          <div className="border-2 border-black w-1/4 rounded-xl p-3 flex gap-5">
          <KeyRound />
            <input
            type="text"
              className="bg-transparent text-gray-200 placeholder-gray-500 focus:outline-none w-full"
              placeholder="Enter Your Password"
            />
          </div>
          <button className="bg-sky-500 hover:bg-sky-700 px-5 py-3 text-white font-bold rounded-2xl hover:cursor-pointer shadow-2xl">
            Login Now
          </button>
        </div>
      </div>
    </>
  );
}
