import React from "react";
import Ancord from "components/Ancord";

export default {
  title: "Components/Ancord",
  component: Ancord,
};

function Template(args) {
  return <Ancord {...args} />;
}

export const Primary = Template.bind({});
Primary.args = {
  text: "Ancord primary",
  customClassName: "font-body text-pink-300",
};
