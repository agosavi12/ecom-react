import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/Firebase'

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  return (
    <div>
      SignIn <button onClick={logGoogleUser}> Sign in with Google</button>
    </div>
  )
}

export default SignIn
