import React from 'react'

const ClassmanSched = (props) => {
  const { countr, index, getfee, deletefee, feeUpdate } = props
  return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{countr.value}</td>
            <td>{countr.type}</td>
            <td>{countr.amount}</td>
            <td className='text-center'>
                <i className="far fa-edit px-2 text-success cursor_pointer"></i>
                <i className="far fa-trash-alt px-2 text-danger cursor_pointer"></i>
            </td>
        </tr>
  )
}

export default ClassmanSched