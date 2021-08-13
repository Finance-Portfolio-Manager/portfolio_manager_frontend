import React from 'react';
import renderer from 'react-test-renderer';
import NewTransaction from '../new_transaction.js';

//no idea how this works lmao
test('page is rendered', () => {
    const component = renderer.create(
      <NewTransaction></NewTransaction>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  
    // manually trigger the callback
    // tree.props.onMouseEnter();

    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  
    // manually trigger the callback
    // tree.props.onMouseLeave();
    
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });