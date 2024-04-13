import React, { useContext, useState } from "react";
import { AuthContext } from "../contacts/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Logout = () => {
    const { logout } = useContext(AuthContext);
    const { error, setError } = useState("error");

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleLogout = () => {
        logout()
            .then(() => {
                alert("Log Out Successful!");
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert("Log Out Failed!");
            });
    };

    return (
        <div className="min-h-screen bg-navy flex flex-col justify-center">
            <div className="relative max-w-auto mx-auto">
                <div className="px-4 py-8 bg-offWhite shadow-sm rounded-xl sm:p-20 xs:p-10">
                    <div className="max-w-auto mx-auto">
                        <div>
                            <h1 className="text-3xl font-russoOne text-navy text-center">
                                LogOut From Fanatics
                            </h1>
                        </div>
                        <div className="pt-8 relative text-center">
                            <p className="text-lg font-fredoka text-navy text-center">
                                Are you sure you want to LogOut?
                            </p>
                            <div className="flex justify-center mt-4">
                                <button
                                    className="bg-orange text-offWhite rounded-md px-6 py-2 mr-4"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                                <button
                                    className="bg-orange text-offWhite rounded-md px-6 py-2 ml-4"
                                    onClick={() =>
                                        navigate(from, { replace: true })
                                    }
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Logout;
