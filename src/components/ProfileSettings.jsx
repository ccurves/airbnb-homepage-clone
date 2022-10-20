import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
// react icons
import { BsGlobe } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { flexCenter } from "../theme/commonStyles";

const ProfileSettings = () => {
  return (
    <Box sx={flexCenter}>
      <Link href="#"> Become A Host</Link>
      <Stack spacing={1}>
        <Button>
          <BsGlobe size={18} />
        </Button>
        <Button
          sx={{
            borderRadius: 10,
            border: "1px solid #ddd",
          }}
        >
          <Stack>
            <AiOutlineMenu size={21} />
            <FaRegUserCircle size={21} />
          </Stack>
        </Button>
      </Stack>
    </Box>
  );
};

export default ProfileSettings;
