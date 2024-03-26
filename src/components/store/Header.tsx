import React from "react";
import { Apple, Logout, ShoppingCart, Person } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useAppStore } from "../../state/main";
import { ThemeSwitch } from "../ThemeSwitch";
import { Link } from "@tanstack/react-router";

const Header = () => {
  const { isLoggedIn } = useAppStore();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Paper square sx={{height: 70, alignContent: "center", padding: 2}}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" alignItems="center" gap={1}>
          <Apple />
          <Typography variant="h6">Avo Shop</Typography>
        </Stack>

        <Stack direction="row">
          <Button href="/collections" variant="text">
            Collections
          </Button>
          <Button href="/products" variant="text">
            Products
          </Button>
        </Stack>

        <Stack direction="row" gap={2}>
          <ThemeSwitch theme={theme} value={theme.palette.mode == "dark"} />
          <IconButton>
            <ShoppingCart />
          </IconButton>
          <IconButton
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <Person />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            {isLoggedIn ?
              [
                <MenuItem>Profile</MenuItem>,
                <MenuItem>My account</MenuItem>,
                <MenuItem>Logout</MenuItem>
              ] :
              [
                <MenuItem component={Link} to="/login">Login</MenuItem>,
                <MenuItem component={Link} to="/register">Register</MenuItem>,
              ]
            }
          </Menu>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default Header;
