import { Grid } from "@mui/system";
import { Skeleton } from "@mui/material";

const MapAndRolesLoading = () => {
  return (
    <>
      <Grid size={{ xs: 12, md: 4 }}>
        <Skeleton sx={{ width: "100%", height: "38vh", p: 24 }} />
      </Grid>
      <Grid size={{ xs: 12, md: 8 }}>
        <Skeleton sx={{ width: "100%", height: "38vh", p: 24 }}></Skeleton>
      </Grid>
    </>
  );
};

export default MapAndRolesLoading;
