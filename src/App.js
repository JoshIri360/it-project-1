import React from "react";
import "./App.css";
import { TextField, InputLabel } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import tagsData from "./db/tags.json";
import areaData from "./db/areas.json";
import sysCatData from "./db/sysCat.json";

function App() {
  const [tag, setTag] = React.useState("");
  const [area, setArea] = React.useState("");
  const [sysCat, setSysCatData] = React.useState("");
  const [date, setDate] = React.useState(new Date("2022-01-01"));

  const handleTagChange = (event) => {
    setTag(event.target.value);
  };

  const handleSysCatChange = (event) => {
    setSysCatData(event.target.value);
  };

  const handleAreaChange = (event) => {
    setArea(event.target.value);
  };

  const handleDateChange = (newValue) => {
    setDate(newValue);
  };
  return (
    <div className="App flex flex-col gap-5 justify-center h-screen">
      {console.log("render")}
      <div className="flex gap-5 justify-between">
        <TextField
          id="outlined-select-currency"
          select
          fullWidth
          label="Tag Number"
          value={tag}
          onChange={handleTagChange}
        >
          {tagsData.map((options) => (
            <MenuItem key={options.id} value={options.id}>
              {options.value}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency"
          select
          fullWidth
          label="Area"
          value={area}
          onChange={handleAreaChange}
        >
          {areaData.map((options) => (
            <MenuItem key={options.id} value={options.id}>
              {options.value}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency"
          select
          fullWidth
          label="System Category"
          value={sysCat}
          onChange={handleSysCatChange}
        >
          {sysCatData.map((options) => (
            <MenuItem key={options.id} value={options.id}>
              {options.value}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth
          // select
          id="outlined-basic"
          label="System Identifier Number"
          variant="outlined"
        />
      </div>
      <div className="flex gap-5 justify-center items-center">
        <TextField
          fullWidth
          id="outlined-basic"
          label="Permit Number"
          variant="outlined"
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Task Criticality"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="SSI for approval"
          fullWidth
          variant="outlined"
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            className="date"
            label="Requested Force Date"
            inputFormat="MM/dd/yyyy"
            value={date}
            onChange={handleDateChange}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
        </LocalizationProvider>
      </div>
      <TextField
        multiline
        fullWidth
        rows={2}
        id="standard-multiline-static"
        label="Reason for the force"
      />
      <TextField
        multiline
        fullWidth
        rows={2}
        id="outlined-multiline-flexible"
        label="Remark"
      />
      <div className="flex gap-5 w-full items-center justify-between">
        <div className="flex gap-5">
          <TextField
            id="outlined-basic"
            label="Tag Number"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Tag Number"
            variant="outlined"
          />
        </div>
        <a className="bg-green-600 p-4 rounded-md cursor-pointer hover:bg-green-700 transition-all">
          SUBMIT
        </a>
      </div>
    </div>
  );
}

export default App;
