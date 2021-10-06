import { html } from "lit-html";

import "./index.ts";

export default {
  title: "base/datetime/calendar/header/dropdown/year",
  argTypes: {
    postfix: {
      options: ["", "年"],
      control: { type: "radio" }
    }
  },
  parameters: {
    actions: {
      handles: ["kuc:year-dropdown-change"]
    }
  }
};

const Template = ({ postfix, year }) =>
  html`
    <kuc-base-datetime-year-dropdown
      .postfix="${postfix}"
      .year="${year}"
    ></kuc-base-datetime-year-dropdown>
  `;

export const Base = Template.bind({});
Base.args = {
  postfix: "",
  year: 2021
};
