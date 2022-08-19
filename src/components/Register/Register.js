import React, { useState } from 'react';

const Register = ( {onSignIn, onHome, loadUser} ) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const onNameChange = (e)=> {
        setName(e.target.value);
        console.log(name);
    }

    const onEmailChange = (e)=> {
        setEmail(e.target.value);
        console.log(email);
    }

    const onPasswordChange = (e)=> {
        setPassword(e.target.value)
        console.log(password);
    }

    const onSubmitRegister = (e) => {

        e.preventDefault();

        fetch('http://localhost:3002/register', {
            method: 'post',
            headers: { "Content-Type": "Application/json"},
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        }) 
            .then( (res) => res.json())
            .then((user) => {
            
            if(user) {
                    e.preventDefault();
                    loadUser(user);
                    onHome();
                    // setMsgAlert(false);
                } 
                else {
                    // setMsgAlert(true);
                }
            })
    }
  return (
     <article className="mw5 leftAnim center bg-dark-grey br3 pa3 pa4-ns mv3 ba b--black-10">
            <div>
                <main className="pa4 black-80 center">
                <form className="measure center flex-column">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0 center">Register</legend>
                    <div className="mt3 center flex-column">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" required type="name" name="name"  id="name" onChange={onNameChange} />
                    </div>
                  
                    <div className="mt3 center flex-column">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" required type="email" name="email-address"  id="email-address" onChange={onEmailChange}/>
                    </div>

                    <div className="mv3 center flex-column">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" required type="password" name="password"  id="password" onChange={onPasswordChange} />
                    </div>
                    </fieldset>
                    <div className="">
                    <a href='#0'><input onClick={onSubmitRegister} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" /></a>
                    </div>
                    <div className="lh-copy mt3">
                    <a onClick={onSignIn} href='#0' className="f6 pointer link dim black db">Sign in</a>
                    </div>
                </form>
                </main>
            </div>
        </article>
  )
}

export default Register