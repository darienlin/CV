import { useState } from 'react'
import CustomInput from './components/CustomInput.jsx'
import './styles/App.css'


function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [major, setMajor] = useState("");
  const [graduationDate, setGraduationDate] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [title, setTitle] = useState("");
  const [responsibilites, setResonsibilites] = useState("");
  const [dateWorked, setDateWorked] = useState("");

  const handleName = (newValue) => {
    setName(newValue);
  };

  const handleEmail = (newValue) => {
    setEmail(newValue);
  };

  const handlePhone = (newValue) => {
    setPhoneNumber(newValue);
  };

  const handleSchool = (newValue) => {
    setSchoolName(newValue);
  };

  const handleMajor = (newValue) => {
    setMajor(newValue);
  };

  const handleGraduation = (newValue) => {
    setGraduationDate(newValue);
  };

  const handleCompany = (newValue) => {
    setCompanyName(newValue);
  };

  const handleTitle = (newValue) => {
    setTitle(newValue);
  };

  const handleResonsibilites = (newValue) => {
    setResonsibilites(newValue);
  };

  const handleDateWorked = (newValue) => {
    setDateWorked(newValue);
  };

  return (
    <div className='layout'>
      <div className='form'>
        <div>
          <div className='subtitle'>General Information</div>
          <div className='generalInformation'>
            <div className='formBlock'>
              <div className='label'>Name</div>
              <CustomInput placeholder='anakin skywalker' onChange={handleName}/>
            </div>
            <div className='formBlock'>
              <div className='label'>Email</div>
              <CustomInput placeholder='notVader@gmail.com' onChange={handleEmail}/>
            </div>
            <div className='formBlock'>
              <div className='label'>Phone number</div>
              <CustomInput placeholder='123-456-789' onChange={handlePhone}/>
            </div>
          </div>
        </div>


        <div>
          <div className='subtitle'>Educational Experience</div>
          <div className='generalInformation'>
            <div className='formBlock'>
              <div className='label'>School Name</div>
              <CustomInput placeholder='Cal Poly Pomona' onChange={handleSchool}/>
            </div>
            <div className='formBlock'>
              <div className='label'>Major</div>
              <CustomInput placeholder='Computer Science' onChange={handleMajor}/>
            </div>
            <div className='formBlock'>
              <div className='label'>Graduation Date</div>
              <CustomInput placeholder='05/2026' onChange={handleGraduation}/>
            </div>
          </div>
        </div>

        <div>
          <div className='subtitle'>Practical Experience</div>
          <div className='generalInformation'>
            <div className='formBlock'>
              <div className='label'>Company Name</div>
              <CustomInput placeholder='CPP' onChange={handleCompany}/>
            </div>
            <div className='formBlock'>
              <div className='label'>Position title</div>
              <CustomInput placeholder='SWE Intern' onChange={handleTitle} />
            </div>
            <div className='formBlock'>
              <div className='label'>Responsibilites</div>
              <CustomInput placeholder='Inventory Mangagement' onChange={handleResonsibilites}/>
            </div>
            <div className='formBlock'>
              <div className='label'>Date worked</div>
              <CustomInput placeholder='05/2026-03/2029' onChange={handleDateWorked} />
            </div>
          </div>
        </div>
      </div>

      <div className='resume'>
        <div className='contactInformation'>
        <div className='name'>{name}</div>
        <div>{phone} | {email}</div>
        </div>
        <div className='resumeSubtitle'>Education</div>
        <div>{schoolName} Expected graduation: {graduationDate}</div>
        <div>{major}</div>

        <div>
          <div className='resumeSubtitle'>Professional Experience</div>
          <div>{companyName}</div>
          <div>{title}</div>
          <div>{responsibilites}</div>
          <div>{dateWorked}</div>
        </div>
      </div>

    </div>
  )
}

export default App
