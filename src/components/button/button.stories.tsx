import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

const MyButtonMeta: Meta<typeof Button> = {
  args: {
    title: "Button",
  },
  component: Button,
};

export default MyButtonMeta;

export const Solid: StoryObj<typeof Button> = { args: { variant: "solid" } };
