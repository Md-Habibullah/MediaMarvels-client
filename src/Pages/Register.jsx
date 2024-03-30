import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
    const { createAccount } = useContext(AuthContext)
    const navigate = useNavigate()
    const [error, setError] = useState("")

    //eslint-disable-next-line
    const passwordValidator = /(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])/;

    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        if (password.length < 6) {
            setError("Password should be at least 6 characters ❗❗ ");
            return;
        }
        if (!/[A-Z]/.test(password)) {
            // setShowError("");
            setError("Password must have one uppercase ❗❗ ");
            return;
        }
        if (!passwordValidator.test(password)) {
            // setShowError("");
            setError("Password must have one special Character ❗❗ ");
            return;
        }

        createAccount(email, password)
            .then(result => {
                console.log(result.user)
                const userDetails = {
                    name: result.user.displayName ? result.user.displayName : "Anonymous",
                    userEmail: result.user?.email,
                    creationTime: result.user?.metadata?.creationTime
                }
                fetch('https://media-marvels-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userDetails)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })

                navigate('/')

            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <div className="py-9 hero min-h-[75vh] bg-base-300 bg-[url('https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]" >
                <div className="backdrop-blur-sm z-0 p-1 gap-4 flex justify-center items-center  w-full flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl text-white font-bold">Register now!</h1>
                        <p className="py-6"></p>
                    </div>
                    <div className="card shrink-0 lg:w-[25%] shadow-2xl bg-base-300">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                                <div className="mt-3 font-semibold text-red-600">
                                    {
                                        error ? error : ""
                                    }
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Register" />

                            </div>
                        </form>
                        <h2 className="ml-10 mb-10">Already have an account? <Link to="/login">Login here</Link></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;