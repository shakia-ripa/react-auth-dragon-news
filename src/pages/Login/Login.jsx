import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import useAuth from "../../hooks/useAuth";

const Login = () => {

    const {signIn} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location in login page',location);

    const handleLogin = (e) =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        signIn(email, password)
        .then(() =>{
            console.log('User logged in');

            // navigate
            navigate(location?.state ? location.state : "/")

        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div className="md:min-h-screen md:bg-base-200">
            <Navbar></Navbar>
            <div>
                <div className="mt-14 md:mt-24 lg:mt-60">
                    <form onSubmit={handleLogin} className="cardbody md:w-3/4 lg:w-1/2 mx-auto bg-[#FFFFFF] p-4 md:p-16 space-y-6">
                        <h2 className=" md:text-3xl lg:text-4xl text-center font-semibold mb-8">Login your account</h2>
                        <hr />

                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg font-semibold">Email address</span>
                            </label>
                            <input type="email" placeholder="email"
                            name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg font-semibold">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password"
                            className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral text-xl font-semibold">Login</button>
                        </div>
                        <p className="text-center text-lg font-semibold text-[#706F6F]">Dont’t Have An Account ? <Link to="/register" className="text-[#FF8C47]">Register</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;