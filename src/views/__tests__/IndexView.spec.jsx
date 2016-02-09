import {IndexView} from '../IndexView.jsx';
import TestUtils from 'react-addons-test-utils';
import React from 'react';

describe("IndexView", () => {
  it("exists", () => {
    expect(IndexView).toBeDefined();
    let rendered = TestUtils.renderIntoDocument(
      React.createElement(IndexView, {}));
  });
});
