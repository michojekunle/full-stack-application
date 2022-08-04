import { useState } from 'react'

const SignIn = ({onHome, onRegister}) => {
    const [signInEmail, setSignInEmail] = useState('');
    const [signInPassword, setSignInPassword] = useState('');

    const onEmailChange = (e)=> {
        setSignInEmail(e.target.value);
        // console.log(signInEmail);
    }

    const onPasswordChange = (e)=> {
        setSignInPassword(e.target.value)
        // console.log(signInPassword);
    }

    const onSubmitSignIn = () => {

        fetch('http://localhost:3002/signin', {
            method: 'post',
            headers: { "Content-Type": "Application/json"},
            body: JSON.stringify({
                email: signInEmail,
                password: signInPassword
            })
        }) 
            .then( (res) => res.json())
            .then((data) => {
            
            if(data === 'SUCCESS') {
                    onHome();
                } 
                else {

                }
            })
    }

  return (
        <article className="mw5 leftAnim center bg-dark-grey br3 pa3 pa4-ns mv3 ba b--black-10">
            <div>
                <main className="pa4 black-80 center">
                <form className="measure center flex-column" onSubmit={onSubmitSignIn}>
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0 center">Sign In</legend>
                    <div className="mt3 center flex-column">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" onChange={onEmailChange} name="email-address"  id="email-address" />
                    </div>
                    <div className="mv3 center flex-column">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" onChange={onPasswordChange} name="password"  id="password" />
                    </div>
                    </fieldset>
                    <div className="">
                    <a href='#0'><input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" /></a>
                    </div>
                    <div class="lh-copy mt3">
                    <a href='#0' onClick={onRegister} className="f6 pointer link dim black db">Register</a>
                    </div>
                </form>
                </main>
            </div>
        </article>
  )
}

export default SignIn