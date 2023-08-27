import { View, Text, Image, SafeAreaView, TextInput } from "react-native";
import { styled } from "nativewind";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
// use "solid" instead of "outline" for solid variant
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";

const StyledView = styled(View);
const StyledText = styled(Text);

const HomeScreen = (): React.JSX.Element => {
  const navigation = useNavigation();

  // updates screen when variables inside array update
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <StyledView className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
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
      <StyledView className="flex-row space-x-2 pb-2 mx-4">
        <StyledView className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Resturants and cuisines"
            keyboardType="default"
          />
        </StyledView>

        <AdjustmentsVerticalIcon></AdjustmentsVerticalIcon>
      </StyledView>
    </SafeAreaView>
  );
};

export default HomeScreen;
