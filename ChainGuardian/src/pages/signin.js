import React, { useState } from 'react'
import {
  Card,
  Input,
  Checkbox,
  Typography,
} from "@material-tailwind/react";

import { useLogin } from '../hooks/useLogin'
import GoogleButton from 'react-google-button'
import { Link } from 'react-router-dom'

function Signin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, loginWithGoogle, error, isPending } = useLogin()


  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
    setEmail('')
    setPassword('')
  }
    return (
      <div className='flex-col justify-center'>

        <Card className='rounded-xl bg-sky-500/100 w-1/2 text-center p-10' shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Sign In
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Enter your details to register.
          </Typography>
          <form onSubmit={e=>handleSubmit(e)} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 w-full flex flex-col gap-6">
              <Input size="lg" label="Email" type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email} />
              <Input type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password} size="lg" label="Password" />
            </div>
            <Checkbox
              label={
                (
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    I agree the
                    <a
                      href="#"
                      className="font-medium transition-colors hover:text-blue-500"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </Typography>
                )
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            {isPending ? <button className="btn" disabled>Loading..</button> : <button className="btn">Signin</button>}
            <Typography color="gray" className="mt-4 text-center font-normal">
              You don't have an account?{" "}
              <a
                href="#"
                className="font-medium text-blue-500 transition-colors hover:text-blue-700"
              >
                Sign Up
              </a>
            </Typography>

            {error && <div className="error">{error}</div>}
            <div className="google-auth-button">
              <div className='google-btn'>
                <GoogleButton onClick={() => loginWithGoogle()} />
              </div>
            </div>
          </form>
        </Card>
      </div>
    )
  }

  export default Signin
