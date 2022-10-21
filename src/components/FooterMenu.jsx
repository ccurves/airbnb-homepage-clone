import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FaSearch, FaRegHeart, FaRegUserCircle } from "react-icons/fa";
import "../styles/FooterMenu.css";

const footerMenu = [
  {
    id: 1,
    text: "Explore",
    icon: <FaSearch size={24} className="icon" />,
    active: true,
  },
  { id: 2, text: "Wishlist", icon: <FaRegHeart size={24} className="icon" /> },
  {
    id: 3,
    text: "Login",
    icon: <FaRegUserCircle size={24} className="icon" />,
  },
];

const FooterMenu = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexGrow: 1,
      }}
    >
      <Stack>
        {footerMenu.map((item) => {
          return (
            <Button key={item.id}>
              <Stack
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
                direction="column"
                spacing={1}
                // className={item.active ? "active" : ""}
              >
                {/* <span>{item.icon}</span>
                <Typography> {item.text}</Typography> */}
                <span style={item.active ? { color: "#ff385c" } : {}}>
                  {item.icon}
                </span>
                <span
                  style={
                    item.active
                      ? { fontWeight: "bold", marginTop: "0px" }
                      : { marginTop: "0px" }
                  }
                >
                  <Typography> {item.text}</Typography>
                </span>
              </Stack>
            </Button>
          );
        })}
        {/* <Box>
          <DarkModeBtn />
        </Box> */}
      </Stack>
    </Box>
  );
};

export default FooterMenu;
