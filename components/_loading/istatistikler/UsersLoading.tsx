import { Grid } from "@mui/system";
import { Skeleton } from "@mui/material";
import { range } from "lodash";

const UsersLoading = () => {
  const skeletons = range(0, 2);

  return (
    <>
      {skeletons.map((value, key) => (
        <Grid key={key} size={{ xs: 12, md: 4 }}>
          <Skeleton sx={{ width: "100%", height: "5vh", p: 24 }} />
        </Grid>
      ))}
    </>
  );
};

export default UsersLoading;
