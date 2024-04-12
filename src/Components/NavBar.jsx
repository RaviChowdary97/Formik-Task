import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "crimson" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            LIBRARY MANAGEMENT
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button sx={{ color: "#fff" }} onClick={() => navigate("/")}>
              Book List
            </Button>
            <Button
              sx={{ color: "#fff" }}
              onClick={() => navigate("/authorlist")}
            >
              Author List
            </Button>
            <Button sx={{ color: "#fff" }} onClick={() => navigate("/addbook")}>
              Add Book
            </Button>
            <Button
              sx={{ color: "#fff" }}
              onClick={() => navigate("/addauthor")}
            >
              Add Author
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
