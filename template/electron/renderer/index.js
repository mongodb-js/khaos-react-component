require('babel-register')({ extensions: ['.jsx'] });

const React = require('react');
const ReactDOM = require('react-dom');

const {{pascalcase name}}Component = require('../../lib/components/{{name}}');

ReactDOM.render(
  React.createElement({{pascalcase name}}Component), document.getElementById('container')
);
