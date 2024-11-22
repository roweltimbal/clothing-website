import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in-form.styles.scss";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";
const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response.user);
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-credential":
          alert("incorrect password");
          break;
        case "auth/user-not-found":
          alert("no user found with this email");
          break;
        default:
          console.log(error);
      }
      console.log("error in sign in button:", error.message);
    }

    resetFormFields();
  };
  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="sign-in-buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType="google">
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
