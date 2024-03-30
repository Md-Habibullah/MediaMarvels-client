import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";


const Login = () => {

    const users = useLoaderData()

    const { createAccountByGoogle, login } = useContext(AuthContext)
    const [showError, setShowError] = useState("")
    const navigate = useNavigate()
    const location = useLocation()

    const handleSignIn = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        login(email, password)
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/')

                const patchUser = { email, lastSignInTime: result.user.metadata.lastSignInTime }

                fetch('https://media-marvels-server.vercel.app/users', {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(patchUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })

            })
            .catch(error => {
                setShowError(error.message);
            })

    }

    const handleGoogleSignIn = () => {
        createAccountByGoogle()
            .then(result => {
                console.log(result)
                navigate(location.state ? location.state : '/')

                const userDetails = {
                    name: result.user.displayName ? result.user.displayName : "Anonymous",
                    userEmail: result.user?.email,
                    creationTime: result.user?.metadata?.creationTime,
                    lastSignInTime: result.user.metadata.lastSignInTime
                }

                const findEmail = users.find(user => user.userEmail == result.user.email)

                if (findEmail == undefined) {
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
                }

            })
            .catch(error => {
                setShowError(error.message);
            })
    }

    return (
        <div className="">
            <div className="py-9 hero bg-base-300 bg-[url('https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]" >
                <div className="backdrop-blur-[6px] z-0 p-1 gap-4 flex justify-center items-center w-full flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl text-white font-bold">Login now!</h1>
                        <p className="py-6"></p>
                    </div>
                    <div className="card shrink-0 lg:w-[25%] shadow-2xl bg-base-300">
                        <form onSubmit={handleSignIn} className="card-body">
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>

                                {showError && (
                                    <span className="mt-3 indicator-item  text-red-500">
                                        {showError.slice(17, -2)} <br />
                                        <span className="text-gray-500">try again!</span>
                                    </span>
                                )}

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />

                            </div>
                        </form>
                        <h2 className="ml-10 mb-2">New here? <Link to="/register">Register here</Link></h2>
                        <div className="divider  w-3/4 mx-auto">OR</div>
                        <button onClick={handleGoogleSignIn} className="w-[85%] mt-4 mx-auto btn btn-primary mb-12">Login with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;