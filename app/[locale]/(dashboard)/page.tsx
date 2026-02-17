"use client";
import Welcome from "@/components/home/welcome/welcome";
import { Grid } from "@mui/system";

const App = () => {
  return (
    <Grid container spacing={{ xs: 1, md: 2, lg: 3 }}>
      <Welcome />
    </Grid>
  );
};

export default App;
