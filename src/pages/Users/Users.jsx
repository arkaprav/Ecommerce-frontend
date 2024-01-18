/* eslint-disable no-unused-vars */
import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import SearchBar from "../../components/Search Bar/SearchBar";
import "./style.css";
import UserStatus from "../../components/User Status/UserStatus";

function Users() {
  return (
    <div className="Container">
      <Sidebar opt={5} />
      <div className="container-prod">
        <SearchBar />
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
              <tr>
                <td className="right" scope="row">
                  Arnab Chakraborty
                  <span className="mail">arnab192023@gmail.com</span>
                </td>
                <td>Admin/Manager</td>
                <td>Team Stuff</td>
                <td>Auto Billing</td>
                <td>
                  <UserStatus status="active" />
                </td>
              </tr>
              <tr>
                <td className="right" scope="row">
                  Rahul Kumar
                  <span className="mail">arnab192023@gmail.com</span>
                </td>
                <td>Admin/Manager</td>
                <td>Team Stuff</td>
                <td>Auto Billing</td>
                <td>
                  <UserStatus status="pending" />
                </td>
              </tr>
              <tr>
                <td className="right" scope="row">
                  Suprit Kumar
                  <span className="mail">arnab192023@gmail.com</span>{" "}
                </td>
                <td>Admin/Manager</td>
                <td>Team Stuff</td>
                <td>Auto Billing</td>
                <td>
                  <UserStatus status="inactive" />
                </td>
              </tr>
            </>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
