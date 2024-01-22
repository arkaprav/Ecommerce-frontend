/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import UserStatus from "../../components/User Status/UserStatus";

function UserDetails() {
  const { id } = useParams();

  return (
    <div className="user-details">
      <div className="user-cred">
        <div className="user-pic">
          <div className="pic-box">
            <img
              className="pic"
              src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/avatars/10.png"
              alt=""
            />
          </div>
          <p className="user-name">User's Name {id}</p>
          <div className="role">Author</div>
        </div>
        <div className="details">Details</div>
        <div className="info">
          <p>User Name: violate.dev </p>
          <p>Email: vafgot@vultukir.org</p>

          <p>
            Status:
            <UserStatus status="active" />
          </p>
          <p>Role: Author</p>
          <p>Contact: (123) 456-7890</p>
          <p>Country: England</p>
        </div>
      </div>
      <div className="orders">
        <div className="order-head">Orders</div>
        <div className="order-table">
          <table>
            <tr>
              <th>Order ID</th>
              <th>Total</th>
              <th>Payment Status</th>
              <th>Fulfilment Status</th>
              <th>Date</th>
            </tr>
            <>
              <tr>
                <td>#2009</td>
                <td>$400</td>
                <td>
                  <UserStatus status="paid" />
                </td>
                <td>Order Fulfilled</td>
                <td>22/1/2024</td>
              </tr>

              <tr>
                <td>#2009</td>
                <td>$400</td>
                <td>
                  <UserStatus status="paid" />
                </td>
                <td>Order Fulfilled</td>
                <td>22/1/2024</td>
              </tr>
            </>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
