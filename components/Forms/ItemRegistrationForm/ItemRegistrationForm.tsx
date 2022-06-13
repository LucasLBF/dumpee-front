import { ReactNode, useState, useEffect } from "react";
import BottomSheetForm from "../../BottomSheetForm/BottomSheetForm";
import BottomSheet from "reanimated-bottom-sheet";
import Tutorial from "../Tutorial/Tutorial";
import ItemTypeForm from "../ItemTypeForm/ItemTypeForm";
import ItemBrandForm from "../ItemBrandForm/ItemBrandForm";
import ItemConditionsForm from "../ItemConditionsForm/ItemConditionsForm";
import ItemWorkingForm from "../ItemWorkingForm/ItemWorkingForm";
import FinalRegistrationStep from "../FinalRegistrationStep/FinalRegistrationStep";
import QRCodeFeedback from "../../QRCodeFeedback/QRCodeFeedback";
import ItemRegistrationFinish from "../../ItemRegistrationFinish/ItemRegisrationFinish";

interface ItemRegistrationFormProps {
  sheetRef: React.RefObject<BottomSheet>;
}

interface PayloadObject {
  itemType: string;
  itemBrand: string;
  itemModel: string;
  itemYear: string;
  isBroken: boolean;
  isWorking: boolean;
  step?: number;
}
const ItemRegistrationForm: React.FC<ItemRegistrationFormProps> = ({
  sheetRef,
}) => {
  const [item, setItem] = useState({
    itemType: "",
    itemBrand: "",
    itemModel: "",
    itemYear: "",
    isBroken: false,
    isWorking: true,
    step: 0,
  });
  // const [step, setStep] = useState(0);

  useEffect(() => {
    if (item.step >= 0 && item.step < 5) {
      console.log(`current data: ${JSON.stringify(item)}`);
    }
    if (item.step === 5) {
      const payload: PayloadObject = { ...item };
      delete payload.step;
      console.log(`payload: ${JSON.stringify(payload)}`);
    }
  }, [item]);

  const updateFormState = (data: { [key: string]: string | boolean }) => {
    console.log(`response object: ${JSON.stringify(data)}`);
    setItem(currData => {
      return { ...currData, step: currData.step + 1, ...data };
    });
  };

  const closeSheet = () => sheetRef?.current?.snapTo(1);

  const closeForm = () => {
    setItem({
      itemType: "",
      itemBrand: "",
      itemModel: "",
      itemYear: "",
      isBroken: false,
      isWorking: true,
      step: 0,
    });
    closeSheet();
  };

  const goBack = () => {
    setItem(currItem => ({ ...currItem, step: currItem.step - 1 }));
  };

  const goForward = () => {
    setItem(currItem => ({ ...currItem, step: currItem.step + 1 }));
  };

  const formRenderHandler = (): ReactNode => {
    if (item.step === 0) {
      return <Tutorial closeBottomSheet={closeSheet} goForward={goForward} />;
    } else if (item.step === 1) {
      return (
        <ItemTypeForm
          goBack={goBack}
          closeBottomSheet={closeForm}
          updateFormState={updateFormState}
        />
      );
    } else if (item.step === 2) {
      return (
        <ItemBrandForm
          goBack={goBack}
          closeBottomSheet={closeForm}
          updateFormState={updateFormState}
        />
      );
    } else if (item.step === 3) {
      return (
        <ItemConditionsForm
          goBack={goBack}
          closeBottomSheet={closeForm}
          updateFormState={updateFormState}
        />
      );
    } else if (item.step === 4) {
      return (
        <ItemWorkingForm
          goBack={goBack}
          closeBottomSheet={closeForm}
          updateFormState={updateFormState}
        />
      );
    } else if (item.step === 5) {
      return (
        <FinalRegistrationStep
          closeBottomSheet={closeForm}
          printQRCode={goForward}
        />
      );
    } else if (item.step === 6) {
      return <QRCodeFeedback update={goForward} />;
    } else {
      return <ItemRegistrationFinish closeBottomSheet={closeForm} />;
    }
  };

  return <BottomSheetForm content={formRenderHandler} sheetRef={sheetRef} />;
};

export default ItemRegistrationForm;
