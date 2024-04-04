import React from "react";
import { ShoppingCart, Person, Search } from "@mui/icons-material";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  OutlinedInput,
  Paper,
  Stack,
  Typography,
  useTheme,
  Link
} from "@mui/material";
import { useAppStore } from "../../state/main";
import { ThemeSwitch } from "../ThemeSwitch";
import CartPopup from "./CartPopup";

const Header = () => {
  const { isLoggedIn } = useAppStore();
  const theme = useTheme();

  const [profileAnchorEl, setProfileAnchorEl] = React.useState<null | HTMLElement>(null);
  const profileMenuOpen = Boolean(profileAnchorEl);

  const handleProfileClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileAnchorEl(null);
  };

  const [cartAnchorEl, setCartAnchorEl] = React.useState<null | HTMLElement>(null);
  const cartMenuOpen = Boolean(cartAnchorEl);

  const handleCartClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCartAnchorEl(event.currentTarget);
  };

  const handleCartClose = () => {
    setCartAnchorEl(null);
  };

  return (
    <Paper square sx={{ height: 70, alignContent: "center", padding: 2 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" alignItems="center" gap={1}>
          <img style={{ width: 40 }} src="/favicon.svg" />
          <Typography variant="h6">
            <Link href="/" sx={{textDecoration: "none"}} >
              Avo Shop
            </Link>
          </Typography>
        </Stack>

        <Stack direction="row" >
          <Button href="/collections" variant="text">
            Collections
          </Button>
          <Button href="/products" variant="text">
            Products
          </Button>
        </Stack>

        <Stack direction="row" gap={2} alignItems="center">
          <FormControl variant="standard">
            <OutlinedInput
              sx={{ height: 40, width: 200 }}
              placeholder="Search..."
              startAdornment={
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              }
            />
          </FormControl>
          <ThemeSwitch theme={theme} value={theme.palette.mode == "dark"} />
          <IconButton onClick={handleCartClick}>
            <ShoppingCart />
          </IconButton>
          <Menu
            anchorEl={cartAnchorEl}
            open={cartMenuOpen}
            onClose={handleCartClose}
          >
            <CartPopup />
          </Menu>
          <IconButton
            onClick={handleProfileClick}
          >
            <Person />
          </IconButton>
          <Menu
            anchorEl={profileAnchorEl}
            open={profileMenuOpen}
            onClose={handleProfileClose}
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
