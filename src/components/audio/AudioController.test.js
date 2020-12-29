import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import renderer from 'react-test-renderer';
import {AudioController} from "./AudioController";


it("should render a AudioController", () => {
    let component = renderer.create(<AudioController/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    const testInstance = component.root;
});

