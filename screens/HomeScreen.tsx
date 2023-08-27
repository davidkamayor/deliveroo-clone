import { View, Text, Image, SafeAreaView } from "react-native";
import { styled } from "nativewind";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
// use "solid" instead of "outline" for solid variant
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";

const StyledView = styled(View);
const StyledText = styled(Text);

const HomeScreen = (): React.JSX.Element => {
  const navigation = useNavigation();

  // updates screen when variables inside array update
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <StyledView className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <StyledView className="flex-1">
          <StyledText className="font-bold text-gray-400 text-xs">
            Deliver Now!
          </StyledText>
          <StyledText className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </StyledText>
        </StyledView>
        <UserIcon size={35} color="#00CCBB"></UserIcon>
      </StyledView>

      {/* Search */}
    </SafeAreaView>
  );
};

export default HomeScreen;
