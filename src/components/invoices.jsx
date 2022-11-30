import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import {invoices } from '../data'
export default function Invoices() {
    
  return (
    <div className="">
        {invoices.map(invoice =>(
            <NavLink
            // className={({isActive})=> isActive ? "text-red-500" : ''}
            style={({isActive})=>isActive? {color:'red'}:undefined}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
            >{invoice.name}</NavLink>
        ))}
        <div>
            <Outlet/>
        </div>
    </div>
  )
}
