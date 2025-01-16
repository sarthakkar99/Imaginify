// import { SignIn } from '@clerk/nextjs'
// import React from 'react'

// const SignInPage = () => {
  
//     return <SignIn/>
  
// }

// export default SignInPage
import { SignIn } from "@clerk/nextjs";
import React from 'react'
export default function SignInPage() {
  return (
    <div>
      <h1>Sign In</h1>
      <SignIn />
    </div>
  );
}

