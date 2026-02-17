import WelcomeLoading from "@/components/loading/home/WelcomeLoading";
import { Grid } from "@mui/system";
import StatisticsWrapperLoading from "@/components/loading/istatistikler/StatisticsWrapperLoading";

const AppLoading = () => {
  return (
    <>
      <Grid container columns={12} spacing={{ xs: 1, md: 2 }}>
        <WelcomeLoading />
        <StatisticsWrapperLoading />
      </Grid>
    </>
  );
};

export default AppLoading;
