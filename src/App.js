import './App.css';
import LinkForm from './components/linkForm/LinkForm';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/rank/Rank';
import SignIn from './components/SignInPage/SignIn';

function App() {
  return (
    <div className="App">
      <SignIn />
      <Navigation />
      <Logo/>
      <Rank />
      <LinkForm />

    </div>
  );
}

export default App;
