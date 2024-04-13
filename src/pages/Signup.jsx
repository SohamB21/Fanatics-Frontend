import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contacts/AuthProvider';
import { PiGoogleLogo } from "react-icons/pi";

const Signup = () => {
    const { createUser, loginWithGoogle } = useContext(AuthContext);
    const { error, setError } = useState("error");

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    // Signup using email and password
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        createUser(email, password)
            .then((userCredential) => {
                // User is signed up successfully
                alert("Sign Up Successful!");
                const user = userCredential.user;
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
                alert("Sign Up Failed!");
            });
    };

    // Signup using google account
    const handleRegister = () => {
        loginWithGoogle()
            .then((result) => {
                alert("Sign Up Successful");
                const user = result.user;
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
                alert("Sign Up Failed!");
            });
    };

    return (
        <div className="min-h-screen bg-navy flex flex-col justify-center">
            <div className="relative max-w-auto mx-auto">
                <div className="px-4 py-8 bg-offWhite shadow-sm rounded-xl sm:p-20 xs:p-10">
                    <div className="max-w-auto mx-auto">
                        <div>
                            <h1 className="text-3xl font-russoOne text-navy text-center">
                                SignUp To Fanatics
                            </h1>
                        </div>
                        <div className="divide-y divide-orange">
                            <form onSubmit={handleSignUp} className="pt-10 pb-5 text-base leading-6 space-y-4 sm:leading-7">
                                <div className="relative">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        className="peer h-10 w-full border-l-2 border-r-2 border-teal text-navy focus:outline-none focus:border-orange rounded-lg p-4"
                                        placeholder="Enter Your Email"
                                    />
                                </div>
                                <div className="relative">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        className="peer h-10 w-full border-l-2 border-r-2 border-teal text-navy focus:outline-none focus:border-orange rounded-lg p-4"
                                        placeholder="Enter Your Password"
                                    />
                                </div>
                                <div className="pt-4 relative text-center">
                                    <button className="bg-orange text-offWhite rounded-md px-6 py-2">
                                        Sign Up
                                    </button>
                                </div>
                                <p className="py-2 text-sm text-center">
                                    Already have an account?{" "}
                                    <Link
                                        to="/login"
                                        className="text-orange underline"
                                    >
                                        LogIn Here
                                    </Link>
                                </p>
                            </form>
                        </div>

                        <div className="flex items-center">
                            <hr className="border-orange flex-grow" />
                            <div className="bg-offWhite px-2">
                                <span className="text-orange">OR</span>
                            </div>
                            <hr className="border-orange flex-grow" />
                        </div>

                        <div className="flex w-full justify-center items-center flex-col mt-6 gap-3">
                            <button onClick={handleRegister} className="bg-orange text-offWhite rounded-md px-6 py-2 flex justify-center items-center">
                                <PiGoogleLogo className="w-8 h-8 inline-block mr-2" />
                                SignUp With Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
