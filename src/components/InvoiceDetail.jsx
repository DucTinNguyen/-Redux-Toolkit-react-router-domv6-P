import React from 'react'
import { useParams } from 'react-router-dom'

export default function InvoiceDetail() {
    const {invoiceID} = useParams()
  return (
    <div>
      <h1>hello {invoiceID}</h1>
    </div>
  )
}
