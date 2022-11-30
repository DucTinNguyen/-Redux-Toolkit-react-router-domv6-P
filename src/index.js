import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Invoices from './components/invoices';
import Expense from './components/expense';
import InvoiceDetail from './components/InvoiceDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route path="/invoices" element={<Invoices/>}>
            <Route index element={<>Select invoice</>}></Route>
            <Route path=':invoiceID' element={<InvoiceDetail/>}></Route>
          </Route>
          <Route path="/expense" element={<Expense/>} />
        </Route>
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);


