import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import renderer from 'react-test-renderer';
import {MasteringPreview} from "./MasteringPreview";


it("should render a MasteringPreview", () => {
    let component = renderer.create(<MasteringPreview audio={{fileName: "", src: "", type: ""}}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    const testInstance = component.root;
});
