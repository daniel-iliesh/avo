import { Avatar, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Stack, Typography } from "@mui/material"
import { Product } from "./ProductCard"
import { Delete } from "@mui/icons-material"

const CartPopup = ({ item }: { item: Product }) => {
  return (
    <Stack>
      <List>
        <ListItem sx={{ width: 300 }} alignItems="center">
          <ListItemAvatar>
            <Avatar src={`https://picsum.photos/50`} />
          </ListItemAvatar>
          <ListItemText
            primary="Product here"
            secondary={
              <Typography variant="caption">
                12 x 3
              </Typography>
            }
          />
          <ListItemButton>
            <Delete />
          </ListItemButton>
        </ListItem>
      </List>
    </Stack>
  )
}

export default CartPopup