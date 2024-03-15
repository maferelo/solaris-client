import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";

import Button from "./button";

const MyButtonMeta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyButtonMeta;

export const Basic: StoryObj<typeof Button> = {};
