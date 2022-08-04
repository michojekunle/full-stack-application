import './App.css';
import { useState, useEffect } from 'react';
import SignIn from './components/SignInPage/SignIn';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/rank/Rank';
import LinkForm from './components/linkForm/LinkForm';
import Register from './components/Register/Register';

function App() {
  
  const [route, setRoute] = useState({
    signin: true, 
    home: false,
    register: false,
  });

  //connecting to server 
  useEffect(() => {
    fetch('http://localhost:3002/').then(res => res.json()).then(data => console.log(data))
  }, [])
  

  const handleSignIn = () => {
    setRoute({home:false, signin:true, register: false})
  }

  const handleHome = () => {
    setRoute({home:true, signin:false, register:false})
  }

  const handleRegister = () => {
    setRoute({home:false, signin:false, register: true})
  }
  return (
      <div className="app">
        {route.signin && <SignIn onHome={handleHome} onRegister={handleRegister}/>}
        {route.register && <Register onHome={handleHome} onSignIn={handleSignIn}/>}
        {route.home && (
          <>
            <Navigation onSignIn={handleSignIn} />
            <Logo />
            <Rank />
            <LinkForm />
          </>
        )}

      </div>
    // <BrowserRouter>
    //   <div className="App">
    //     <Routes>
    //       <Route path="/" element={<SignIn/>} />
    //       <Route path="/dashboard" element={<Dashboard/>} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
