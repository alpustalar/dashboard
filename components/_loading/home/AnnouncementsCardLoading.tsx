import { Skeleton } from "@mui/material";
import { Grid } from "@mui/system";

const AnnouncementsCardLoading = () => {
  return (
    <>
      <Grid size={{ xs: 12, md: 4 }}>
        <Skeleton
          sx={{
            width: "100%",
            height: 200,
          }}
        ></Skeleton>
      </Grid>
    </>
  );
};

export default AnnouncementsCardLoading;
