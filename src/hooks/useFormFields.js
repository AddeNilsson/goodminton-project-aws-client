import { useState } from 'react';

const useFormFields = (initialFields) => {
  const [fields, setFields] = useState(initialFields);
  return [
    fields,
    e => setFields({
      ...fields,
      [e.target.id]: e.target.value,
    })
  ]
}

export default useFormFields;
