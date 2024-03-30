import { Add, Favorite, ShoppingCart } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

export type Product = {
  id: number;
  title: string;
  description: string;
  inventory: number;
  price: number;
  collection_id: number;
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 300,
        minWidth: 300,
        justifyContent: "space-between",
        height: "100%"
      }}
    >
      <CardActionArea sx={{ height: "100%" }} disableRipple href={`/products/${product.id}`}>
        <CardMedia
          height={200}
          component="img"
          image={`https://picsum.photos/seed/${product.title}/300/200`}
        />
        <CardContent>
          <Typography variant="body1" fontWeight="bold">
            {product.title}
          </Typography>
          <Typography variant="body2">{product.description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{justifyContent: "space-between"}}>
        <Button variant="contained">
          <Add />
          Add to cart
        </Button>
        <IconButton >
          <Favorite />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
