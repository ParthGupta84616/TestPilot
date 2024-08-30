import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Checkbox, TextField } from "@mui/material";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
// import Paper from '@mui/material/Paper';

const outline = [
  "KEY","VALUE","DESCRIPTION"
]

function TableShow() {
  return (
    <div
      style={{
        borderRadius: "16px",
        overflow: "hidden",
        border: "2px solid rgb(0, 155, 255)",
      }}
    >
      <Table
        sx={{ minWidth: "100%" }}
        className="backdrop-blur-md bg-opacity-5 bg-blue-700 text-xl "
        aria-label="simple table"
      >
        <TableHead>
          <TableRow className="">
            <TableCell
              sx={{
                fontWeight: "bold",
                color: "white",
                borderRight: "2px solid rgb(0, 155, 255)",
              }}
            >
              <Checkbox
                {...label}
                size="large"
                className="flex items-center justify-center w-full h-0"
                sx={{
                  color: "white",
                  "&.Mui-checked": {
                    color: "white",
                  },
                }}
              />
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                color: "white",
                borderRight: "2px solid rgb(0, 155, 255)",
                height : "0px"
              }}
            >
              KEY
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                color: "white",
                borderRight: "2px solid rgb(0, 155, 255)",
                height : "0px"
              }}
            >
              VALUE
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                color: "white",
                borderRight: "2px solid rgb(0, 155, 255)",
                height : "0px"
              }}
            >
              DESCRIPTION
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell
              align="left"
              sx={{
                fontWeight: "bold",
                color: "white",
                borderRight: "2px solid rgb(0, 155, 255)",
              }}
            >
              <Checkbox
                {...label}
                size="large"
                className="flex items-center justify-center w-full h-0"
                sx={{
                  color: "white",
                  "&.Mui-checked": {
                    color: "white",
                  },
                }}
              />
            </TableCell>
            {[...Array(3)].map((_, i) => (
              <TableCell
                align="left"
                sx={{
                  fontWeight: "bold",
                  color: "white",
                  borderRight: "2px solid rgb(0, 155, 255)",
                }}
              >
                <TextField
                  key={i}
                  className="w-full text-5xl"
                  id={`outlined-basic-${i}`}
                  label={outline[i]}
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white",
                      },
                      "&:hover fieldset": {
                        borderColor: "white",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "white",
                      },
                      "& input": {
                        padding: "14px 0px", // Adjust padding to decrease height
                        fontSize: "18px", // Adjust font size if needed-
                        marginLeft: "12px",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "white",
                    },
                    "& .MuiInputBase-input": {
                      color: "white",
                    },
                  }}
                />
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default TableShow;
