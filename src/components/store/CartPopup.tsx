import { IconButton, List, Stack, Typography } from "@mui/material";
import { Product } from "./ProductCard";
import CartItem from "./CartItem";
import { DeleteSweep } from "@mui/icons-material";

const CartPopup = ({ item }: { item: Product }) => {
  return (
    <Stack>
      <Stack direction="row" justifyContent="space-between" marginX={3}>
        <Typography variant="h5">My Cart</Typography>
        <IconButton>
          <DeleteSweep />
        </IconButton>
      </Stack>
      <List>
        <CartItem />
        <CartItem />
        <CartItem />
      </List>
    </Stack>
  );
};

export default CartPopup;
