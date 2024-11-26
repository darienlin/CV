import { useState } from 'react'
import '../styles/CustomInput.css'



function CustomInput(props) {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
      const newValue = event.target.value;
      setValue(newValue);
      props.onChange(newValue);
    };
  
    return (
      <input
        className='poop'
        type="text"
        value={value}
        placeholder={props.placeholder}
        onChange={handleChange}
      />
    );
  }

  export default CustomInput;
  