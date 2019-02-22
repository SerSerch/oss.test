import {useState} from "react";

const useFormInput = function(initialValue) {
    const [value, setValue] = useState(initialValue);

    const handleChange = function(e) {
        setValue(e.target.value)
    };

    return {
        value,
        onChange: handleChange
    }
};

export default useFormInput;