import { View, Text } from "react-native";
import { styled } from "nativewind";
import React from "react";

const StyledView = styled(View);
const StyledText = styled(Text);

const HomeScreen = (): React.JSX.Element => {
  return (
    <StyledView>
      <StyledText className="text-red-500">HomeScreen</StyledText>
    </StyledView>
  );
};

export default HomeScreen;
