import { View, ScrollView, Text } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = (): React.JSX.Element => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* {CategoryCard} */}
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="Testing" />
    </ScrollView>
  );
};

export default Categories;
