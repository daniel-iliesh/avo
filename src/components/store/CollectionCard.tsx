import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export type Collection = {
  id: number;
  title: string;
};

const CollectionCard = ({ collection }: { collection: Collection }) => {
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
      <CardActionArea sx={{ height: "100%" }} disableRipple href={`/collections/${collection.id}`}>
        <CardMedia
          height={200}
          component="img"
          image={`https://picsum.photos/seed/${collection.title}/300/200`}
        />
        <CardContent>
          <Typography variant="body1" fontWeight="bold">
            {collection.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CollectionCard;
