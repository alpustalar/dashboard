"use client";
import WelcomeCard from "./welcome-card";
import { Grid } from "@mui/system";

const Welcome = () => {
  return (
    <Grid size={{ xs: 12, md: 6 }}>
      <WelcomeCard />
    </Grid>
  );
};

export default Welcome;
