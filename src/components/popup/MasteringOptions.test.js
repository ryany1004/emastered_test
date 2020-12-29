import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import renderer from 'react-test-renderer';
import {MasteringOptions} from "./MasteringOptions";


it("should render a MasteringOptions", () => {
    let component = renderer.create(<MasteringOptions/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    const testInstance = component.root;
});
