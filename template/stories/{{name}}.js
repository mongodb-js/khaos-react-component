import React from 'react';
import { storiesOf } from '@kadira/storybook';
import {{pascalcase name}}Component from '../src/components/{{name}}';

storiesOf('{{pascalcase name}}Component', module)
  .add(
    'default', () => (
    <{{pascalcase name}}Component />
  ));
