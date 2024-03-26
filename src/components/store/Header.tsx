import { Apple, Logout, ShoppingCart, Person } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useAppStore } from "../../state/main";
import { ThemeSwitch } from "../ThemeSwitch";

const Header = () => {
  const { isLoggedIn } = useAppStore();
  const theme = useTheme();
  console.log("THEME", theme, theme.palette.mode);

  return (
    <Box sx={{ alignContent: "center" }} height={100} padding={2}>
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
          <IconButton color={isLoggedIn ? "error" : "primary"}>
            {isLoggedIn ? <Logout /> : <Person />}
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
