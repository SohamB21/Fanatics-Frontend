import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contacts/AuthProvider';
import { PiGoogleLogo } from "react-icons/pi";

const Login = () => {
    const { login, loginWithGoogle } = useContext(AuthContext);
    const [ error, setError ] = useState("error");

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    // Login using email and password
    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        login(email, password)
            .then((userCredential) => {
                // User is logged in successfully
                const user = userCredential.user;
                alert("Log In Successful!");
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
                alert("Log In Failed!");
            });
    };

    // Login using google account
    const handleRegister = () => {
        loginWithGoogle()
            .then((result) => {
                alert("Log In Successful");
                const user = result.user;
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
                alert("Log In Failed!");
            });
    };

    return (
        <div className="min-h-screen bg-navy flex flex-col justify-center">
            <div className="relative max-w-auto mx-auto">
                <div className="px-4 py-8 bg-offWhite shadow-sm rounded-xl sm:p-20 xs:p-10">
                    <div className="max-w-auto mx-auto">
                        <div>
                            <h1 className="text-3xl font-russoOne text-navy text-center">
                                LogIn To Fanatics
                            </h1>
                        </div>
                        <div className="divide-y divide-orange font-fredoka">
                            <form onSubmit={handleLogIn} className="pt-10 pb-5 text-base leading-6 space-y-4 sm:leading-7">
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
                                        Log In
                                    </button>
                                </div>
                                <p className="py-2 text-sm text-center">
                                    Don't have an account?{" "}
                                    <Link
                                        to="/signup"
                                        className="text-orange underline"
                                    >
                                        SignUp Here
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
                                Login with Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
