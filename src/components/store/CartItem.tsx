import { Remove, Add } from "@mui/icons-material";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
  Stack,
  IconButton,
} from "@mui/material";

const CartItem = () => {
  return (
    <ListItem alignItems="center">
      <ListItemAvatar>
        <Avatar src={`https://picsum.photos/50`} />
      </ListItemAvatar>
      <ListItemText
        primary="Product here"
        secondary={<Typography variant="caption">EUR 12 x 6</Typography>}
      />
      <Divider />
      <ListItemText>
        <Stack direction="row" alignItems="center">
          <IconButton>
            <Remove />
          </IconButton>
          <Typography>2</Typography>
          <IconButton>
            <Add />
          </IconButton>
        </Stack>
      </ListItemText>
      <ListItemText>
        <Stack direction="row" alignItems="center">
          <Typography>EUR 112,99</Typography>
        </Stack>
      </ListItemText>
    </ListItem>
  );
};

export default CartItem;
