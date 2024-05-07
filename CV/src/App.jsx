import { useState } from 'react'
import CustomInput from './components/CustomInput.jsx'
import './styles/App.css'


function App() {
  const [name, setName] = useState("");

  const handleChange = (newValue) => {
    setName(newValue);
  };

  return (
    <div className='layout'>
      <div className='form'>
        <div>
          <div className='subtitle'>General Information</div>
          <div className='generalInformation'>
            <div className='formBlock'>
              <div className='label'>Name</div>
              <CustomInput placeholder='anakin skywalker' onChange={handleChange}/>
            </div>
            <div className='formBlock'>
              <div className='label'>Email</div>
              <CustomInput placeholder='notVader@gmail.com' />
            </div>
            <div className='formBlock'>
              <div className='label'>Phone number</div>
              <CustomInput placeholder='123-456-789' />
            </div>
          </div>
        </div>


        <div>
          <div className='subtitle'>Educational Experience</div>
          <div className='generalInformation'>
            <div className='formBlock'>
              <div className='label'>School Name</div>
              <CustomInput placeholder='Cal Poly Pomona' />
            </div>
            <div className='formBlock'>
              <div className='label'>Major</div>
              <CustomInput placeholder='Computer Science' />
            </div>
            <div className='formBlock'>
              <div className='label'>Graduation Date</div>
              <CustomInput placeholder='05/2026' />
            </div>
          </div>
        </div>

        <div>
          <div className='subtitle'>Practical Experience</div>
          <div className='generalInformation'>
            <div className='formBlock'>
              <div className='label'>Company Name</div>
              <CustomInput placeholder='CPP' />
            </div>
            <div className='formBlock'>
              <div className='label'>Position title</div>
              <CustomInput placeholder='SWE Intern' />
            </div>
            <div className='formBlock'>
              <div className='label'>Responsibilites</div>
              <CustomInput placeholder='Inventory Mangagement' />
            </div>
            <div className='formBlock'>
              <div className='label'>Date worked</div>
              <CustomInput placeholder='05/2026-03/2029' />
            </div>
          </div>
        </div>
      </div>

      <div className='resume'>
        {name}
      </div>

    </div>
  )
}

export default App
