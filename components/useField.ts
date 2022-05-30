import { useState } from 'react';

function useField(type: string) {
  const [value, setValue] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }
  return {
    type,
    value,
    onChange
  }
}
export { useField };
