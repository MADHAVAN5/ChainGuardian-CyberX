import React from 'react'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

function Signin() {
  return (
      <div className='flex-col justify-center'>

<Card className='rounded-xl bg-sky-500/100 w-1/2 text-center p-10' shadow={false}>
  <Typography variant="h4" color="blue-gray">
    Sign Up
  </Typography>
  <Typography color="gray" className="mt-1 font-normal">
    Enter your details to register.
  </Typography>
  <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
    <div className="mb-4 w-full flex flex-col gap-6">
      <Input size="lg" label="Email" />
      <Input type="password" size="lg" label="Password" />
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
    {/* {isPending ? <button className="btn" disabled>Loading..</button> : <button className="btn">Signup</button>} */}
    <Typography color="gray" className="mt-4 text-center font-normal">
      Already have an account?{" "}
      <a
        href="#"
        className="font-medium text-blue-500 transition-colors hover:text-blue-700"
      >
        Sign In
      </a>
    </Typography>

    {/* {error && <div className="error">{error}</div>} */}
    <div className="google-auth-button">
      <div className='google-btn'>
        {/* <GoogleButton onClick={() => signUpWithGoogle()} /> */}
      </div>
    </div>
  </form>
</Card>
</div>
  )
}

export default Signin
