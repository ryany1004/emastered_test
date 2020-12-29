import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import renderer from 'react-test-renderer';
import {ToggleButton} from "./ToggleButton";


it("should render a ToggleButton", () => {
  let component = renderer.create(<ToggleButton/>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  const testInstance = component.root;
});
