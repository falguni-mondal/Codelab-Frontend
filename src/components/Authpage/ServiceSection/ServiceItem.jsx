import React from 'react'
import { TiTick } from "react-icons/ti";


const ServiceItem = ({head, body}) => {
  return (
    <li className='list-none backdrop-brightness-60'>

      <h2 className='service-heading text-[0.9rem] font-medium flex items-center'><TiTick className='text-[1.1rem]' />{head}</h2>
      <p className='service-msg text-[0.9rem] pl-5 leading-tight'>{body}</p>
    </li>
  )
}

export default ServiceItem