import React, { useState, useEffect, useContext, useRef } from 'react';
import subBindContext from '../../../../context/domain/student/subBindContext';
import subjectContext from '../../../../context/domain/student/subjectContext';
import classContext from '../../../../context/domain/student/classContext';
import sectionContext from '../../../../context/domain/student/sectionContext';
import empregContext from '../../../../context/registration/empregContext';
import groupContext from '../../../../context/domain/student/groupContext';
import subgroupContext from '../../../../context/domain/student/subgroupContext';
import batchContext from '../../../../context/management/batches/batchContext';
import feeContext from '../../../../context/domain/fee/feeContext';
import ClassManageTr from "./ClassManageTr"
import ClassMAnFeeTr from './ClassMAnFeeTr';
import ClassmanSched from './ClassmanSched';
import Select from 'react-select';
import DateAdapter from '@mui/lab/AdapterDateFns';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import { Link } from 'react-router-dom'
import "../../Stylesheets/batch.css"

const ClassManage = () => {

  const contextFee = useContext(feeContext);
  const { fee, getfee, addfee, updatefee, deletefee } = contextFee

  useEffect(() => {
    getfee()
  }, [])

  const [selectedDate, handleDateChange] = useState(new
    Date());

  const [batchCreate, setbatchCreate] = useState([])

  const [result, setResult] = useState({ batchname: "", start_date: "", end_date: "", fees_input_batch: "" });

  const onChangeResult = (e) => {
    setResult({ ...result, [e.target.name]: e.target.value })
    console.log(result.batchname)
  }

  const context = useContext(subBindContext);
  const { subBind, getsubBind, getsubOnlyBind, addsubBind, updatesubBind, deletesubBind } = context

  useEffect(() => {
    getsubOnlyBind(subBinds.class, subBinds.group, subBinds.subgroup)
  }, [])

  const contextBatch = useContext(batchContext);
  const { batch, getbatch, addbatch, updatebatch, deletebatch } = contextBatch

  const contextEmp = useContext(empregContext)
  const { getSubjectEmployee } = contextEmp

  const [subBinds, setsubBinds] = useState({ subject: "", group: "", subgroup: "", class: "", section: "" })
  const [subJECTS, setsubJECTS] = useState([])

  const ref = useRef(null)

  const contextSubject = useContext(subjectContext);
  const { subject, getsubject } = contextSubject

  useEffect(() => {
    getsubject()
  }, [])

  const contextClass = useContext(classContext);
  const { clas, getclas } = contextClass

  useEffect(() => {
    getclas()
  }, [])

  const contextGroup = useContext(groupContext);
  const { group, getgroup } = contextGroup

  useEffect(() => {
    getgroup()
  }, [])

  const contextSubgroup = useContext(subgroupContext);
  const { subgroup, getsubgroup } = contextSubgroup

  useEffect(() => {
    getsubgroup()
  }, [])

  const contextSection = useContext(sectionContext);
  const { section, getsection } = contextSection

  useEffect(() => {
    getsection()
  }, [])

  const subJects = []
  subject.map((i) => {
    subJects.push({ value: i.value, label: i.label, name: i.name })
  });

  const clAss = []
  clas.map((i) => {
    clAss.push({ value: i.value, label: i.label, name: i.name })
  });

  const gRoup = []
  group.map((i) => {
    gRoup.push({ value: i.value, label: i.label, name: i.name })
  });

  const subgRoup = []
  subgroup.map((i) => {
    subgRoup.push({ value: i.value, label: i.label, name: i.name })
  });

  const secTion = []
  section.map((i) => {
    secTion.push({ value: i.value, label: i.label, name: i.name })
  });

  const onChange = (e) => {
    setsubBinds({ ...subBinds, [e.name]: e.value })
  }

  const createBatch = () => {
    addbatch(result.batchname, batchCreate, [], result.start_date, result.end_date)
  }

  const [done, setdone] = useState(true)

  const findSubBinds = async (e) => {
    e.preventDefault()
    let subs = await getsubOnlyBind(subBinds.class, subBinds.group, subBinds.subgroup)
    setsubJECTS(subs)
  }

  const Feeref = useRef(null)

  const [fees, setfees] = useState({ label: "", type: "", amount: "" })

  const onChangeFee = (e) => {
    try {
      setfees({ ...fees, [e.target.name]: e.target.value })
    } catch (error) {
      setfees({ ...fees, [e.name]: e.value })
    }
  }

  const [schedule, setSchedule] = useState({ day: "", start_time: "", end_time: "", subject: "" })

  const onChangeTime = (e) => {
    try {
      setSchedule({ ...schedule, [e.target.name]: e.target.value })
    } catch (error) {
      setSchedule({ ...schedule, [e.name]: e.value })
    }
  }

  const updateClick = () => {
    updatefee(fees._id, fees.label, fees.label, "fee", fees.type, fees.amount)
  }

  const feeUpdate = (currentfee) => {
    Feeref.current.click();
    setfees(currentfee)
  }

  const handleClick = (e) => {
    e.preventDefault()
    var fee_name = document.getElementById("fee_name");
    var fee_amount = document.getElementById("fee_amount");
    fee_name.value = ""
    fee_amount.value = ""
    addfee(fees.label, fees.label, "fee", fees.type, fees.amount)
    var fee = document.getElementById("fee")
    fee.value = ""
  }

  const fee_types = [
    { value: 'Once', label: 'Once', name: "type" },
    { value: 'Annual', label: 'Annual', name: "type" },
    { value: 'Semi-Annual', label: 'Semi-Annual', name: "type" },
    { value: 'Quartarly', label: 'Quartarly', name: "type" },
    { value: 'Monthly', label: 'Monthly', name: "type" },
  ];

  const [periodSlot, setperiodSlot] = useState({start_time:"", end_time:"", day_sub:[{mon:"", tue:"", wed:"", thurs:"", fri:"", sat:"", sun:""}]})

  const add_period = (e) => {
    e.preventDefault()
    let start_time = String(periodSlot.start_time).split(' ')[4]
    let end_time = String(periodSlot.end_time).split(' ')[4]
    console.log(start_time)
    console.log(end_time)
  }

  return (
    <div className='position-relative'>
      <div>
        <button ref={Feeref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Launch static backdrop modal
        </button>

        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Update fee</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="fee_name" name='label' required onChange={onChangeFee} value={fees.label} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Amount</label>
                    <input type="text" className="form-control" id="fee_amount" name='amount' required onChange={onChangeFee} value={fees.amount} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Type</label>
                    <Select
                      defaultValue={fees.type}
                      onChange={onChange}
                      options={fee_types}
                      width={100}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Back</button>
                <button type="button" className="btn btn_dark_blue text-white" data-bs-dismiss="modal" onClick={updateClick}>Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>

        <div className='d-flex flex-row justify-content-between align-items-center pt-5 pb-3' >
          <h1>Add a Batch</h1>
          <div className="text-end back_btn">
            <Link aria-current="page" to="/admin/management/adbatch/classmanhome">
              <button className="btn btn_dark_blue text-white"> <i className="fas fa-arrow-alt-circle-left me-2"></i> Back</button>
            </Link>
          </div>
        </div>
        <hr />
        <form action="">
          <div className="text-center">
            <h4 className='my-5 py-3 px-4 color_heading'>Session Period</h4>
          </div>
          <div className='row mb-3'>
            <div className="col-md-6 py-2 ">
              <label htmlFor="" className="form-label">Start Date</label>
              <input type="date" className="form-control" id="sectio2n" name='start_date' placeholder='' onChange={onChangeResult} />
            </div>
            <div className="col-md-6 py-2 ">
              <label htmlFor="" className="form-label">End Date</label>
              <input type="date" className="form-control" id="sect23ion" name='end_date' placeholder='' onChange={onChangeResult} />
            </div>
          </div>
          <br />
          <hr />
          <div className="text-center">
            <h4 className='my-5 py-3 px-4 color_heading'>Batch Credentials</h4>
          </div>
          <div className="row">
            <div className="col-md-3 py-2">
              <Select
                defaultValue={null}
                onChange={onChange}
                options={gRoup}
                width={100}
                placeholder="Select group"
                name='group'
              />
            </div>
            <div className="col-md-3 py-2">
              <Select
                defaultValue={null}
                onChange={onChange}
                options={subgRoup}
                width={100}
                placeholder="Select sub-group"
                name='subgroup'
              />
            </div>
            <div className="col-md-3 py-2">
              <Select
                defaultValue={null}
                onChange={onChange}
                options={clAss}
                width={100}
                placeholder="Select class"
                name='class'
              />
            </div>
            <div className="col-md-3 py-2">
              <Select
                defaultValue={null}
                onChange={onChange}
                options={secTion}
                width={100}
                placeholder="Select section"
                name='section'
              />
            </div>
          </div>
          <div className="text-end py-3">
            <button className="btn btn_dark_blue text-white" onClick={findSubBinds}>Done</button>
          </div>
        </form>
      </div>
      <div className='mt-5'>
        <table className="table overflow_control">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Subject</th>
              <th scope="col">Teacher</th>
              <th scope="col">Fee</th>
              {/* <th scope="col">Ratio</th> */}
              <th scope="col" className='text-center'>Confirm</th>
            </tr>
          </thead>
          <tbody>
            {subJECTS.map((countr, i) => {
              return <ClassManageTr key={i} countr={countr} index={i} setdone={setdone} getsubOnlyBind={getsubOnlyBind} batchCreate={batchCreate} result={result} setResult={setResult} setbatchCreate={setbatchCreate} getSubjectEmployee={getSubjectEmployee} subBinds={subBinds} />
            })}
          </tbody>
        </table>
      </div>
      <br />
      <br />
      <hr />
      <div className="text-center">
        <h4 className='my-5 py-3 px-4 color_heading'>Fee Structure</h4>
      </div>
      <div className='mt-2'>
        <table className="table overflow_control">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Fee Name</th>
              <th scope="col">Fee Type</th>
              <th scope="col">Fee Amount</th>
              <th scope="col" className='text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {fee.map((countr, i) => {
              return <ClassMAnFeeTr key={i} countr={countr} index={i} getfee={getfee} deletefee={deletefee} feeUpdate={feeUpdate} />
            })}
          </tbody>
        </table>
      </div>
      <br />
      <br />
      <hr />
      <div className="text-center">
        <h4 className='my-5 py-3 px-4 color_heading'>Time Schedule</h4>
      </div>
      <div className='mb-5'>
        <form>
          <div className="row">
            <div className="col-md-6 text-center">
              <div className="mb-4">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <TimePicker
                    label="Start time"
                    value={periodSlot.start_time}
                    onChange={(newValue) => {
                      setperiodSlot({start_time:newValue});
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div className="mb-4">
                {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <TimePicker
                    label="End time"
                    value={periodSlot.end_time}
                    onChange={(lol) => {
                      setperiodSlot({end_time:lol});
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider> */}
                <input type="time" />
              </div>
            </div>
          </div>
          <div className="text-center">
            <button className="btn btn_dark_blue text-white" onClick={add_period}><i className="fas fa-plus me-1"></i> Add Period</button>
          </div>
        </form>
      </div>
      <div className='mt-5 pt-5'>
        <table className="table overflow_control">
          <thead>
            <tr>
              <th scope="col">Days/Period</th>
              <th scope="col">Monday</th>
              <th scope="col">Tuesday</th>
              <th scope="col">Wednesday</th>
              <th scope="col">Thursday</th>
              <th scope="col">Friday</th>
              <th scope="col">Saturday</th>
              <th scope="col">Sunday</th>
              <th scope="col" className='text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {fee.map((countr, i) => {
              return <ClassmanSched key={i} countr={countr} index={i} getfee={getfee} deletefee={deletefee} feeUpdate={feeUpdate} />
            })}
          </tbody>
        </table>
      </div>
      <br />

      <div className="my-5 text-end">
        <button className="btn btn_dark_blue text-white" onClick={createBatch} disabled={done}><i className="fas fa-plus me-1"></i> Create Batch</button>
      </div>
    </div>
  )
}

export default ClassManage