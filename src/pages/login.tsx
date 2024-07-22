import { useState,FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/customButton";


const Login = () => {
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    localStorage.setItem("fullname", "iremkosar");
    localStorage.setItem("password", "uibeelabs");

    const storedFullname = localStorage.getItem("fullname");
    const storedPassword = localStorage.getItem("password");

    if (fullname === storedFullname && password === storedPassword) {
      navigate("/topRated");
    } else {
      alert("Geçersiz kullanıcı adı veya şifre. Lütfen tekrar deneyin.");
    }
};

  return (
    <div className="h-screen overflow-hidden flex w-screen">
      <div className="w-1/2  text-white bg-customPurple">
        <h5 className="text-3xl font-bold tracking-wider mt-24 ml-32 text-left">
          <span>The biggest international</span>
          <span className="block">and local film streaming</span>
        </h5>

        <p className="mt-3 ml-32 text-left">
          Semper in cursus magna et eu varius nunc
          <br></br>
          adipiscing. Elementum justo, laoreet id sem <br></br> semper
          parturient.
        </p>

        <div className="ml-32 mt-7">
          <svg
            width="56"
            height="8"
            viewBox="0 0 56 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="8" rx="4" fill="#F9F9F9" />
            <circle opacity="0.4" cx="36" cy="4" r="4" fill="#F9F9F9" />
            <circle opacity="0.4" cx="52" cy="4" r="4" fill="#F9F9F9" />
          </svg>
        </div>

        <div className="flex justify-end">
          <img
            className="w-full object-cover"
            src="src\assets\img\laptop.png"
            alt=""
          />
        </div>
      </div>

      <div className="w-1/2 bg-white flex justify-center ">
        <div>
          <p className="mt-10 w-full text-xl leading-7 tracking-wider font-bold text-center">
            CineMax
          </p>
          <h3 className="text-3xl w-full h-20 leading-10 tracking-wider font-bold text-center mt-16">
            Hey there, <br></br>
            <span>welcome back</span>
          </h3>
          <button className="flex flex-row gap-3 px-52 py-3 mt-11 rounded-3xl">
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1307_4)">
                  <path
                    d="M23.8072 10.141C23.9139 10.141 24.0003 10.2275 24.0003 10.3342V12.3623C24.0003 13.1214 23.9298 13.8636 23.7946 14.5836C22.7485 20.1762 17.8215 24.4027 11.9157 24.362C5.28907 24.3163 -0.0142753 18.962 0.00039658 12.3353C0.0149747 5.7204 5.38207 0.362305 12.0003 0.362305C15.2428 0.362305 18.1848 1.64865 20.3448 3.73815C20.4228 3.81357 20.4248 3.93788 20.348 4.01457L17.4788 6.88384C17.4049 6.95771 17.2856 6.95963 17.2098 6.88759C15.8542 5.59716 14.02 4.80493 12.0003 4.80493C7.82983 4.80493 4.47147 8.13943 4.44316 12.3099C4.41471 16.5076 7.80921 19.9196 12.0003 19.9196C15.4009 19.9196 18.2771 17.6732 19.2255 14.5836H12.1935C12.0868 14.5836 12.0003 14.4971 12.0003 14.3904V10.3341C12.0003 10.2274 12.0868 10.1409 12.1935 10.1409H23.8072V10.141Z"
                    fill="#2196F3"
                  />
                  <path
                    d="M23.8066 10.141H22.3579C22.4646 10.141 22.5511 10.2275 22.5511 10.3342V12.3623C22.5511 13.1214 22.4806 13.8636 22.3454 14.5836C21.3473 19.919 16.8171 24.011 11.2747 24.3406C11.4867 24.3532 11.7002 24.3605 11.9152 24.362C17.8209 24.4027 22.7479 20.1762 23.794 14.5836C23.9293 13.8636 23.9998 13.1214 23.9998 12.3623V10.3341C23.9998 10.2275 23.9133 10.141 23.8066 10.141Z"
                    fill="#1E88E5"
                  />
                  <path
                    d="M5.13608 9.1974L1.49164 6.56415C3.53623 2.86613 7.47617 0.362305 12.0005 0.362305C15.2429 0.362305 18.1849 1.64865 20.3449 3.73815C20.4229 3.81357 20.4249 3.93788 20.3481 4.01457L17.4789 6.88384C17.4051 6.95757 17.2858 6.95987 17.2103 6.88796C15.8546 5.5973 14.0202 4.80498 12.0005 4.80498C8.95676 4.80498 6.33317 6.60423 5.13608 9.1974Z"
                    fill="#F44336"
                  />
                  <path
                    d="M4.08328 8.43725L5.13539 9.19742C6.22805 6.83051 8.50936 5.12585 11.2136 4.84624C11.2339 4.84404 11.2535 4.84137 11.2742 4.8394C11.0362 4.81681 10.795 4.80499 10.5511 4.80499C7.80155 4.80499 5.4053 6.25451 4.08328 8.43725Z"
                    fill="#E53935"
                  />
                  <path
                    d="M18.8958 3.73815C18.9738 3.81357 18.9758 3.93788 18.8991 4.01462L16.5702 6.34351C16.7933 6.5132 17.0069 6.6947 17.2096 6.88763C17.2852 6.95968 17.4046 6.95776 17.4785 6.88388L20.3478 4.01462C20.4245 3.93788 20.4224 3.81362 20.3445 3.73815C18.1845 1.64865 15.2426 0.362305 12.0001 0.362305C11.7568 0.362305 11.5154 0.370414 11.2756 0.384711C14.2306 0.560727 16.8979 1.8054 18.8958 3.73815Z"
                    fill="#E53935"
                  />
                  <path
                    d="M20.8023 20.5175C18.6109 22.8822 15.4779 24.3623 11.9996 24.3623C7.30147 24.3623 3.23403 21.6625 1.26425 17.7292L4.98495 15.1795C6.10147 17.9576 8.82163 19.9196 11.9996 19.9196C13.9939 19.9196 15.8077 19.147 17.1579 17.8847L20.8023 20.5175Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M4.98525 15.1796L3.88809 15.9314C5.16239 18.3053 7.66828 19.9197 10.5511 19.9197C10.7949 19.9197 11.0359 19.9077 11.2738 19.8852C8.41214 19.6123 6.01565 17.7436 4.98525 15.1796Z"
                    fill="#43A047"
                  />
                  <path
                    d="M12.0001 24.3623C15.4784 24.3623 18.6114 22.8822 20.8028 20.5175L19.9102 19.8726C17.8525 22.4334 14.7658 24.1322 11.2775 24.3405C11.5166 24.3547 11.7574 24.3623 12.0001 24.3623Z"
                    fill="#43A047"
                  />
                  <path
                    d="M4.44267 12.3623C4.44267 13.358 4.63533 14.3089 4.98544 15.1795L1.26469 17.7292C0.455391 16.1144 0 14.2915 0 12.3623C0 10.2593 0.540844 8.28277 1.49119 6.56415L5.13562 9.1974C4.69088 10.1598 4.44267 11.2323 4.44267 12.3623Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M3.88837 15.9314L4.98552 15.1795C4.63542 14.3089 4.44276 13.358 4.44276 12.3623C4.44276 11.2323 4.69096 10.1598 5.13571 9.19737L4.0836 8.43719C3.4004 9.56524 3.00388 10.8889 2.99423 12.3099C2.98532 13.6202 3.31002 14.854 3.88837 15.9314Z"
                    fill="#FFB300"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1307_4">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 0.362305)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span>Login with Google</span>
          </button>

          <button className="flex flex-row gap-3 mt-6 px-52 py-3 rounded-3xl">
            <div>
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.2049 13.2398C10.1295 13.2398 8.54864 13.2403 7.81952 13.2396C7.44416 13.2394 7.31024 13.1045 7.31024 12.7267C7.30976 11.7564 7.30952 10.7861 7.31024 9.81575C7.31048 9.44279 7.45208 9.30047 7.82264 9.30023C8.55176 9.29975 10.124 9.29999 10.2049 9.29999C10.2049 9.23351 10.2046 7.83263 10.2049 7.18751C10.2054 6.23375 10.3755 5.32079 10.8601 4.48487C11.3562 3.62927 12.0781 3.04319 13.0033 2.70431C13.5958 2.48711 14.211 2.40047 14.8398 2.39999C15.6265 2.39951 16.4132 2.40023 17.2002 2.40167C17.5383 2.40215 17.6883 2.55167 17.689 2.89223C17.6905 3.80495 17.6905 4.71767 17.689 5.63015C17.6886 5.97431 17.5448 6.11255 17.199 6.11639C16.5541 6.12335 15.9087 6.11903 15.2646 6.14495C14.6139 6.14495 14.2717 6.46271 14.2717 7.13615C14.2561 7.84847 14.2652 8.56151 14.2652 9.29975C14.3262 9.29975 16.1778 9.29951 17.0432 9.29975C17.4363 9.29975 17.5707 9.43487 17.5707 9.83015C17.5707 10.7952 17.5705 11.7605 17.5698 12.7255C17.5695 13.115 17.4433 13.2394 17.0478 13.2396C16.1823 13.2401 14.3379 13.2398 14.2573 13.2398V21.0506C14.2573 21.467 14.1262 21.5998 13.7154 21.5998C12.7136 21.5998 11.7116 21.6 10.7098 21.5998C10.3467 21.5998 10.2051 21.4586 10.2051 21.0955C10.2049 18.5518 10.2049 13.3291 10.2049 13.2398Z"
                  fill="#3D6AD6"
                />
              </svg>
            </div>
            <span>Login with Facebook</span>
          </button>

          <div className="flex items-center mt-6 mb-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">Or login with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div>
              <label className="block mb-2 text-start text-Gray">
                Kullanıcı Adı
              </label>
              <input
                className=" text-black w-full h-12 px-4 rounded-3xl border outline-none bg-grayColor"
                type="text"
                value={fullname}
                placeholder="Enter your name"
                onChange={(e) => setFullname(e.target.value)}
                required
              />
            </div>
            <div>
              <label className=" block mb-2 text-start text-Gray">Şifre</label>
              <input
                className=" text-black w-full h-12 px-4 rounded-3xl border outline-none bg-grayColor"
                type="password"
                value={password}
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <p className="text-customPurple mb-4 text-right font-semibold">
              Forgot Password
            </p>
            <CustomButton type="submit" className="w-full h-12 text-white">
              Login
            </CustomButton>
            <p className="text-Gray">
              Don’t have an account?
              <span className="text-customPurple font-semibold"> Register</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
