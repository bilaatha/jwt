import React, { useState } from 'react'
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');


  const Register = async (e) => {
    e.preventDefault();
  }

  return (
    <section class="hero has-background-grey-light is-fullheight is-fullwidth">
      <div class="hero-body">
        <div class="container">
          <div className="columns is-centered">
            <div className="columns is-4-desktop">
                <form onSubmit={ Register } className="box">
                    <div className="field mt-5">
                        <label className="label">Name</label>
                        <div className="controls">
                            <input type="text" className="input" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="controls">
                            <input type="text" className="input" placeholder='Email'  value={email} onChange={(e) => setEmail(e.target.value)}  />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="controls">
                            <input type="password" className="input" placeholder="******"  value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Confirm Password</label>
                        <div className="controls">
                            <input type="password" className="input" placeholder="******" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="field">
                       <button className="button is-success is fullwidth">Register</button>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register