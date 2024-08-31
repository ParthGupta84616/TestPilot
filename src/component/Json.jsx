import { TextareaAutosize } from "@mui/material";
import React from "react";

function Json() {
  return (
    <div>
        <h1 className="text-white text-2xl m-4 font-semibold">JSON</h1>
      <TextareaAutosize
        className="w-full h-96 text-white text-lg border-gray-500 border-2 "
        minRows={3}
        maxRows={10}
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
        }}
      />
    </div>
  );
}

export default Json;
