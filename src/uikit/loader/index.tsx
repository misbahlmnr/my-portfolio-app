import { SyncLoader } from "react-spinners";
import { AppLoadWrapper, CircleWrapper } from "../../pages/GlobalStyles";
import CircleBlue from "../../resources/assets/icons/circle-blue.png";
import CirclePink from "../../resources/assets/icons/circle-pink.png";

const Loader = (loading: any) => (
  <AppLoadWrapper>
    <CircleWrapper top={"-1007px"} left={"-1000px"}>
      <img src={CirclePink} alt="circle" />
    </CircleWrapper>
    <SyncLoader
      color={"#305C85"}
      loading={loading}
      size={10}
      aria-label="Loading Spinner"
      data-testid="loader"
      className="loader"
    />
    <CircleWrapper top={"-900px"} left={"-300px"}>
      <img src={CircleBlue} alt="circle" />
    </CircleWrapper>
  </AppLoadWrapper>
);

export default Loader;
