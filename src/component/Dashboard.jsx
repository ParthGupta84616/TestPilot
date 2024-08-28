import React from "react";
import { ComboboxDemo } from "./ComboBox";
// import { Button } from '../components/ui/button'
/* Add this CSS to your stylesheet */
import "../animation.css";
import { Button } from "../components/ui/button";


function Dashboard() {
  return (
    <div className="relative">
      <div className="absolute "></div>
      <div className="relative flex justify-center items-center gap-2">
        <ComboboxDemo />
        <main class="">
          <label className="flex flex-col-reverse relative focus group">
            <input
              type="URL"
              name="URL"
              required
              placeholder="Enter URL or paste text"
              className="border-2 h-14 w-[850px] text-xl font-semibold left-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-500 pl-2"
            />
          </label>
        </main>
        <Button size="send" varient="default" >
          Send
        </Button>
      </div>
    </div>
  );
}

export default Dashboard;
