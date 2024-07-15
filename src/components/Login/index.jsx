import logo from "../../assets/images/signup/logo.png";
import customer from "../../assets/images/signup/customer.png";
import Line from "../../assets/images/signup/Line.png";
import Loading from '../Loading'
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useEffect, useRef, useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import { CustomerLogin } from "../../api/login";
import Cookies from "js-cookie";
import { useGoogleLogin } from "@react-oauth/google";
import { facebookAuth, googleAuth } from "../../api/socialAuth";
import FacebookLogin from "@greatsumini/react-facebook-login";

function Index() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loadingModal, setLoadingModal] = useState(false);
  const cookie = Cookies.get("accessToken");
  // const [LoginData, setLoginData] = useState({
  //   email: null,
  //   password: null
  // });
  const form = useRef();
  const navigate = useNavigate();

  // const handleGoogleLogin = () => {
  //   window.open("http://localhost:5000/auth/google/callback", "_self");
  // };

  // const handleFacebookLogin = () => {
  //   window.open("https://vibepulse.onrender.com/auth/facebook", "_self");
  // };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const obj = {
        email: event.target[0].value,
        password: event.target[1].value
      };
      console.log(obj);
      const data = await CustomerLogin(obj);
      if (data) {
        window.location.replace("/");
        setLoading(false);
      }
    } catch (error) {
      alert(error);
    }
  };

  const login = useGoogleLogin({
    onSuccess: async (Response) => {
      try {
        setLoadingModal(true)
        const data = await googleAuth(Response);
        console.log(data);
        setLoadingModal(false)
        window.location.replace("/");
      } catch (error) {
        console.log(error);
      }
    },
    onError: (error) => {
      setLoadingModal(false)
      console.log(error);
    }
  });

  const facebookLogin = async(response) =>{
    try {
      setLoadingModal(true)
      if(response?.email){
        const data = await facebookAuth(response)
        console.log(data);
        setLoadingModal(false)
        data?.data?.email && window.location.replace('/')
      }
      setLoadingModal(false)
    } catch (error) {
      setLoadingModal(false)
      console.log(error)
    }
  }

  useEffect(() => {
    if (cookie) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Loading showModal={loadingModal} />
      <div className="flex h-screen rounded-lg bg-[#050A44]">
        {/* Left Section */}
        <div className="bg-[#050A44] w-2/5 flex flex-col text-white relative p-5">
          {/* Logo */}
          <div className="">
            <img className="w-[180px]" src={logo} alt="Logo" />
          </div>
          {/* Promo Text */}
          <div className="text-inherit ml-3">
            <h1 className="text-3xl font-semibold">50% OFF ON FASHION</h1>
            <p className="my-2 font-semibold text-lg">
              Cloth's, Accessories & More
            </p>
            <p className="text-sm">
              Shop now to find savings on
              <br />
              everything you need
            </p>
          </div>
          {/* Image */}
          <div className="">
            <img
              className="absolute left-[12%] bottom-[0%] w-[230px] ml-10 border-transparent"
              src={customer}
              alt="Customer"
            />
          </div>
        </div>

        {/* Right Section (Signup Form) */}
        <div className="bg-white w-3/5 flex flex-col rounded-lg justify-center items-center">
          <div className=" w-4/5 px-10 flex flex-col">
            <h1 className="text-4xl font-bold drop-shadow-2xl text-[#EB268F] mb-2">
              Login
            </h1>
            <form
              className="  placeholder:text-sm"
              onSubmit={handleLogin}
              ref={form}
            >
              <div className="flex justify-between"></div>
              <div className="flex flex-col">
                <input
                  className="border py-3 px-2 my-3  border-black rounded-md"
                  type="email"
                  required
                  disabled={loading}
                  placeholder="Email"
                />
                <input
                  className="border py-3 px-2 my-3 border-black rounded-md"
                  type={showPassword ? "text" : "password"}
                  required
                  disabled={loading}
                  minLength={8}
                  placeholder="Password"
                />
                <div className="flex items-center gap-2 text-xs">
                  <input
                    type="checkbox"
                    className="form-checkbox border-2 border-[#EB268F] rounded-sm"
                    style={{ borderColor: "pink" }}
                    // checked={isChecked3}
                    onChange={(e) => setShowPassword(e.target.checked)}
                  />
                  <span>{showPassword ? "Hide" : "Show"} password</span>
                </div>
                <div>
                  <button
                    disabled={loading}
                    className="flex gap-2 justify-center items-center p-1 py-2 my-3 w-full border rounded-lg bg-[#EB268F] text-white font-semibold"
                  >
                    <div>Login</div>
                    {loading && (
                      <ImSpinner2
                        className="animate-spin"
                        aria-label="loading"
                      />
                    )}
                  </button>
                </div>
              </div>
            </form>
            <div className="text-sm">
              Don't have an account?{" "}
              <Link className="text-blue-900" to={"/customer/signup"}>
                Register
              </Link>
            </div>
            <div className="flex gap-1 items-center my-5">
              <img className="w-[16em] h-[2px]" src={Line} alt="" />
              <div>or</div>
              <img className="w-[16em] h-[2px]" src={Line} alt="" />
            </div>
            <div className="flex gap-2">
              <FacebookLogin
                appId="1525038411722831"
                onSuccess={(response) => {
                  console.log("Login Success!", response);
                }}
                onFail={(error) => {
                  console.log("Login Failed!", error);
                }}
                onProfileSuccess={(response) => {
                  console.log("Get Profile Success!", response);
                  facebookLogin(response);
                }}
                render={({ onClick, logout }) => (
                  <button
                    onClick={onClick}
                    className="border rounded-lg border-black w-full p-2 text-xs flex justify-center items-center gap-3"
                  >
                    <FaFacebook className="text-lg" />
                    <div>Login with facebook</div>
                  </button>
                )}
              />
              <button
                onClick={() => login()}
                className="border rounded-lg border-black w-full p-2 text-xs flex justify-center items-center gap-3"
              >
                <FcGoogle className="text-lg" />
                <div>Login with google</div>
              </button>
            </div>
          </div>
          <div className="text-[0.6rem] text-center my-4">
            <p>
              You agree to the{" "}
              <span className="text-[#EB268F] font-semibold">
                Luminary Mindset Terms
              </span>{" "}
              and{" "}
              <span className="text-[#EB268F] font-semibold">
                Privacy Policy
              </span>
              <br />
              Copyright © 2024 Vibepulse.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
