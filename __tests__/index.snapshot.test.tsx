import React from "react";
import renderer from "react-test-renderer";
import BlankSpacer from "../src/index";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <BlankSpacer
        height={20}
        width={30}
        color={"green"}
        style={{ margin: 24, padding: 24 }}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
