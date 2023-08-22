import { createContext, useReducer } from "react";
import { dataSkills } from "../../data/dataSkills";
import educationFormalData from "../../data/educationalFormalData";
import educationalNonFormalData from "../../data/educationalNonFormalData";
import { portfolioData } from "../../data/portfolioData";
import testimoniData from "../../data/testimoniData";
import workData from "../../data/workData";
import {
  default as avtr,
  default as avtr2,
} from "../../resources/assets/icons/user.png";
import gambar1 from "../../resources/assets/img/one.png";
import gambar2 from "../../resources/assets/img/two.png";

type State = {
  qualification: {
    educationFormal: any;
    educationNonFormal: any;
    work: any;
  };
  chooseQualification: any;
  dataTestimoni: any;
  dataPortfolio: any;
  dataSkills: any;
};

type Action = {
  type: string;
};

type StoreContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

const initialState: State = {
  qualification: {
    educationFormal: educationFormalData(),
    educationNonFormal: educationalNonFormalData(),
    work: workData(),
  },
  chooseQualification: educationFormalData(),
  dataTestimoni: testimoniData(avtr, avtr2),
  dataPortfolio: portfolioData(gambar1, gambar2),
  dataSkills: dataSkills(),
};

// bikin context
export const StoreContext = createContext<StoreContextType>({
  state: initialState,
  dispatch: () => {},
});

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case "FETCH_EDUCATIONAL_FORMAL":
      return {
        ...state,
        chooseQualification: educationFormalData(),
      };
    case "FETCH_EDUCATIONAL_NON_FORMAL":
      return {
        ...state,
        chooseQualification: educationalNonFormalData(),
      };
    case "FETCH_WORK_DATA":
      return {
        ...state,
        chooseQualification: workData(),
      };
    default:
      return state;
  }
};

const StoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children} {/* Gunakan tanda kurung di sini */}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
