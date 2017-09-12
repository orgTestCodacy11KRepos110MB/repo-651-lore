import React from 'react';
import { TextField } from 'lore-react-forms-material-ui';

export default function(name, attributes) {
  return (
    <TextField
      label={attributes.label}
      name={name}
      multiLine={true}
    />
  );
}
