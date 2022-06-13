import { ReactNode } from "react";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";

interface BottomSheetFormProps {
  content: () => ReactNode;
  sheetRef: React.RefObject<BottomSheet>;
}

const BottomSheetForm: React.FC<BottomSheetFormProps> = ({
  content,
  sheetRef,
}) => {
  const fall = new Animated.Value(1);

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={[530, 0]}
      initialSnap={1}
      callbackNode={fall}
      enabledGestureInteraction={true}
      renderContent={content}
    />
  );
};

export default BottomSheetForm;
