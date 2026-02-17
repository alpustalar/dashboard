import UsersLoading from "@/components/loading/istatistikler/UsersLoading";
import MapAndRolesLoading from "@/components/loading/istatistikler/MapAndRolesLoading";

const containerStyle = {
  width: "100%",
  height: "38vh",
};
const StatisticsWrapperLoading = () => {
  return (
    <>
      <UsersLoading />
      <MapAndRolesLoading />
    </>
  );
};

export default StatisticsWrapperLoading;
