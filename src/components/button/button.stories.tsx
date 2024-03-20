import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

const meta: Meta<typeof Button> = {
  args: {
    title: "Button",
  },
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Solid: Story = { args: { variant: "solid" } };
