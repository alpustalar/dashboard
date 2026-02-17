import { Skeleton } from "@mui/material";
import { Grid } from "@mui/system";

const WelcomeCardLoading = () => {
  return (
    <>
      <Grid size={{ xs: 12, md: 8 }}>
        <Skeleton sx={{ width: "100%", height: "38vh" }} />
      </Grid>
    </>
  );
};

export default WelcomeCardLoading;
