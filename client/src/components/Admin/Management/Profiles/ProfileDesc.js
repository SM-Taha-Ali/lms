import React, { useContext, useEffect, useState, useRef } from 'react';
import subjectContext from '../../../../context/domain/student/subjectContext';
import empregContext from '../../../../context/registration/empregContext';
import { useLocation } from 'react-router-dom'
import "../../Stylesheets/Profile.css";
import Select from 'react-select';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';
import ModalListgroup from './ModalListgroup';
import { Link } from 'react-router-dom'
import './ProfileDesc.css'
import { Outlet } from 'react-router-dom';
import { Button } from '@mui/material';

const ProfileDesc = () => {

  const Input = styled('input')({
    display: 'none',
  });

  const location = useLocation()

  const user = location.state.user;
  // console.log(user)

  const context = useContext(subjectContext);
  const { subject, getsubject, addsubject, updatesubject, deletesubject } = context

  useEffect(() => {
    getsubject()
  }, [])

  const contextEmp = useContext(empregContext)
  const { empreg, updateSubEmployee } = contextEmp

  const ref = useRef(null)

  const editClick = () => {
    ref.current.click();
  }

  const updateClick = () => {
    var checkedValue = [];
    var inputElements = document.getElementsByClassName('subjectCheckbox');
    for (var i = 0; inputElements[i]; ++i) {
      if (inputElements[i].checked) {
        checkedValue.push(inputElements[i].value);
      }
    }
    updateSubEmployee(user._id, checkedValue)
    // location.state.user = empreg
  }

  return (
    <>
      <div className=" row containers my-3">
        <div className=' col-md-4'>
          <img
            src='/images/profile_avatar.png'
            alt=""
            className="profile_desc_img"
            style={{ height: '150px', width: '150px' }}
          />
          <div className="mx-2">

            <h3 >{user.name}</h3>
          </div>
          {console.log(user)}

        </div>
        <div className='linked col md-4'>
          <div className="first mx-3 my-5">

            <Link className='btn btn-outline-primary my-5' aria-current="page" state={{ user: user }} to='/admin/management/adprofile/profiledesc/personaldescemp'><h3>Personal Details</h3></Link>
          </div>
          <div className="second mx-3 my-5">
            {/* <Link className='links mx-5 my-5' aria-current="page" state={{user : user}} to='/admin/management/adprofile/profiledesc/academicdetailsemp'>Academic Details</Link> */}
            <Link className='btn btn-outline-primary my-5' aria-current="page" state={{ user: user }} to='/admin/management/adprofile/profiledesc'><h3>Academic Details</h3></Link>

          </div>
        </div>
        {/* <div className="col-md-2 mx-0 my-5 mx-3">

          <Link className='nav-link' to='/admin/management/registration/PersonalDetails'>PERSONAL DETAILS</Link>
        </div>

        <div className="col-md-2 my-5 mx-3">

          <Link className='nav-link' to='/Admin/Management/Registration/AcademicDetails'>ADDRESS DETAILS</Link>
        </div> */}
      </div>
      <div className='container'>
        <Outlet />
      </div>





      {/* <div className="container">
        <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Launch static backdrop modal
        </button>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Assign Subjects</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Subject</label>
                    <ul className="list-group">
                      {subject.map((sub, i) => {
                        return <ModalListgroup key={i} sub={sub} i={i} userSub={user.subject} />
                      })}
                    </ul>

                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Back</button>
                <button type="button" className="btn btn_dark_blue text-white" data-bs-dismiss="modal" onClick={updateClick}>Update</button>
              </div>
            </div>
          </div>
        </div> */}
      {/* <h3 className="text-center">{user.name}</h3> */}
      {/* <div className="row g-0 mt-4"> */}
      {/* <div className="col-lg-6 p-5">
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
          </div> */}
      {/* <div className="col-lg-6 p-5">
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
                    <i className="fad fa-pen icon_btn" onClick={editClick}></i>
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
        </div>
        <div className="text-end">
          <button className="btn btn-danger">
            <i className="fas fa-trash me-1"></i> Delete Profile
          </button>
        </div> */}
      {/* </div> */}
    </>
  );
};

export default ProfileDesc;
