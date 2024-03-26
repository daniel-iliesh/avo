import { QueryKey, useQuery } from "@tanstack/react-query"
import Api from "../../services/ApiService"
import ProductCard, { Product } from "./ProductCard"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"

const getProducts = ({ queryKey }: { queryKey: QueryKey }) => {
    return Api.get(queryKey.join("/")).then(res => res.data)
}

const Products = () => {

    const { data, error, isError, isPending } = useQuery({ queryKey: ["store", "products"], queryFn: getProducts })

    if (isError) console.log(error)

    if (isPending) return "Loading..."

    if (!isError) {
        return (
            <Grid2 gap={1} >
                {data.map((product: Product, index: number) => <ProductCard key={index} product={product} />)}
            </Grid2>
        )
    }
}

export default Products