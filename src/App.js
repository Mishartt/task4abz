import { useState } from 'react';
import './App.scss';
import ContactForm from './Components/ContactForm';
import Header from './Components/Header';
import HelloBox from './Components/HelloBox';
import Success from './Components/Success';
import Title from './Components/Title';
import UserList from './Components/UserList';



/**
 * TODO:
 * loading
 * correct photo 4 phone version
 * preloader 
 */


function App() {

  const [success,setSuccess] = useState(false)
  
  return (
    <div className="App">
        <Header/>
          <HelloBox/>
        <div className='main__container'>
          <Title text={'Working with GET request'}/>
          <UserList/>
          <Title text={'Working with POST request'}/>
          <ContactForm setSuccess={setSuccess}/>
          <Success displ={success}/>
        </div>
    </div>
  );
}

export default App;
