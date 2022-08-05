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

  const [user, setUser] = useState({
    id:"",
    name:"",
    email:"",
    entries:"",
    joined: "",
  })

  const loadUser = (user) => {
    setUser({
      id: user.id,
      name: user.name,
      email: user.email,
      entries: user.entries,
      joined: user.joined
    });
    console.log(user );
  }
  const [input, setInput] = useState('');
  const [submittedLink, setSubmittedLink] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  }
  
  const handleBtnSubmit = () => {
    console.log('click');
    document.querySelector('input').value='';
    setSubmittedLink(input);
    setSubmitted(true);

    if(input.length !== 0) {
      fetch('http://localhost:3002/link', {
        method: 'put',
        headers: { "Content-Type": "Application/json"},
        body: JSON.stringify({
            id: user.id
        })
      }).then((res)=> res.json())
      .then(count => {
        setUser(Object.assign(
          user,  { entries: count }
        ))
      })
    }
  }

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
        {route.signin && <SignIn onHome={handleHome} onRegister={handleRegister} loadUser={loadUser}/>}
        {route.register && <Register onHome={handleHome} onSignIn={handleSignIn} loadUser={loadUser}/>}
        {route.home && (
          <>
            <Navigation onSignIn={handleSignIn} />
            <Logo />
            <Rank username={user.name} count={user.entries}/>
            <LinkForm userEntries={user.entries} handleBtnSubmit={handleBtnSubmit} handleInputChange={handleInputChange} submitted={submitted} submittedLink={submittedLink} />
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
