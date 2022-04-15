import React from 'react'
import {useLocation} from 'react-router-dom'

function PersonalDescEmp() {
    const location = useLocation()

    const user = location.state.user;
    console.log(user)
  return (
    <div className='container my-5'>
            <h4 className="text-center">PERSONAL DETAILS</h4>
            <div className="detail_body">
              <ul className="list-group">
                <li className="list-group-item d-flex flex-row justify-content-between align-items-center">
                  <div>
                    <p className="p-0 py-2 m-0">
                      <b>Full Name</b>
                    </p>
                    <p className="p-0 pb-2 m-0">{user.name}</p>
                  </div>
                  <p className="p-0 px-2 py-1 m-0">
                    <i className="fad fa-pen icon_btn"></i>
                  </p>
                </li>
                <li className="list-group-item d-flex flex-row justify-content-between align-items-center">
                  <div>
                    <p className="p-0 py-2 m-0">
                      <b>Email Address</b>
                    </p>
                    <p className="p-0 pb-2 m-0">{user.email}</p>
                  </div>
                  <p className="p-0 px-2 py-1 m-0 ">
                    <i className="fad fa-pen icon_btn "></i>
                  </p>
                </li>
                <li className="list-group-item d-flex flex-row justify-content-between align-items-center">
                  <div>
                    <p className="p-0 py-2 m-0">
                      <b>Username</b>
                    </p>
                    <p className="p-0 pb-2 m-0">{user.username}</p>
                  </div>
                  <p className="p-0 px-2 py-1 m-0 ">
                    <i className="fad fa-pen icon_btn"></i>
                  </p>
                </li>
                <li className="list-group-item d-flex flex-row justify-content-between align-items-center">
                  <div>
                    <p className="p-0 py-2 m-0">
                      <b>Password</b>
                    </p>
                    <p className="p-0 pb-2 m-0">{user.password}</p>
                  </div>
                  <p className="p-0 px-2 py-1 m-0 ">
                    <i className="fad fa-pen icon_btn"></i>
                  </p>
                </li>
                <li className="list-group-item d-flex flex-row justify-content-between align-items-center">
                  <div>
                    <p className="p-0 py-2 m-0">
                      <b>Contact</b>
                    </p>
                    <p className="p-0 pb-2 m-0">{user.contact}</p>
                  </div>
                  <p className="p-0 px-2 py-1 m-0 ">
                    <i className="fad fa-pen icon_btn"></i>
                  </p>
                </li>
                <li className="list-group-item d-flex flex-row justify-content-between align-items-center">
                  <div>
                    <p className="p-0 py-2 m-0">
                      <b>Gender</b>
                    </p>
                    <p className="p-0 pb-2 m-0">{user.gender}</p>
                  </div>
                  <p className="p-0 px-2 py-1 m-0 ">
                    <i className="fad fa-pen icon_btn"></i>
                  </p>
                </li>
              </ul>
            </div>
    </div>
  )
}

export default PersonalDescEmp
