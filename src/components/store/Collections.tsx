import Api from "../../services/ApiService";
import { Grid } from "@mui/material";
import { QueryKey, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import CollectionCard, { Collection } from "./CollectionCard";

const getCollections = ({ queryKey }: { queryKey: QueryKey }) => {
  return Api.get(queryKey.join("/")).then((res: AxiosResponse) => res.data);
};

export const Collections = () => {
  const { data, error, isError, isPending } = useQuery<Collection[]>({
    queryKey: ["store", "collections"],
    queryFn: getCollections,
  });

  if (isError) {
    console.log(error);
    return "Could not fetch collections";
  }

  if (isPending) return "Loading...";

  return (
    <Grid container>
      {data.map((collection) => (
        <Grid item>
          <CollectionCard collection={collection} /> 
        </Grid>
      ))}
    </Grid>
  );
};
