import React from 'react'
import {Link} from 'react-router-dom';


const SignIn = () => {
  return (
        <article class="mw5 center bg-dark-grey br3 pa3 pa4-ns mv3 ba b--black-10">
            <div>
                <main class="pa4 black-80">
                <form class="measure">
                    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                    <legend class="f4 fw6 ph0 mh0">Sign In</legend>
                    <div class="mt3">
                        <label class="db fw6 lh-copy f6" for="email-address">Email</label>
                        <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                    </div>
                    <div class="mv3">
                        <label class="db fw6 lh-copy f6" for="password">Password</label>
                        <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                    </div>
                    </fieldset>
                    <div class="">
                    <Link to='/dashboard'><input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" /></Link>
                    </div>
                    <div class="lh-copy mt3">
                    <Link to='/' class="f6 link dim black db">Sign up</Link>
                    <a href="#0" class="f6 link dim black db">Forgot your password?</a>
                    </div>
                </form>
                </main>
            </div>
        </article>
  )
}

export default SignIn