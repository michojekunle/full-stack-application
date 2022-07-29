import React from 'react';

const Register = ( {onSignIn, onHome} ) => {
  return (
     <article className="mw5 leftAnim center bg-dark-grey br3 pa3 pa4-ns mv3 ba b--black-10">
            <div>
                <main className="pa4 black-80 center">
                <form className="measure center flex-column">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0 center">Register</legend>
                    <div className="mt3 center flex-column">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="name" name="name"  id="name" />
                    </div>
                  
                    <div className="mt3 center flex-column">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                    </div>

                    <div className="mv3 center flex-column">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                    </div>
                    </fieldset>
                    <div className="">
                    <a href='#0'><input onClick={onHome} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" /></a>
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