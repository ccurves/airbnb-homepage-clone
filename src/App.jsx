import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";

import "./styles/App.css";
import OptionsTab from "./components/OptionsTab";
import LocationsCards from "./components/LocationsCards";
import { Container } from "@mui/material";
import Footer from "./components/Footer";
import { displayOnDesktop } from "./theme/commonStyles";
import FooterMenu from "./components/FooterMenu";
import MobileFooter from "./components/MobileFooter";

function App() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Box>
          <Header />
          <OptionsTab />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            height: 100,
            overflowY: "scroll",
          }}
        >
          <Container maxWidth="xl" sx={{ mb: 3 }}>
            <LocationsCards />
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              <MobileFooter />
            </Box>
          </Container>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <FooterMenu />
        </Box>
        <Box sx={displayOnDesktop}>
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default App;
