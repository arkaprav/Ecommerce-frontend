/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import SearchBar from "../../components/Search Bar/SearchBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "./style.css";
import UserStatus from "../../components/User Status/UserStatus";
import { data } from "../../data/Data";
import { filterData } from "../../helpers/datafilter";
function Transactions() {
  const [search, setSearch] = useState("");
  const [payment, setPayment] = useState(null);
  const [mode, setMode] = useState(null);
  const [tdata, setTdata] = useState(data);

  useEffect(() => {
    if (payment !== null || mode !== null) {
      let filterList = [];
      if (payment !== null) {
        if (payment === "all") {
          // do nothing
        } else {
          filterList.push({ payment: `${payment}` });
        }
      }
      if (mode !== null) {
        if (mode === "all") {
          // do nothing
        } else {
          filterList.push({ mode_of_payment: `${mode}` });
        }
      }
      let newData = filterData(data, filterList);
      setTdata(newData);
    }
  }, [payment, mode]);

  return (
    <div className="Container">
      <Sidebar opt={6} />
      <div className="container-prod">
        <SearchBar />
        <div className="filter">
          <select
            name="filter-search"
            id="filter"
            value={payment}
            onChange={(e) => {
              setPayment(e.target.value);
            }}
          >
            <option value="all">All</option>

            <option value="Pend">Pending</option>
            <option value="Cancelled"> Cancelled</option>
            <option value="Failed">Failed</option>
          </select>

          <select
            name="filter-search"
            id="filter"
            value={mode}
            onChange={(e) => {
              setMode(e.target.value);
            }}
          >
            <option value="all">All</option>
            <option value="UPI">UPI</option>
            <option value="Debit Card">Debit Card</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Net Banking">Net Banking</option>
          </select>
        </div>

        <div className="transactions">
          <table>
            <tr>
              <th className="center">ORDER ID</th>
              <th>CUSTOMER</th>
              <th>DATE</th>
              <th>PAYMENT</th>

              <th className="center">MODE OF PAYMENT</th>
            </tr>
            <>
              {tdata?.map((item) => (
                <tr key={item.id}>
                  <td className="center">{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.date}</td>
                  <td>
                    <UserStatus status={item.payment.toLowerCase()} />
                  </td>
                  <td className="center">{item.mode_of_payment}</td>
                </tr>
              ))}
            </>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
