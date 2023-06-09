import React from "react";
import Logo from "./assets/img/Logo.png";
import Person from "./assets/img/person.jpg";
import { NavLink } from "react-router-dom";
export default function Users() {
  return (
    <div className="grid grid-cols-12 divide-x">
      <div className="col-span-2">
        <header className="flex justify-between items-center my-4">
          <div>
            <img src={Logo} alt="" className="" />
          </div>
        </header>
        <nav>
          <p>Pages</p>
          <ul className="my-5">
           
          <NavLink to="/dashboard">
            <li className="flex items-center hover:bg-gray-100 p-3 rounded-lg my-3">
              <svg
                className="mx-2"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_20_193)">
                  <path
                    d="M3.7875 7.63435C2.05625 7.64685 0.156251 7.86873 0.0125012 5.57185C0.0187512 4.89998 0.0125012 4.23748 0.0125012 3.56873C0.0531262 2.56873 -0.218749 1.34685 0.593751 0.587476C0.971876 0.212476 1.48125 0.00622559 2.0125 0.00935059C2.84688 0.00622559 3.6625 0.00622559 4.4375 0.00622559H5.66875C6.72813 0.00935059 7.60625 0.887476 7.625 1.96873C7.64688 3.25935 7.64688 4.45935 7.625 5.63123C7.60313 6.7531 6.7375 7.60935 5.60938 7.62185C4.99688 7.63123 4.38438 7.63435 3.7875 7.63435ZM3.76875 1.6281C3.18438 1.6281 2.64063 1.6281 2.1125 1.63123C1.77813 1.63123 1.6375 1.7781 1.6375 2.11248C1.63438 3.20623 1.63438 4.35935 1.6375 5.53123C1.6375 5.83123 1.77813 5.97185 2.075 5.97185C3.24375 5.97498 4.4125 5.97498 5.58125 5.97185C5.84375 5.97185 5.97813 5.83435 5.98125 5.56873C5.98438 4.80935 5.98125 4.05935 5.98125 3.30623C5.98438 1.11248 6.19688 1.72185 3.76875 1.6281Z"
                    fill="#B0B7C3"
                  />
                  <path
                    d="M12.1781 7.6343C11.5781 7.6343 10.9781 7.63118 10.3969 7.6218C9.28438 7.62805 8.37813 6.72805 8.37188 5.61555C8.37188 5.60618 8.37188 5.59993 8.37188 5.59055C8.35625 4.31868 8.35625 3.1468 8.37188 2.01243C8.36875 0.909302 9.2625 0.00930176 10.3656 0.00617676H10.3906C11.5875 -0.00319824 12.7813 -0.00319824 14.0313 0.00617676C15.0656 -0.00944824 15.9969 0.931177 15.9844 1.96555C15.9906 2.66243 15.9844 3.3468 15.9844 4.03743C15.95 5.03743 16.2 6.27805 15.4 7.0343C14.5875 7.89055 13.2344 7.56868 12.1781 7.6343ZM13.2281 5.97805C13.6031 5.92805 14.3563 6.1718 14.3625 5.56868C14.3688 4.51243 14.3688 3.3593 14.3625 2.04368C14.3625 1.79368 14.1969 1.63118 13.9469 1.63118C12.775 1.62493 11.6063 1.62493 10.4438 1.63118C10.1625 1.63118 10.0188 1.78118 10.0188 2.06868V5.55305C10.0188 5.8468 10.15 5.97805 10.4438 5.97805C11.4313 5.97493 12.25 5.97493 13.2281 5.97805Z"
                    fill="#B0B7C3"
                  />
                  <path
                    d="M5.6 15.9938C4.6625 15.9719 3.65 15.9969 2.7 15.9906C1.95625 16.025 1.125 15.9844 0.59375 15.4063C0.0781251 14.9281 -0.0343749 14.175 0.00937509 13.4875C0.00625009 12.4594 0.00625009 11.3969 0.0156251 10.35C0.0187501 9.45626 0.621875 8.67814 1.48438 8.45001C2.29063 8.28751 3.04375 8.40001 3.95 8.36564C4.47188 8.36564 4.99062 8.36563 5.5125 8.36876C7.675 8.48126 7.70312 10.1406 7.63125 11.8625C7.63125 12.525 7.62813 13.2125 7.63438 13.8875C7.6625 15.0188 6.73125 16.0125 5.6 15.9938ZM3.84375 10.0188C3.25312 10.0188 2.6625 10.0188 2.07188 10.0188C1.875 10.0188 1.6375 10.0906 1.63438 10.4219C1.625 11.5781 1.625 12.7625 1.63438 13.9469C1.6375 14.2063 1.79688 14.3625 2.06562 14.3656C3.21562 14.3688 4.37187 14.3688 5.525 14.3656C5.83437 14.3656 5.97187 14.225 5.975 13.9094C5.975 13.5094 5.975 13.1031 5.975 12.7125C5.97187 11.9563 5.97813 11.1875 5.975 10.4281C5.975 10.1594 5.8375 10.0219 5.57188 10.0219C4.99688 10.0188 4.42188 10.0188 3.84375 10.0188Z"
                    fill="#B0B7C3"
                  />
                  <path
                    d="M12.1844 15.9937C8.84688 16.0125 7.08438 11.85 9.49063 9.49685C10.9125 8.01247 13.4563 7.99372 14.8781 9.4906C17.2625 11.8468 15.5406 16.0156 12.1844 15.9937ZM12.1844 10.0187C9.30938 10.1 9.34063 14.2687 12.1688 14.3625C15.05 14.2718 15.0844 10.1062 12.1844 10.0187Z"
                    fill="#B0B7C3"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_20_193">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="mx-2 text-sm text-gray-400">Dashboard</span>
            </li>
            </NavLink>
            
          <NavLink to="/users">
            <li className="flex items-center hover:bg-gray-100 p-3 rounded-lg my-3">
              <svg
                className="mx-2"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_20_210)">
                  <path
                    d="M8 8.86221C5.57499 8.86221 3.67132 9.43562 2.37198 10.5518C1.06902 11.671 0.394998 13.3177 0.394998 15.4161C0.394998 15.8215 0.723562 16.1501 1.12894 16.1501H14.871C15.2764 16.1501 15.605 15.8215 15.605 15.4161C15.605 13.3178 14.931 11.6711 13.628 10.5518C12.3287 9.43568 10.425 8.86221 8 8.86221ZM14.1026 14.6822H1.89757C2.03732 13.2542 2.59969 12.1881 3.56846 11.4687C4.57889 10.7183 6.0513 10.3301 8 10.3301C9.9487 10.3301 11.4211 10.7183 12.4316 11.4687C13.4004 12.1881 13.9628 13.2542 14.1026 14.6822Z"
                    fill="#B0B7C3"
                    stroke="#B0B7C3"
                    strokeWidth="0.3"
                  />
                  <path
                    d="M8 -0.15C5.70608 -0.15 3.97653 1.61867 3.97653 3.95116C3.97653 6.34063 5.76998 8.30553 8 8.30553C10.23 8.30553 12.0235 6.34063 12.0235 3.95134C12.0235 1.61867 10.2939 -0.15 8 -0.15ZM8 6.83784C6.60668 6.83784 5.44441 5.55959 5.44441 3.95134C5.44441 2.4173 6.51914 1.31788 8 1.31788C9.45577 1.31788 10.5556 2.44318 10.5556 3.95134C10.5556 5.55959 9.39332 6.83784 8 6.83784Z"
                    fill="#B0B7C3"
                    stroke="#B0B7C3"
                    strokeWidth="0.3"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_20_210">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="mx-2 text-sm text-gray-400">Users</span>
            </li>
            </NavLink>
            <li className="flex items-center hover:bg-gray-100 p-3 rounded-lg my-3">
              <svg
                className="mx-2"
                width="16"
                height="19"
                viewBox="0 0 16 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_20_240)">
                  <path
                    d="M13.0588 17.1499H2.70587V18.4746H13.0588V17.1499Z"
                    fill="#B0B7C3"
                  />
                  <path
                    d="M9.74509 6.48633H6.11766C5.79275 6.48633 5.52941 6.78285 5.52941 7.14868C5.52941 7.51452 5.79275 7.81104 6.11766 7.81104H9.74509C10.07 7.81104 10.3333 7.51452 10.3333 7.14868C10.3333 6.78285 10.07 6.48633 9.74509 6.48633Z"
                    fill="#B0B7C3"
                  />
                  <path
                    d="M12.4902 9.57715H6.11766C5.79275 9.57715 5.52941 9.87367 5.52941 10.2395C5.52941 10.6053 5.79275 10.9019 6.11766 10.9019H12.4902C12.8151 10.9019 13.0784 10.6053 13.0784 10.2395C13.0784 9.87367 12.8151 9.57715 12.4902 9.57715Z"
                    fill="#B0B7C3"
                  />
                  <path
                    d="M15.6533 0.649513C15.4422 0.542651 15.1953 0.58484 15.022 0.757255L13.3747 2.39808L11.7255 0.737586C11.5022 0.512602 11.1645 0.512602 10.9412 0.737586L9.29412 2.39608L7.64687 0.737586C7.42353 0.512602 7.08609 0.512602 6.86275 0.737586L5.21353 2.39808L3.56628 0.757255C3.39316 0.585051 3.14609 0.542862 2.93491 0.649513C2.72394 0.756587 2.58825 0.992831 2.58825 1.25335V13.043H0.58825C0.263344 13.043 0 13.3395 0 13.7053V15.317C0 17.0578 1.25784 18.4741 2.80391 18.4741V17.1495C1.90647 17.1495 1.17647 16.3273 1.17647 15.317V14.3677H10.3922V15.317C10.3922 17.0578 11.65 18.4742 13.1961 18.4742C14.7421 18.4742 16 17.0579 16 15.317V1.25332C16 0.992795 15.8643 0.756587 15.6533 0.649513ZM14.8235 15.317C14.8235 16.3273 14.0933 17.1495 13.1961 17.1495C12.2988 17.1495 11.5687 16.3273 11.5687 15.317V13.7053C11.5687 13.3395 11.3053 13.043 10.9804 13.043H3.76472V2.72349L4.82609 3.78082C5.04962 4.00338 5.38569 4.00225 5.60784 3.77839L7.25491 2.1199L8.90197 3.77818C9.12531 4.00316 9.46294 4.00316 9.68628 3.77818L11.3335 2.11969L12.9806 3.77818C13.2029 4.00204 13.539 4.00292 13.7623 3.78061L14.8235 2.72353V15.317Z"
                    fill="#B0B7C3"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_20_240">
                    <rect
                      width="16"
                      height="18.0156"
                      fill="white"
                      transform="translate(0 0.51416)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <span className="mx-2 text-sm text-gray-400">Sales</span>
            </li>
          </ul>
        </nav>
      </div>
      <div className="col-span-10 px-6">
        <div className="flex items-center">
          <div className=" w-2/5">
            <div className=" relative flex items-center my-8 focus-within:text-red-600 focus-within:drop-shadow-lg">
              <svg
                className="absolute right-5 content-end pointer-events-none"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_20_270)">
                  <path
                    d="M7.48644 0C3.35853 0 0 3.35853 0 7.48644C0 11.6146 3.35853 14.9729 7.48644 14.9729C11.6146 14.9729 14.9729 11.6146 14.9729 7.48644C14.9729 3.35853 11.6146 0 7.48644 0ZM7.48644 13.5908C4.12054 13.5908 1.38211 10.8524 1.38211 7.48647C1.38211 4.12057 4.12054 1.38211 7.48644 1.38211C10.8523 1.38211 13.5908 4.12054 13.5908 7.48644C13.5908 10.8523 10.8523 13.5908 7.48644 13.5908Z"
                    fill="#B0B7C3"
                  />
                  <path
                    d="M16.7975 15.8203L12.8355 11.8582C12.5655 11.5883 12.1283 11.5883 11.8583 11.8582C11.5883 12.128 11.5883 12.5657 11.8583 12.8354L15.8204 16.7975C15.9553 16.9324 16.132 16.9999 16.309 16.9999C16.4856 16.9999 16.6625 16.9324 16.7975 16.7975C17.0675 16.5277 17.0675 16.09 16.7975 15.8203Z"
                    fill="#B0B7C3"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_20_270">
                    <rect width="17" height="17" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <input
                className="px-10 py-4 w-full font-semibold placeholder:font-medium placeholder-grey-500 text-black rounded-2xl border-none outline-none ring-1 ring-gray-400 focus:ring-orange-400 focus:ring-1"
                type="text"
                name=""
                id=""
                placeholder="Your Name"
              />
            </div>
          </div>
          <div className="ml-auto flex items-center">
            <div className="mx-6">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.9269 16.9271H6.07302V18.4896H18.9269V16.9271ZM18.3074 9.2484L18.6666 12.4197L20.2192 12.2439L19.86 9.07251L18.3074 9.2484ZM6.33328 12.4197L6.69253 9.2484L5.13996 9.07251L4.78072 12.2439L6.33328 12.4197ZM5.23648 14.9643C5.8455 14.2474 6.22678 13.3599 6.33328 12.4197L4.78072 12.2439C4.70868 12.8797 4.45121 13.4753 4.04572 13.9525L5.23648 14.9643ZM18.6666 12.4197C18.7732 13.3599 19.1544 14.2474 19.7634 14.9643L20.9542 13.9525C20.5487 13.4753 20.2912 12.8797 20.2192 12.2439L18.6666 12.4197ZM6.07302 16.9271C5.14927 16.9271 4.56168 15.7584 5.23648 14.9643L4.04572 13.9525C2.56757 15.6924 3.72733 18.4896 6.07302 18.4896V16.9271ZM18.9269 18.4896C21.2726 18.4896 22.4324 15.6924 20.9542 13.9525L19.7634 14.9643C20.4382 15.7584 19.8507 16.9271 18.9269 16.9271V18.4896ZM19.86 9.07251C19.4275 5.25493 16.279 2.34375 12.5 2.34375V3.90625C15.4481 3.90625 17.9603 6.18435 18.3074 9.2484L19.86 9.07251ZM6.69253 9.2484C7.03962 6.18435 9.5518 3.90625 12.5 3.90625V2.34375C8.72091 2.34375 5.57241 5.25493 5.13996 9.07251L6.69253 9.2484Z"
                  fill="#B0B7C3"
                />
                <path
                  d="M16.3565 20.0658C16.508 19.6617 16.3032 19.2115 15.8991 19.0601C15.4951 18.9086 15.0449 19.1134 14.8934 19.5174L16.3565 20.0658ZM10.1065 19.5174C9.95511 19.1134 9.50483 18.9086 9.1008 19.0601C8.69677 19.2115 8.49199 19.6617 8.6434 20.0658L10.1065 19.5174ZM14.8934 19.5174C14.5573 20.4144 13.6298 21.0937 12.5 21.0937V22.6562C14.2557 22.6562 15.7829 21.5963 16.3565 20.0658L14.8934 19.5174ZM12.5 21.0937C11.3702 21.0937 10.4427 20.4144 10.1065 19.5174L8.6434 20.0658C9.217 21.5963 10.7442 22.6562 12.5 22.6562V21.0937Z"
                  fill="#B0B7C3"
                />
              </svg>
            </div>
            <div className="mx-6">
              <img
                src={Person}
                className=" inline w-10 h-10 rounded-full"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Table Start */}
        <p className="text-2xl font-semibold"> User List</p>

        <table className="table-auto w-full text-center p-3">
          <thead className="bg-gray-100 ">
            <tr className="">
              <th className="rounded-l-lg p-3">#ID</th>
              <th className=" p-3">USER</th>
              <th className=" p-3">EMAIL</th>
              <th className="rounded-r-lg p-3">OPTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3">1</td>
              <td className="p-3">
                <img
                  src={Person}
                  className=" inline w-16 h-16 rounded-lg"
                  alt=""
                />
                Michael Lawson
              </td>
              <td className="p-3">michael.lawson@reqres.in</td>
              <td className="p-3 flex justify-center items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.40002 14.4C3.72551 14.4 4.80003 13.3255 4.80003 12C4.80003 10.6745 3.72551 9.59998 2.40002 9.59998C1.07452 9.59998 0 10.6745 0 12C0 13.3255 1.07452 14.4 2.40002 14.4Z"
                    fill="#B0B7C3"
                  />
                  <path
                    d="M12 14.4C13.3255 14.4 14.4 13.3255 14.4 12C14.4 10.6745 13.3255 9.59998 12 9.59998C10.6745 9.59998 9.59998 10.6745 9.59998 12C9.59998 13.3255 10.6745 14.4 12 14.4Z"
                    fill="#B0B7C3"
                  />
                  <path
                    d="M21.6 14.4C22.9255 14.4 24 13.3255 24 12C24 10.6745 22.9255 9.59998 21.6 9.59998C20.2745 9.59998 19.2 10.6745 19.2 12C19.2 13.3255 20.2745 14.4 21.6 14.4Z"
                    fill="#B0B7C3"
                  />
                </svg>
              </td>
            </tr>
            <tr>
              <td className="p-3">1</td>
              <td className="p-3">
                <img
                  src={Person}
                  className=" inline w-16 h-16 rounded-lg"
                  alt=""
                />
                Michael Lawson
              </td>
              <td className="p-3">michael.lawson@reqres.in</td>
              <td className="p-3 flex justify-center items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.40002 14.4C3.72551 14.4 4.80003 13.3255 4.80003 12C4.80003 10.6745 3.72551 9.59998 2.40002 9.59998C1.07452 9.59998 0 10.6745 0 12C0 13.3255 1.07452 14.4 2.40002 14.4Z"
                    fill="#B0B7C3"
                  />
                  <path
                    d="M12 14.4C13.3255 14.4 14.4 13.3255 14.4 12C14.4 10.6745 13.3255 9.59998 12 9.59998C10.6745 9.59998 9.59998 10.6745 9.59998 12C9.59998 13.3255 10.6745 14.4 12 14.4Z"
                    fill="#B0B7C3"
                  />
                  <path
                    d="M21.6 14.4C22.9255 14.4 24 13.3255 24 12C24 10.6745 22.9255 9.59998 21.6 9.59998C20.2745 9.59998 19.2 10.6745 19.2 12C19.2 13.3255 20.2745 14.4 21.6 14.4Z"
                    fill="#B0B7C3"
                  />
                </svg>
              </td>
            </tr>
            <tr>
              <td className="p-3">1</td>
              <td className="p-3">
                <img
                  src={Person}
                  className=" inline w-16 h-16 rounded-lg"
                  alt=""
                />
                Michael Lawson
              </td>
              <td className="p-3">michael.lawson@reqres.in</td>
              <td className="p-3 flex justify-center items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.40002 14.4C3.72551 14.4 4.80003 13.3255 4.80003 12C4.80003 10.6745 3.72551 9.59998 2.40002 9.59998C1.07452 9.59998 0 10.6745 0 12C0 13.3255 1.07452 14.4 2.40002 14.4Z"
                    fill="#B0B7C3"
                  />
                  <path
                    d="M12 14.4C13.3255 14.4 14.4 13.3255 14.4 12C14.4 10.6745 13.3255 9.59998 12 9.59998C10.6745 9.59998 9.59998 10.6745 9.59998 12C9.59998 13.3255 10.6745 14.4 12 14.4Z"
                    fill="#B0B7C3"
                  />
                  <path
                    d="M21.6 14.4C22.9255 14.4 24 13.3255 24 12C24 10.6745 22.9255 9.59998 21.6 9.59998C20.2745 9.59998 19.2 10.6745 19.2 12C19.2 13.3255 20.2745 14.4 21.6 14.4Z"
                    fill="#B0B7C3"
                  />
                </svg>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Pagination Block */}
        <div>
          <div className="flex w-40 gap-x-3">
            <div className="w-10 h-10 p-3 flex items-center justify-center border-solid border border-grey-600  rounded-md hover:bg-blue-600 hover:cursor-pointer">
              <svg
                className="hover:text-white fill-white"
                fill="none"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="hover:fill-white"
                  d="M11.7267 12L12.6667 11.06L9.61332 8L12.6667 4.94L11.7267 4L7.72666 8L11.7267 12Z"
                  fill="#333333"
                />
                <path
                  className="hover:fill-white"
                  d="M7.33332 12L8.27332 11.06L5.21998 8L8.27331 4.94L7.33331 4L3.33332 8L7.33332 12Z"
                  fill="#333333"
                />
              </svg>
            </div>

            <div className="w-10 h-10 p-3 flex items-center justify-center border-solid border border-grey-600 rounded-md hover:bg-blue-600 hover:cursor-pointer">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z"
                  fill="black"
                />
              </svg>
            </div>

            <div className="w-10 h-10 p-3 flex items-center justify-center font-semibold text-center border-solid border border-grey-600 rounded-md hover:bg-blue-600 hover:text-white hover:cursor-pointer   ">
              1
            </div>

            <div className="w-10 h-10 p-3 flex items-center justify-center font-semibold text-center border-solid border border-grey-600  rounded-md hover:bg-blue-600 hover:text-white hover:cursor-pointer   ">
              2
            </div>

            <div className="w-10 h-10 p-3 flex items-center justify-center font-semibold text-center border-solid border border-grey-600  rounded-md hover:bg-blue-600 hover:text-white hover:cursor-pointer   ">
              3
            </div>
            <p className="text-bottom">...</p>

            <div className="w-10 h-10 p-3 flex items-center justify-center font-semibold text-center border-solid border border-grey-600  rounded-md hover:bg-blue-600 hover:text-white hover:cursor-pointer   ">
              10
            </div>

            <div className="m-auto font-semibold text-center border-solid border border-grey-600 p-3 rounded-md hover:bg-blue-600 hover:cursor-pointer   ">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z"
                  fill="black"
                />
              </svg>
            </div>

            <div className="m-auto font-semibold text-center border-solid border border-grey-600 p-3 rounded-md hover:bg-blue-600 hover:cursor-pointer   ">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.27331 4L3.33331 4.94L6.38665 8L3.33331 11.06L4.27331 12L8.27331 8L4.27331 4Z"
                  fill="black"
                />
                <path
                  d="M8.66668 4L7.72668 4.94L10.78 8L7.72668 11.06L8.66668 12L12.6667 8L8.66668 4Z"
                  fill="black"
                />
              </svg>
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
        </div>
      </div>
    </div>
  );
}
