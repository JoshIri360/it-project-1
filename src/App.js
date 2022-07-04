import React from "react";
import "./App.css";
import { TextField, InputLabel } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function App() {
  const [tag, setTag] = React.useState("");

  const handleChange = (event) => {
    setTag(event.target.value);
  };
  const [date, setDate] = React.useState(new Date("2022-01-01"));

  const handleDateChange = (newValue) => {
    setDate(newValue);
  };
  return (
    <div className="App flex flex-col gap-5 items-center justify-center h-screen">
      <div className="flex gap-5 items-center justify-between">
        <TextField
          // select
          fullWidth
          id="outlined-basic"
          label="Tag Number"
          variant="outlined"
        >
          <MenuItem key="01">JKS2-232J-DUWR</MenuItem>
          <MenuItem key="02">JKS2-232J-DUWR</MenuItem>
          <MenuItem key="03">JKS2-232J-DUWR</MenuItem>
          <MenuItem key="04">JKS2-232J-DUWR</MenuItem>
        </TextField>
        <TextField
          fullWidth
          // select
          id="outlined-basic"
          label="Area"
          variant="outlined"
        >
          <MenuItem key="01">Area A</MenuItem>
          <MenuItem key="02">Area B</MenuItem>
          <MenuItem key="03">Area C</MenuItem>
          <MenuItem key="04">Area D</MenuItem>
          <MenuItem key="04">Area E</MenuItem>
        </TextField>
        <TextField
          // select
          fullWidth
          id="outlined-basic"
          label="System Category"
          variant="outlined"
        />
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
