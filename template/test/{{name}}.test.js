/* eslint no-unused-expressions: 0 */
const chai = require('chai');
const chaiEnzyme = require('chai-enzyme');
const expect = chai.expect;
const React = require('react');

const shallow = require('enzyme').shallow;

const {{pascalcase name}}Component = require('../lib/components/{{name}}');

// use chai-enzyme assertions, see https://github.com/producthunt/chai-enzyme
chai.use(chaiEnzyme());

describe('<{{pascalcase name}}Component />', function() {
  let component;

  beforeEach(function() {
    component = shallow(<{{pascalcase name}}Component />);
  });

  it('should contain one <h2> tag', function() {
    expect(component.find('h2')).to.have.length(1);
  });
});
