import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Register = () => {

    const handleRegister = (e) =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        const photo = form.get('photo');
        console.log(name, email, password, photo);

    }

    return (
        <div>
            <div className="md:min-h-screen md:bg-base-200">
                <Navbar></Navbar>
                <div>
                    <div className="mt-14 md:mt-24 lg:mt-60">
                        <form onSubmit={handleRegister} className="cardbody md:w-3/4 lg:w-1/2 mx-auto bg-[#FFFFFF] p-4 md:p-16 space-y-6">
                            <h2 className=" md:text-3xl lg:text-4xl text-center font-semibold mb-8">Register your account</h2>
                            <hr />
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-lg font-semibold">Your Name</span>
                                </label>
                                <input type="text" placeholder="Your name"
                                    name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-lg font-semibold">Photo URL</span>
                                </label>
                                <input type="url" placeholder="Photo URL"
                                    name="photo" className="input input-bordered" required />
                            </div>
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
                                <button className="btn btn-neutral text-xl font-semibold">Register</button>
                            </div>
                            <p className="text-center text-lg font-semibold text-[#706F6F]">Already Have An Account ? <Link to="/login" className="text-[#FF8C47]">Login</Link> </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;