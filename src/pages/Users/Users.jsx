/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import SearchBar from "../../components/Search Bar/SearchBar";
import "./style.css";
import UserStatus from "../../components/User Status/UserStatus";
import { userData } from "../../data/userData";
import { filterData } from "../../helpers/datafilter";
import Pagination from "@mui/material/Pagination";
import { useNavigate } from "react-router-dom";

function Users() {
  const [role, setRole] = useState(null);
  const [uData, setUData] = useState(userData);
  const [pagination, setPagination] = useState(1);
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  //  ---------------------filter function ---------------------------------//
  const handleChange = (e, p) => {
    setPagination(p);
  };

  // useEffect pagenation

  useEffect(() => {
    setCount(Math.ceil(uData.length / 10));
  }, [uData]);

  //  slice  tdata  useeffect

  useEffect(() => {}, [pagination]);

  useEffect(() => {
    if (role !== null) {
      let filterList = [];
      if (role !== null) {
        if (role === "all") {
          // do nothing
        } else {
          filterList.push({
            field: "role",
            value: `${role}`,
            operator: (a, b) => a === b,
          });
        }
      }

      console.log(filterList);
      let newData = filterData(userData, filterList);
      setUData(newData);
    }
  }, [role]);

  //-----------------------------return statement---------------------------//
  return (
    <div className="Container">
      <Sidebar opt={5} />
      <div className="container-prod">
        <SearchBar />
        {/*----------------------- FILTERS--------------------------------------------------------------- */}

        <div className="filter">
          <select
            name="filter-search"
            id="filter"
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
            }}
          >
            <option value="all">User Role</option>

            <option value="Admin">Admin</option>
            <option value="Maintainer">Maintainer</option>
            <option value="Subscriber">Subscriber</option>
            <option value="Editor">Editor</option>
          </select>
        </div>
        {/* --------------------------------------user---------------------------------------------------------- */}
        <div className="users">
          <table>
            <tr>
              <th>USER</th>
              <th>ROLE</th>
              <th>PLAN</th>
              <th>BILLING</th>
              <th>STATUS</th>
            </tr>
            <>
              {uData
                .slice((pagination - 1) * 10, (pagination - 1) * 10 + 10)
                ?.map((item) => (
                  <tr key={item.id}>
                    <td className="right" scope="row">
                      <span
                        className="pname"
                        onClick={() => {
                          navigate(`/userdetails/${item.id}`);
                        }}
                      >
                        {item.name}
                      </span>
                      <span className="mail">{item.email}</span>
                    </td>
                    <td>{item.role}</td>
                    <td>{item.plan}</td>
                    <td>{item.billing}</td>
                    <td>
                      <UserStatus status={item.status} />
                    </td>
                  </tr>
                ))}
            </>
          </table>
        </div>
        <Pagination
          className="pagination"
          count={count}
          color="primary"
          onChange={handleChange}
        ></Pagination>
      </div>
    </div>
  );
}

export default Users;
