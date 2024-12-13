import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";

const CreateCarForm = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <section className="p-2">
      <form className="flex flex-col gap-3 ">
        <div className=" flex items-center gap-3 justify-around">
          <label className="">Car Name :</label>
          <input
            type="text"
            name="name"
            id="name"
            className="input  w-[300px]"
          />
        </div>
        <div className="flex items-center gap-3 justify-around">
          <label className="mr-4"> Make :</label>
          <input
            type="text"
            name="make"
            id="make"
            className="input w-[300px]"
          />
        </div>
        <div className="flex items-center gap-3 justify-around">
          <label> Model :</label>
          <input
            type="text"
            name="model"
            id="model"
            className="input   w-[300px]"
          />
        </div>

        <div className="flex items-center gap-3 justify-around">
          <label>Status</label>
          <FormControl fullWidth sx={{ width: "300px", marginLeft: "10px" }}>
            <InputLabel id="demo-select-small-label">Status</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="flex items-end justify-around gap-3">
          <label> Color</label>
          <input
            type="text"
            name="color"
            id="color"
            className="input  w-[300px]"
          />
        </div>
        <div className="text-right mt-8">
          <Button variant="contained">Add Car</Button>
        </div>
      </form>
    </section>
  );
};
export default CreateCarForm;
