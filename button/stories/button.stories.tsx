import * as React from 'react';
import { Button } from '../index';

export default {
  title: 'Components/Button',
  parameters: {
    layout: 'centered',
  },
};

export const Primary = () => (
  <Button
    label="Primary Button"
    variant="primary"
    onClick={() => alert('Primary button clicked!')}
  />
);

export const Secondary = () => (
  <Button
    label="Secondary Button"
    variant="secondary"
    onClick={() => alert('Secondary button clicked!')}
  />
);

export const Danger = () => (
  <Button
    label="Danger Button"
    variant="danger"
    onClick={() => alert('Danger button clicked!')}
  />
);

export const Disabled = () => <Button label="Disabled Button" disabled />;
