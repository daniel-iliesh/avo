import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

export type Product = {
    id: number,
    title: string,
    description: string,
    inventory: number,
    price: number,
    collection_id: number
}

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <Card sx={{display: "flex",flexDirection: "column", width: 300, minWidth: 300, justifyContent: "space-between" }}>
            <CardActionArea disableRipple href={`/products/${product.id}`}>
                <CardMedia
                    height={200}
                    component="img"
                    image={`https://picsum.photos/seed/${product.title}/300/200`}
                />
                <CardContent>
                    <Typography variant='body1'>{product.title}</Typography>
                    <Typography variant='body2'>{product.description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant='contained'>Add to cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard