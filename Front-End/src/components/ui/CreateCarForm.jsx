import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

import { getCars } from "../../services/carApi";
import { createCar } from "../../services/carApi";
import { updateCar } from "../../services/carApi";
import { useEffect } from "react";
import { useState } from "react";
const CreateCarForm = ({ handleClose, carToEdit }) => {
  const [cars, setCars] = useState([]);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    defaultValues: carToEdit || {
      name: "",
      make: "",
      model: "",
      status: "",
      color: "",
    },
  });

  useEffect(() => {
    if (carToEdit) {
      reset(carToEdit);
    } else {
      reset("");
    }
  }, [carToEdit, reset]);

  const onSubmit = async (data) => {
    console.log(data);
    if (carToEdit) {
      const result = await updateCar(carToEdit._id, data);
      console.log(result);
      if (result) {
        console.log("Car updated successfully");
        handleClose(false);
      } else {
        console.error("Failed to update car");
      }
    } else {
      const result = await createCar(data);

      if (result) {
        console.log("Car created successfully");
        handleClose(false);
      } else {
        console.error("Failed to create car");
      }
    }
  };
  return (
    <section className="p-2">
      <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center gap-3 justify-around relative">
          <label>Car Name :</label>
          <input
            type="text"
            name="name"
            id="name"
            className="input w-[300px]"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <p className="absolute text-rose-700">Car name is required</p>
          )}
        </div>

        <div className="flex items-center gap-3 justify-around relative">
          <label className="mr-4">Make :</label>
          <input
            type="text"
            name="make"
            id="make"
            className="input w-[300px]"
            {...register("make", { required: true })}
          />
          {errors.make && (
            <p className="text-rose-700 absolute">Car make is required</p>
          )}
        </div>

        <div className="flex items-center gap-3 justify-around required:">
          <label>Model :</label>
          <input
            type="text"
            name="model"
            id="model"
            className="input w-[300px]"
            {...register("model", { required: true })}
          />
          {errors.model && (
            <p className="text-rose-700 absolute">Car model is required</p>
          )}
        </div>

        <div className="flex items-center gap-3 justify-around relative">
          <label>Status</label>
          <FormControl fullWidth sx={{ width: "300px", marginLeft: "10px" }}>
            <InputLabel id="demo-select-small-label">Status</InputLabel>
            <Controller
              name="status"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select
                  {...field}
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  label="Status"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="available">Available</MenuItem>
                  <MenuItem value="sold">Sold</MenuItem>
                  <MenuItem value="pending">Pending</MenuItem>
                </Select>
              )}
            />
          </FormControl>
          {errors.status && (
            <p className="text-rose-700 absolute">Car Status is required</p>
          )}
        </div>

        <div className="flex items-end justify-around gap-3 relative">
          <label>Color</label>
          <input
            type="text"
            name="color"
            id="color"
            className="input w-[300px]"
            {...register("color", { required: true })}
          />
          {errors.color && (
            <p className="text-rose-700 absolute">Car color is required</p>
          )}
        </div>

        <div className="text-right mt-8">
          <Button variant="contained" type="submit">
            {carToEdit ? "Update Car" : "Add Car"}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default CreateCarForm;
