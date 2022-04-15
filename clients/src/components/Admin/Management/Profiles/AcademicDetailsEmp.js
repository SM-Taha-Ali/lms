import React from 'react'
import {useLocation} from 'react-router-dom'

function AcademicDetailsEmp() {
    const location = useLocation()

    const user = location.state.user;
    return (
    <>
      <div className="container my-5">
            <h4 className="text-center">ACADEMIC DETAILS</h4>
            <div className="detail_body">
              <ul className="list-group">
                <li className="list-group-item d-flex flex-row justify-content-between align-items-center">
                  <div>
                    <p className="p-0 py-2 m-0">
                      <b>Role</b>
                    </p>
                    <p className="p-0 pb-2 m-0">{user.role}</p>
                  </div>
                  <p className="p-0 px-2 py-1 m-0">
                    <i className="fad fa-pen icon_btn"></i>
                  </p>
                </li>
                <li className="list-group-item d-flex flex-row justify-content-between align-items-center">
                  <div>
                    <p className="p-0 py-2 m-0">
                      <b>Subject</b>
                    </p>
                    <p className="p-0 pb-2 m-0">
                      {user.subject.map((sub) => {
                        return <span>{sub} </span>
                      })}
                    </p>
                  </div>
                  <p className="p-0 px-2 py-1 m-0 ">
                    {/* <i className="fad fa-pen icon_btn" onClick={editClick}></i> */}
                    <i className="fad fa-pen icon_btn"></i>
                  </p>
                </li>
                <li className="list-group-item d-flex flex-row justify-content-between align-items-center">
                  <div>
                    <p className="p-0 py-2 m-0">
                      <b>Class</b>
                    </p>
                    <p className="p-0 pb-2 m-0">None</p>
                  </div>
                  <p className="p-0 px-2 py-1 m-0 ">
                    <i className="fad fa-pen icon_btn "></i>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        <div className="text-end">
          <button className="btn btn-danger">
            <i className="fas fa-trash me-1"></i> Delete Profile
          </button>
        </div>
    </ >
  )
}

export default AcademicDetailsEmp
