import React from "react";
import "./App.css";
import { TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import MenuItem from "@mui/material/MenuItem";
import tagsData from "./db/tags.json";
import areaData from "./db/areas.json";
import sysCatData from "./db/sysCat.json";
import sysIdData from "./db/sysId.json";
import availableSSIData from "./db/availableSSI.json";

function App() {
  let today = new Date();
  const [tag, setTag] = React.useState("");
  const [area, setArea] = React.useState("");
  const [sysCat, setSysCatData] = React.useState("");
  const [sysId, setSysIdData] = React.useState("");
  const [availableSSI, setAvailableSSI] = React.useState("");
  const [availableSSIalt, setAvailableSSIalt] = React.useState("");
  const [date, setDate] = React.useState(
    new Date(
      `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
    )
  );

  const handleTagChange = (event) => {
    setTag(event.target.value);
  };
  const handleSysCatChange = (event) => {
    setSysCatData(event.target.value);
  };
  const handleAreaChange = (event) => {
    setArea(event.target.value);
  };
  const handleSysIdChange = (event) => {
    setSysIdData(event.target.value);
  };
  const handleSSIChange = (event) => {
    setAvailableSSI(event.target.value);
  };
  const handleSSIChangealt = (event) => {
    setAvailableSSIalt(event.target.value);
  };
  const handleDateChange = (newValue) => {
    setDate(newValue);
  };

  return (
    <div className="App flex flex-col gap-5 justify-center h-screen">
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
          select
          label="System Identifier Number"
          value={sysId}
          onChange={handleSysIdChange}
        >
          {sysIdData.map((options) => (
            <MenuItem key={options.id} value={options.id}>
              {options.value}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div className="flex gap-5 justify-center">
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
          disabled
          label="Bukola Abiodun"
          fullWidth
          helperText="Requestor"
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
      <div className="flex gap-5 w-full justify-between">
        <div className="flex gap-5 justify-between last-row">
          <TextField
            fullWidth
            label="Available SSIs For Approval"
            select
            value={availableSSI}
            onChange={handleSSIChange}
          >
            {availableSSIData.map((options) => (
              <MenuItem key={options.id} value={options.id}>
                {options.value}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            label="Alternate Approval"
            select
            value={availableSSIalt}
            onChange={handleSSIChangealt}
          >
            {availableSSIData.map((options) => (
              <MenuItem key={options.id} value={options.id}>
                {options.value}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <button
          className="bg-green-600 p-4 rounded-md cursor-pointer hover:bg-green-700 transition-all"
          onClick={() => {
            console.log(
              `Tag Number: ${tagsData[Number(tag) - 1].value}
              \nArea: ${areaData[area - 1].value}
              \nSystem Category: ${sysCatData[sysCat - 1].value}
              \nSystem Identifier: ${sysIdData[sysId - 1].value}`
            );
          }}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default App;
