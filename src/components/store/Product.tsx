import { FormControl, IconButton, OutlinedInput, Stack, Typography } from "@mui/material";
import { Route } from "../../routes/_index/products/$id"
import { QueryKey, useQuery } from "@tanstack/react-query";
import Api from "../../services/ApiService"
import { type Product } from "./ProductCard";
import { Add, Remove } from "@mui/icons-material";

const getProduct = ({ queryKey }: { queryKey: QueryKey }) => {
    return Api.get(queryKey.join("/")).then(res => res.data)
}

const Product = () => {
    const { id } = Route.useParams();
    const { data, error, isError, isPending } = useQuery<Product>({ queryKey: ["store", "products", id], queryFn: getProduct })

    if (isPending) return "Loading..."

    if (isError) {
        console.log(error)
        return "Could not load the product"
    } else {
        return (
            <Stack direction="row" justifyContent="center" gap={2}>
                <Stack>
                    <img src={`https://picsum.photos/seed/${data.title}/500/500`} />
                </Stack>
                <Stack>
                    <Stack>
                        <Typography variant="h4">{data.title}</Typography>
                        <Typography variant="caption">{data.description}</Typography>
                    </Stack>
                    <Stack>
                        <FormControl>
                            <OutlinedInput
                                sx={{ width: "min-content"}}
                                startAdornment={<IconButton><Remove /></IconButton>}
                                endAdornment={<IconButton><Add /></IconButton>}
                                placeholder={data.inventory.toString()}
                                value={1}
                            />
                        </FormControl>
                    </Stack>
                    <Stack>

                    </Stack>
                </Stack>
            </Stack>
        )
    }

}

export default Product