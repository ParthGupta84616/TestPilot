import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import Paper from '@mui/material/Paper';

function TableShow() {
  return (
    <div>
      <Table sx={{ minWidth: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>KEY</TableCell>
            <TableCell>VALUE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="right">Hello</TableCell>
            <TableCell align="right">Hello</TableCell>
            <TableCell align="right">Hello</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default TableShow;
