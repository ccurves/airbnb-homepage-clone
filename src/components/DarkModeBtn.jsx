import { Brightness4, DarkMode } from "@mui/icons-material";
import { Checkbox } from "@mui/material";
import React from "react";

const DarkModeBtn = () => {
  const lmode = localStorage.getItem("mode");
  return (
    <>
      <Checkbox
        onChange={() => {
          localStorage.setItem("mode", lmode === "light" ? "dark" : "light");
        }}
        icon={<DarkMode />}
        checkedIcon={<Brightness4 sx={{ color: "primary" }} />}
      />
    </>
  );
};

export default DarkModeBtn;
