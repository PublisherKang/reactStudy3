import { useCallback, useState } from "react";

const useInputs = (initialForm) => {
  const [form, setFrom] = useState(initialForm);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setFrom((form) => ({ ...form, [name]: value }));
  }, []);

  const reset = useCallback(() => setFrom(initialForm), [initialForm]);

  return [form, onChange, reset];
};

export default useInputs;
