import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import ModalUi from "../Modal/Modal";
import CreateCarForm from "../ui/CreateCarForm";
function createData(name, make, model, status, color) {
  return { name, make, model, status, color };
}

const rows = [
  createData("F1-15", "Ford", "6.0", "Available", "Red"),
  createData("Hilux", "Toyota", "9.0", "In Use", "White"),
  createData("Corolla", "Toyota", "16.0", "Maintenance", "Blue"),
  createData("Vitz", "Toyota", "3.7", "Available", "Black"),
  createData("Civic", "Honda", "16.0", "In Use", "Silver"),
];

export default function Layout() {
  const [open, setOpen] = useState(false);

  const handleEdit = (id) => {
    console.log(id);
    setOpen(true);
  };
  const handleDelete = (id) => {
    console.log(id);
  };
  const hadleCreateCar = () => {
    console.log("handle create");
    setOpen(true);
  };
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Vehicle Name</TableCell>
              <TableCell align="right">Make</TableCell>
              <TableCell align="right">Model</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">color</TableCell>
              <TableCell align="right">Edit</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.make}</TableCell>
                <TableCell align="right">{row.model}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.color}</TableCell>
                <TableCell align="right">
                  <EditIcon
                    onClick={() => handleEdit(row)}
                    className=" cursor-pointer transition-all text-blue-600 hover:bg-blue-400 "
                  />
                </TableCell>
                <TableCell align="right">
                  <DeleteIcon
                    onClick={() => handleDelete(row)}
                    className=" cursor-pointer text-red-600 hover:bg-red-400 "
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="text-right my-10">
        <Button variant="contained" onClick={hadleCreateCar}>
          Add Vehicle
        </Button>
      </div>
      {open && (
        <ModalUi open={open} handleClose={setOpen}>
          <CreateCarForm handleClose={setOpen} />
        </ModalUi>
      )}
    </div>
  );
}
