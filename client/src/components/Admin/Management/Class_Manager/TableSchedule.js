import React, { useRef, useState } from 'react'
import Select from 'react-select';


function TableSchedule({ element, subJects ,getDataSchedule}) {
    const firstmodaltable = useRef(null)
    const firstmodaltableclose = useRef(null)
    const [period, setPeriod] = useState({
        periodStartTime: '',
        periodEndTime: '',
        monday: "",
        tuesday: "",
        wednesday: "",
        thursday: "",
        friday: "",
        saturday: "",
        sunday: "",
    })
    const handleOnChange = (i, e) => {
        setPeriod({ ...period, [e.name]: i.value })
    }

    const [ID,setID]=useState(null)

    const handleUpdate = async() => {
        // console.log(ID)
        const host = 'http://localhost:5000'
        const response = await fetch(`${host}/api/schedule/update-Schedule/${ID}`,{
            method : 'PUT',
            headers:{
                'Content-Type':'application/json',
            },
            body : JSON.stringify({startTime : period.periodStartTime ,endTime : period.periodEndTime, monday : period.monday , tuesday : period.tuesday , wednesday : period.wednesday , thursday : period.thursday , friday : period.friday , saturday : period.saturday , sunday : period.sunday })
        })
        setID(null)
        getDataSchedule()
        firstmodaltableclose.current.click()

    }

    return (
        <>
            <tr>
                <td>{element.startTime}-{element.endTime}</td>
                <td>{element.monday}</td>
                <td>{element.tuesday}</td>
                <td>{element.wednesday}</td>
                <td>{element.thursday}</td>
                <td>{element.friday}</td>
                <td>{element.saturday}</td>
                <td>{element.sunday}</td>
                <td className='text-center'><p className="p-0 px-2 py-1 m-0 ">
                    <i onClick={()=>{
                        setID(null)
                        setID(element._id)

                    firstmodaltable.current.click()}} className="fad fa-pen icon_btn"></i>
                </p></td>
            </tr>


            <div className="container">
                <button type="button" ref={firstmodaltable} className="d-none" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                </button>

                <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content p-4">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Edit Schedule</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="row">
                                <div className="label text-center my-2">
                                    <input className='mx-4' onChange={(e) => { setPeriod({ ...period, [e.target.name]: e.target.value }) }} type="time" id="appt" name="periodStartTime" />
                                    <label htmlFor='label'><h3>Select Time</h3></label>
                                    <input className='mx-4' onChange={(e) => { setPeriod({ ...period, [e.target.name]: e.target.value }) }} type="time" id="appt" name="periodEndTime" />

                                </div>
                                <div className=" col-md-6 py-2">
                                    <Select
                                        name='monday'
                                        defaultValue={element.monday}
                                        onChange={handleOnChange}
                                        options={subJects}
                                        width={100}
                                        placeholder="Select monaday's period"
                                    />


                                </div>
                                <div className=" col-md-6 py-2">
                                    <Select
                                        name='tuesday'
                                        defaultValue={element.tuesday}
                                        onChange={handleOnChange}
                                        options={subJects}
                                        width={100}
                                        placeholder="Select tuesday's period"
                                    />
                                </div>
                                <div className=" col-md-6 py-2">
                                    <Select
                                        name='wednesday'
                                        defaultValue={element.wednesday}
                                        onChange={handleOnChange}
                                        options={subJects}
                                        width={100}
                                        placeholder="Select wednesday's period"
                                    />
                                </div>
                                <div className=" col-md-6 py-2">
                                    <Select
                                        name='thursday'
                                        defaultValue={element.thursday}
                                        onChange={handleOnChange}
                                        options={subJects}
                                        width={100}
                                        placeholder="Select thursday's period"
                                    />
                                </div>
                                <div className=" col-md-6 py-2">
                                    <Select
                                        name='friday'
                                        defaultValue={element.friday}
                                        onChange={handleOnChange}
                                        options={subJects}
                                        width={100}
                                        placeholder="Select friday's period"
                                    />
                                </div>
                                <div className=" col-md-6 py-2">
                                    <Select
                                        name='saturday'
                                        defaultValue={element.saturday}
                                        onChange={handleOnChange}
                                        options={subJects}
                                        width={100}
                                        placeholder="Select saturday's period"
                                    />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" ref={firstmodaltableclose} data-bs-dismiss="modal">Close</button>
                                    <button onClick={handleUpdate}  className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )


}
export default TableSchedule
