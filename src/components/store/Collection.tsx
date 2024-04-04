import { Stack, Typography } from "@mui/material";
import { Route } from "../../routes/_index/collections/$id"
import { QueryKey, useQuery } from "@tanstack/react-query";
import Api from "../../services/ApiService"
import { type Collection } from "./CollectionCard";

const getCollection = ({ queryKey }: { queryKey: QueryKey }) => {
    return Api.get(queryKey.join("/")).then(res => res.data)
}

const Collection = () => {
    const { id } = Route.useParams();
    const { data, error, isError, isPending } = useQuery<Collection>({ queryKey: ["store", "collections", id], queryFn: getCollection })

    if (isPending) return "Loading..."

    if (isError) {
        console.log(error)
        return "Could not load the Collection"
    } else {
        return (
            <Stack direction="row" justifyContent="center" gap={2}>
                <Stack>
                    <img src={`https://picsum.photos/seed/${data.title}/500/500`} />
                </Stack>
                <Stack>
                    <Stack>
                        <Typography variant="h4">{data.title}</Typography>
                    </Stack>
                </Stack>
            </Stack>
        )
    }

}

export default Collection