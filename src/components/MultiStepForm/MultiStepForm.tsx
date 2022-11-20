import {
  type FC,
  useReducer,
  createContext,
  type Dispatch,
  type ReactNode,
} from "react";
import { Card } from "@/components";
import { useMultistep } from "@/hooks";
import FileInput from "@/components/MultiStepForm/FileInput";
import FormStep from "@/components/MultiStepForm/FormStep";
import FileInfo from "@/components/MultiStepForm/FileInfo";
import dynamic from "next/dynamic";

const SignPDF = dynamic(() => import("./SignPDF"), { ssr: false });

interface State {
  step1: {
    file: File | null;
    isFileValid: boolean;
    isFileLoading: boolean;
    isFileLoaded: boolean;
    isError: boolean;
    fileNames: string;
  };
  step2: {
    sign?: string | null;
    img?: string | null;
    date?: string | Date | null;
    text?: string;
    data?: string;
  };
}

enum ActionType {
  STEP1_FILEISLOADING = "step1/fileIsLoading",
  STEP1_FILEISLOADED = "step1/fileIsLoaded",
  STEP1_FILEISERROR = "step1/fileIsError",
  STEP2_SETSIGN = "step2/setSign",
}

interface Action {
  type: ActionType;
  payload?: any;
}

const initialState: State = {
  step1: {
    file: null,
    isFileValid: false,
    isFileLoading: false,
    isFileLoaded: false,
    isError: false,
    fileNames: "",
  },
  step2: {
    sign: null,
    img: null,
    date: null,
    text: "",
    data: "",
  },
};

const MultiStepFormContext = createContext<{
  state: State;
  dispatch: Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.STEP1_FILEISLOADING:
      return {
        ...state,
        step1: {
          ...state.step1,
          isFileLoading: true,
        },
      };
    case ActionType.STEP1_FILEISLOADED:
      return {
        ...state,
        step1: {
          ...state.step1,
          isFileLoading: false,
          isFileLoaded: true,
          isFileValid: true,
          isError: false,
          file: action.payload.file,
          fileNames: action.payload.file.name,
        },
      };
    case ActionType.STEP1_FILEISERROR:
      return {
        ...state,
        step1: {
          ...state.step1,
          isFileLoading: false,
          isFileLoaded: false,
          isFileValid: false,
          isError: true,
        },
      };
    case ActionType.STEP2_SETSIGN:
      return {
        ...state,
        step2: {
          ...state.step2,
          sign: action.payload.sign,
        },
      };
    default:
      return state;
  }
};

const MultiStepFormProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MultiStepFormContext.Provider value={{ state, dispatch }}>
      {children}
    </MultiStepFormContext.Provider>
  );
};

const MultiStepForm: FC = () => {
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistep([
      <FileInput nextStep={() => next()} />,
      <FileInfo nextStep={() => next()} prevStep={() => back()} />,
      <SignPDF nextStep={() => next()} prevStep={() => back()} />,
    ]);
  return (
    <MultiStepFormProvider>
      <Card className="w-full max-w-[823px] h-[590px] flex flex-col items-center">
        <div className="w-full max-w-[740px] mt-[30px] mb-[45px]">
          <FormStep currentStep={currentStepIndex} />
        </div>
        {step}
      </Card>
    </MultiStepFormProvider>
  );
};

export { MultiStepFormContext, ActionType };

export default MultiStepForm;
