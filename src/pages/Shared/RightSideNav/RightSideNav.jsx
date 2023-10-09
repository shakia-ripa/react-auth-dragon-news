import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className=" space-y-3 mb-6">
                <h2 className="text-3xl font-semibold">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <br />
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login with Github
                </button>
            </div>
            <div className=" space-y-3 mb-6">
                <h2 className="text-3xl font-semibold">Find us on</h2>
                <div className="border rounded-md">
                    <a className="flex items-center text-lg gap-3 p-4" href="">
                        <FaFacebook className="text-xl"></FaFacebook>
                        FaceBook
                    </a>
                    <a className="flex items-center text-lg gap-3 p-4 border-y" href="">
                        <FaTwitter className="text-xl"></FaTwitter>
                        Twitter
                    </a>
                    <a className="flex items-center text-lg gap-3 p-4" href="">
                        <FaInstagram className="text-xl"></FaInstagram>
                        Instagram
                    </a>
                </div>
            </div>
            <div className=" space-y-3 mb-6 bg-[#F3F3F3] rounded-md">
                <h2 className="text-3xl font-semibold mb-7">Q-Zone</h2>
                <div>
                    <img src={qZone1} alt="" />
                    <img className="my-6" src={qZone2} alt="" />
                    <img src={qZone3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;