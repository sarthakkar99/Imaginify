// import { SignUp } from '@clerk/nextjs'
// import React from 'react'

// const SignUpPage = () => {
  
//     return <SignUp/>
  
// }

// export default SignUpPage
import React from 'react'
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div>
      <h1>Sign Up</h1>
      <SignUp />
    </div>
  );
}
