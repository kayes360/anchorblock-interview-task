import React from 'react';
import Logo from './assets/img/Logo.png'; 
import { NavLink } from "react-router-dom";

export default function SignUp() {
  return (
    <div> 
        <header className="flex justify-between items-center my-4">
          <div>
            <img src={Logo} alt="" className="" /> 

          </div>
          <div>
            <div
              className="bg-slate-200 flex justify-between items-center rounded-full px-4 py-2"
            >
              <span className="text-gray-400 text-xs">English (uk)</span>
              <svg
                className="mx-2"
                width="11"
                height="7"
                viewBox="0 0 11 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5.5 6L10 1"
                  stroke="#B0B7C3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </header>
        <section className="my-20">
          <div className="flex justify-center">
            <div>
              <p className="text-center font-bold text-2xl ">Sign Up</p>
              <p className="text-center font-medium text-lg text-gray-400 my-5">
                Welcome back, you've been missed
              </p>
              <div className="flex justify-center">
                <button
                  className="bg-slate-100 flex justify-between items-center rounded-lg mx-3 px-4 py-2"
                >
                  <svg
                    className="mx-3"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.7141 10.4599H21.875V10.4167H12.5V14.5833H18.387C17.5281 17.0089 15.2203 18.75 12.5 18.75C9.04845 18.75 6.25001 15.9516 6.25001 12.5C6.25001 9.04843 9.04845 6.25 12.5 6.25C14.0932 6.25 15.5427 6.85104 16.6464 7.83281L19.5927 4.88645C17.7323 3.1526 15.2438 2.08333 12.5 2.08333C6.74741 2.08333 2.08334 6.74739 2.08334 12.5C2.08334 18.2526 6.74741 22.9167 12.5 22.9167C18.2526 22.9167 22.9167 18.2526 22.9167 12.5C22.9167 11.8016 22.8448 11.1198 22.7141 10.4599Z"
                      fill="#FFC107"
                    />
                    <path
                      d="M3.28436 7.65156L6.70676 10.1615C7.6328 7.86874 9.87551 6.24999 12.5 6.24999C14.0932 6.24999 15.5427 6.85104 16.6463 7.83281L19.5927 4.88645C17.7323 3.1526 15.2437 2.08333 12.5 2.08333C8.49895 2.08333 5.02915 4.34218 3.28436 7.65156Z"
                      fill="#FF3D00"
                    />
                    <path
                      d="M12.5 22.9167C15.1906 22.9167 17.6354 21.887 19.4839 20.2125L16.2599 17.4844C15.2141 18.2766 13.9141 18.75 12.5 18.75C9.79062 18.75 7.4901 17.0224 6.62344 14.6115L3.22656 17.2287C4.95052 20.6021 8.45156 22.9167 12.5 22.9167Z"
                      fill="#4CAF50"
                    />
                    <path
                      d="M22.7141 10.4599H21.875V10.4167H12.5V14.5833H18.387C17.9745 15.7484 17.225 16.7531 16.2583 17.4849L16.2599 17.4839L19.4839 20.212C19.2557 20.4193 22.9167 17.7083 22.9167 12.5C22.9167 11.8016 22.8448 11.1198 22.7141 10.4599Z"
                      fill="#1976D2"
                    />
                  </svg>
    
                  <span className="text-base font-medium text-gray-400"
                    >Sign Up with Google</span
                  >
                </button>
                <button
                  className="bg-slate-100 flex justify-between items-center rounded-lg mx-3 px-4 py-2"
                >
                  <svg
                    className="mx-3"
                    width="20"
                    height="24"
                    viewBox="0 0 20 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_6_21)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.256 3.89624C14.0196 2.88584 14.5985 1.45774 14.3891 0C13.141 0.088904 11.6822 0.907396 10.831 1.97424C10.055 2.9409 9.41729 4.37889 9.66636 5.77454C11.0308 5.81828 12.439 4.98002 13.256 3.89624ZM20 17.6086C19.454 18.8561 19.1912 19.4135 18.4878 20.5185C17.5066 22.0609 16.123 23.9815 14.4069 23.9956C12.8837 24.0125 12.491 22.9725 10.4231 22.9852C8.35532 22.9965 7.92424 24.0153 6.39835 23.9998C4.6836 23.9843 3.37257 22.2514 2.39135 20.709C-0.353892 16.3992 -0.642649 11.3402 1.0502 8.64908C2.25449 6.73835 4.15399 5.6207 5.93853 5.6207C7.75455 5.6207 8.89726 6.64804 10.4013 6.64804C11.8601 6.64804 12.7483 5.61789 14.8489 5.61789C16.4391 5.61789 18.1238 6.51115 19.3226 8.05215C15.3922 10.2733 16.0286 16.0606 20 17.6086Z"
                        fill="#C1C7D0"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_6_21">
                        <rect width="20" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
    
                  <span className="text-base font-medium text-gray-400"
                    >Sign Up with Apple ID</span
                  >
                </button>
              </div>
              <div className="relative flex py-5 items-center">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink mx-4 text-gray-400">OR</span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>
              
              <div className="relative flex items-center my-8 focus-within:text-red-600 focus-within:drop-shadow-lg">
                <svg
                className="absolute ml-3 pointer-events-none"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 20.1658C9.71584 20.1671 8.44553 19.9008 7.27005 19.3839C5.91227 18.7803 4.72156 17.8557 3.80049 16.6897C2.87942 15.5238 2.25558 14.1514 1.98272 12.6908C1.70987 11.2302 1.79616 9.72518 2.23418 8.30529C2.67221 6.88543 3.44882 5.59334 4.49713 4.5403C5.3467 3.67944 6.35936 2.99659 7.4759 2.53164C8.59246 2.0667 9.79046 1.82901 11 1.83247C11.2897 1.83247 11.5839 1.84622 11.8736 1.87372C14.1636 2.13239 16.2773 3.22845 17.8081 4.95118C19.3389 6.67391 20.179 8.90172 20.1667 11.2063V11.8242C20.1667 12.7194 19.8127 13.5783 19.182 14.2137C18.5513 14.8491 17.695 15.2092 16.7998 15.2158C16.7411 15.2158 16.6815 15.2158 16.6228 15.2113C16.1037 15.181 15.5989 15.0297 15.1488 14.7694C14.6987 14.5092 14.3157 14.1472 14.0305 13.7125C13.4796 14.4876 12.7055 15.0763 11.8113 15.4001C10.9172 15.7239 9.94556 15.7673 9.02614 15.5245C8.10671 15.2817 7.28317 14.7643 6.66543 14.0413C6.04769 13.3183 5.66511 12.4242 5.56875 11.4781C5.47239 10.532 5.66683 9.57916 6.12612 8.74645C6.58542 7.91377 7.28772 7.24096 8.13933 6.81779C8.99093 6.39462 9.95133 6.24122 10.8924 6.37806C11.8334 6.51489 12.7104 6.93546 13.4063 7.58363C13.4312 7.36378 13.536 7.16074 13.7007 7.01304C13.8654 6.86536 14.0787 6.78331 14.3 6.78246C14.5431 6.78246 14.7762 6.87905 14.9482 7.05096C15.1201 7.22286 15.2167 7.45602 15.2167 7.69913V11.6628C15.2005 12.0845 15.3451 12.4965 15.621 12.8157C15.897 13.1349 16.2839 13.3375 16.7035 13.3825H16.7723C16.9771 13.3829 17.18 13.3428 17.3694 13.2646C17.5588 13.1865 17.7309 13.0718 17.8759 12.927C18.0209 12.7823 18.1359 12.6104 18.2144 12.4211C18.2929 12.2319 18.3333 12.029 18.3333 11.8242V11.2054C18.3488 9.35696 17.6806 7.56798 16.4571 6.18234C15.2335 4.79671 13.541 3.91219 11.7049 3.6988C11.4721 3.67771 11.2356 3.6658 11 3.6658C9.97278 3.66543 8.95696 3.88087 8.01835 4.29813C7.07973 4.71541 6.23924 5.32521 5.55133 6.08804C4.86343 6.85088 4.34346 7.74971 4.0251 8.72632C3.70675 9.70291 3.59711 10.7355 3.7033 11.7573C3.84016 13.0531 4.31942 14.2891 5.09187 15.3384C5.86433 16.3878 6.90215 17.2126 8.09878 17.7283C9.29537 18.244 10.6077 18.4319 11.901 18.2727C13.1942 18.1136 14.4218 17.6131 15.4578 16.8228C15.5533 16.7495 15.6624 16.6959 15.7787 16.6648C15.895 16.6338 16.0163 16.6259 16.1356 16.6418C16.255 16.6577 16.37 16.6968 16.4742 16.7571C16.5784 16.8174 16.6697 16.8976 16.7429 16.9933C16.8161 17.0888 16.8697 17.1979 16.9008 17.3142C16.9318 17.4305 16.9396 17.5518 16.9238 17.6711C16.908 17.7905 16.8688 17.9055 16.8085 18.0097C16.7482 18.1139 16.6679 18.2052 16.5724 18.2784C14.971 19.4994 13.0137 20.1624 11 20.1658ZM10.2502 8.16572C9.68972 8.16554 9.14179 8.33156 8.67572 8.64279C8.20965 8.95402 7.84634 9.39647 7.63175 9.9142C7.41714 10.4319 7.36091 11.0016 7.47013 11.5514C7.57936 12.101 7.84914 12.606 8.24536 13.0024C8.64158 13.3987 9.14645 13.6687 9.69613 13.778C10.2458 13.8874 10.8155 13.8314 11.3333 13.617C11.8511 13.4026 12.2937 13.0394 12.6051 12.5734C12.9165 12.1074 13.0827 11.5595 13.0827 10.9992C13.0817 10.2481 12.7829 9.5281 12.252 8.997C11.7211 8.46587 11.0011 8.16693 10.2502 8.16572Z"
                    fill="#C5CBD3"
                  />
                </svg>
     
                <input
                className="px-10 py-4 w-full  font-semibold placeholder:font-medium placeholder-grey-500 text-black rounded-2xl border-none outline-none ring-1 ring-gray-400 focus:ring-orange-400 focus:ring-1 "
                type="email"
                name=""
                id="email"
                placeholder="Your Email"
                />
              </div>

              <div className="relative flex items-center my-8 focus-within:text-red-600 focus-within:drop-shadow-lg">
                <svg className="absolute ml-3 pointer-events-none" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_6_37)">
                  <circle cx="10" cy="10" r="10" fill="#EDEFF1"/>
                  <path d="M13.3875 12.2842C12.9742 12.7813 12.4565 13.1814 11.8712 13.456C11.2858 13.7306 10.6472 13.8729 10.0006 13.8729C9.3541 13.8729 8.71548 13.7306 8.13014 13.456C7.5448 13.1814 7.02708 12.7813 6.61376 12.2842C6.44788 12.0927 6.21355 11.9739 5.96107 11.9533C5.70859 11.9326 5.45808 12.0118 5.26332 12.1738C5.06856 12.3358 4.94507 12.5677 4.91937 12.8197C4.89366 13.0717 4.96778 13.3238 5.12582 13.5217C5.72158 14.236 6.46702 14.8106 7.3094 15.205C8.15179 15.5993 9.07054 15.8037 10.0006 15.8037C10.9308 15.8037 11.8495 15.5993 12.6919 15.205C13.5343 14.8106 14.2797 14.236 14.8755 13.5217C15.0335 13.3238 15.1076 13.0717 15.0819 12.8197C15.0562 12.5677 14.9327 12.3358 14.738 12.1738C14.5432 12.0118 14.2927 11.9326 14.0402 11.9533C13.7877 11.9739 13.5534 12.0927 13.3875 12.2842Z" fill="#C6CCD4"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_6_37">
                  <rect width="20" height="20" fill="white"/>
                  </clipPath>
                  </defs>
              </svg>
              
     
                <input
                className="px-10 py-4 w-full  font-semibold placeholder:font-medium placeholder-grey-500 text-black rounded-2xl border-none outline-none ring-1 ring-gray-400 focus:ring-orange-400 focus:ring-1 "
                type="text"
                name=""
                id="name"
                placeholder="Your Name"
                />
              </div>


              <div className="relative flex items-center my-8 focus-within:text-red-600 focus-within:drop-shadow-lg"> 
                <svg 
                className="absolute ml-3 pointer-events-none" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.61905 14.0108V15.9326C9.61905 16.1335 9.79576 16.2963 10 16.2963C10.2104 16.2963 10.381 16.1275 10.381 15.9326V14.0108C10.8248 13.8583 11.1429 13.4467 11.1429 12.963C11.1429 12.3493 10.6312 11.8519 10 11.8519C9.36882 11.8519 8.85714 12.3493 8.85714 12.963C8.85714 13.4467 9.17517 13.8583 9.61905 14.0108ZM4.28571 8.14816V5.55499C4.28571 2.48645 6.84409 0 10 0C13.1495 0 15.7143 2.48705 15.7143 5.55499V8.14816C16.9784 8.15167 18 9.14838 18 10.3774V14.0741C18 17.3402 15.2714 20 11.9054 20H8.09456C4.73232 20 2 17.3469 2 14.0741V10.3774C2 9.14043 3.02273 8.15164 4.28571 8.14816ZM6.57143 8.14815V5.55619C6.57143 3.71055 8.10645 2.22222 10 2.22222C11.8897 2.22222 13.4286 3.71489 13.4286 5.55619V8.14815H6.57143Z" fill="#C1C7D0"/>
                </svg> 
                
                <input
                className="px-10 py-4 w-full  font-semibold  placeholder:font-medium  placeholder-grey-500 text-black rounded-2xl border-none outline-none ring-1 ring-gray-400 focus:ring-orange-400 focus:ring-1 "
                type="password"
                name=""
                id="password"
                placeholder="Create Password"
                />
    
                <svg 
                 className="absolute right-5 content-end   pointer-events-none" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_16_154)">
                  <path d="M10 4.03906C6.17879 4.03906 2.71351 6.12968 0.15649 9.52541C-0.0521632 9.80361 -0.0521632 10.1923 0.15649 10.4705C2.71351 13.8703 6.17879 15.9609 10 15.9609C13.8212 15.9609 17.2865 13.8703 19.8435 10.4746C20.0522 10.1964 20.0522 9.8077 19.8435 9.5295C17.2865 6.12968 13.8212 4.03906 10 4.03906ZM10.2741 14.1976C7.73755 14.3572 5.64284 12.2665 5.80239 9.72588C5.93331 7.63117 7.63118 5.9333 9.72589 5.80238C12.2625 5.64283 14.3572 7.73345 14.1976 10.2741C14.0626 12.3647 12.3647 14.0626 10.2741 14.1976ZM10.1473 12.2584C8.78081 12.3443 7.65163 11.2192 7.74164 9.85271C7.81119 8.72353 8.72763 7.81118 9.85681 7.73754C11.2233 7.65162 12.3525 8.77671 12.2625 10.1432C12.1888 11.2765 11.2724 12.1888 10.1473 12.2584Z" fill="#DCDFE5"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_16_154">
                  <rect width="20" height="20" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
                
              </div>
              <div>
                <div className="flex "> 
                    <div className=" border-2 border-green-500 rounded-full w-2/12 my-5 mx-3"></div>
                    <div className=" border-2 border-green-500 rounded-full w-2/12 my-5 mx-3"></div>
                    <div className=" border-2 border-green-500 rounded-full w-2/12 my-5 mx-3"></div>
                    <div className=" border-2 border-green-500 rounded-full w-2/12 my-5 mx-3"></div>
                    <div className=" border-2 border-green-500 rounded-full w-2/12 my-5 mx-3"></div>
                    <div className=" border-2 border-grey-500 rounded-full w-2/12 my-5 mx-3"></div>
                </div>
              </div>
             
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className=" h-4 w-4 border-solid border-2 border-indigo-600  rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400 text-medium">I agree to the Terms & Conditions</label>
              </div>
              <button
                  className="bg-blue-500 rounded-xl mx-3 w-full text-center my-5 px-4 py-4 text-base text-white font-medium hover:bg-blue-600"
                >
               
                  Sign Up
                </button>
                <p className="text-center text-base font-medium text-lg text-gray-400 my-5">
                  Already have an account?  <a href="#" className="text-blue-500">Sign In</a>
                </p>
            
            </div>
          </div>
          <div>
            <NavLink
              to="/"
              className="inline-flex items-center h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
            >
              Sign Up
            </NavLink>
            <NavLink
              to="/signin"
              className="inline-flex items-center h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
            >
              Sign In
            </NavLink>
            <NavLink
              to="/users"
              className="inline-flex items-center h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
            >
              Users
            </NavLink>
          </div>
        </section> 
    </div>
  )
}
