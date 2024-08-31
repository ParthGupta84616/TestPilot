import { TextareaAutosize } from "@mui/material";
import React from "react";
import Error404 from "../assests/Error404.png";
import Sending from "../assests/Sending.png";

function Response() {
  return (
    <div>
      <h1 className="text-white text-2xl m-4 font-semibold  w-[1120px] ">
        RESPONSE
      </h1>
      <TextareaAutosize
        className="w-full h-96 text-white text-lg border-gray-500 border-2 "
        minRows={3}
        maxRows={10}
        disabled
        style={{
          backdropFilter: "blur(6px)", // Adjust the blur value as needed
          backgroundColor: "rgba(0, 0, 0, 0)", // Semi-transparent background/
          borderRadius: "8px", // Optional: Add rounded corners
          padding: "16px", // Optional: Add padding
          paddingLeft: "3.5rem",
          paddingTop: "1.5rem",
          background: `url(http://i.imgur.com/2cOaJ.png)`,
          backgroundSize: "3rem ",
          backgroundAttachment: "local",
          backgroundRepeat: "no-repeat",
          cursor: "not-allowed",
        }}
      />
    </div>
  );
}

export  {Response};

const ErrorScreen = () => {
  return (
    <div>
      <h1 className="text-white text-2xl m-4 font-semibold  w-[1120px] ">
        RESPONSE
      </h1>
      <div className="w-full  text-white text-lg border-gray-500 border-2 cursor-not-allowed">
        <img src={Error404} alt="error" 
        className="w-[1150px] h-[600px] "
        />
      </div>
    </div>
  );
};

export { ErrorScreen };

const Waiting = () => {
    return (
      <div>
        <h1 className="text-white text-2xl m-4 font-semibold  w-[1120px] ">
          RESPONSE
        </h1>
        <div className="w-full  text-white text-lg border-gray-500 border-2 cursor-not-allowed">
          <img src={Sending} alt="sending" 
          className="w-[1150px] h-[600px] "
          />
        </div>
      </div>
    );
  };
  
  export { Waiting };
