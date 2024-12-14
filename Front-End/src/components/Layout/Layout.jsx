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
import { useEffect } from "react";
import { getCars } from "../../services/carApi";
import { deleteCar } from "../../services/carApi";
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
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await getCars();
        const carsData = res.cars || [];
        setCars(carsData);
      } catch (error) {
        console.error("Failed to load cars:", error);
      }
    };

    fetchCars();
  }, []);

  const handleEdit = (car) => {
    console.log(car);
    setSelectedCar(car);
    setOpen(true);
  };
  const handleDelete = async (car) => {
    console.log(car);
    const deletCar = await deleteCar(car._id);
    if (!deletCar) {
      console.log("Not deleted");
    } else {
      console.log("Car Succefully deleted");
    }
  };
  const hadleCreateCar = () => {
    console.log("handle create");
    setOpen(true);
  };
  console.log(cars);
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
            {cars.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {console.log(row)}
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
      <div className="mt-100">
        <p className="text-2xl text-pink-500 text-center">
          {" "}
          This is Small App is Developed in
          <br /> 3hr after reading job posted in Freelance
          <br /> Ethiopia i am Nathnael Zelalem i used{" "}
          <span className="text-pretty uppercase underline text-slate-800">
            <a href="https://www.geeksforgeeks.org/mern-stack/">MERN stack</a>
          </span>
          <br /> which include 3rd party packages MUI,React hook form, tailwind
          css <br />
          <span className="text-slate-700 ">Thank you 🙏</span>
        </p>
      </div>
      {open && (
        <ModalUi open={open} handleClose={setOpen}>
          <CreateCarForm handleClose={setOpen} carToEdit={selectedCar} />
        </ModalUi>
      )}
    </div>
  );
}
