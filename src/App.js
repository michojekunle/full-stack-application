import './App.css';
import { useState } from 'react';
import SignIn from './components/SignInPage/SignIn';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/rank/Rank';
import LinkForm from './components/linkForm/LinkForm';

function App() {
  
  const [route, setRoute] = useState({
    signin: true, 
    home: false,
  });

  const handleSignIn = () => {
    setRoute({home:false, signin:true})
  }

  const handleHome = () => {
    setRoute({home:true, signin:false})
  }

  return (
      <div className="app">
        {route.signin && <SignIn onHome={handleHome}/>}
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
