import Button from "@/components/atoms/Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    label: {
      options: ["PrimaryButton", "NormalButton"],
      control: { type: "select" },
    },
  },
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "PrimaryButton111",
    primary: true,
  },
};

export const Normal: Story = {
  args: {
    label: "NormalButton",
    primary: false,
  },
};
