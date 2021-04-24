import React, { Component } from "react";

import "./profile.css";

const Profile = () => {
  return (
    <form>
      <div className="container">
        <div id="content" className="content p-0">
          <div className="profile-header">
            <div className="profile-header-cover"></div>

            <div className="profile-header-content">
              <div className="profile-header-img">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt=""
                />
              </div>

              <div className="profile-header-info">
                <h4 className="m-t-sm">Clyde Stanley</h4>
                <p className="m-b-sm">Role</p>
              </div>
            </div>

            <ul className="profile-header-tab nav nav-tabs">
              <li className="nav-item">
                <a href="#profile-post" className="nav-link" data-toggle="tab">
                  POSTS
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#profile-about"
                  className="nav-link active show"
                  data-toggle="tab"
                >
                  ABOUT
                </a>
              </li>
            </ul>
          </div>

          <div className="profile-container">
            <div className="row row-space-20">
              <div className="col-md-8">
                <div className="tab-content p-0">
                  <div className="tab-pane active show" id="profile-about">
                    <table className="table table-profile">
                      <thead>
                        <tr>
                          <th colspan="2">CONTACT INFORMATION</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="field">Mobile Phones</td>
                          <td className="value">
                            +216 50 000 000
                            <a href="#" className="m-l-10">
                              Edit
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="field">Email</td>
                          <td className="value">
                            admin@infinite.com
                            <a href="#" className="m-l-10">
                              Edit
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="field">Facebook</td>
                          <td className="value">
                            http://facebook.com/infinite.admin
                            <a href="#" className="m-l-10">
                              Edit
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="field">Website</td>
                          <td className="value">
                            http://seantheme.com
                            <a href="#" className="m-l-10">
                              Edit
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="field">Address</td>
                          <td className="value">
                            Twitter, Inc.{" "}
                            <a href="#" className="m-l-10">
                              Edit
                            </a>
                            <br />
                            1355 Market Street, Suite 900
                            <br />
                            San Francisco, CA 94103
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="table table-profile">
                      <thead>
                        <tr>
                          <th colspan="2">BASIC INFORMATION</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="field">Birth of Date</td>
                          <td className="value">
                            November 4, 1989
                            <a href="#" className="m-l-10">
                              Edit
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="field">Gender</td>
                          <td className="value">
                            Male
                            <a href="#" className="m-l-10">
                              Edit
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="field">Facebook</td>
                          <td className="value">
                            http://facebook.com/infinite.admin
                            <a href="#" className="m-l-10">
                              Edit
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="field">Website</td>
                          <td className="value">
                            http://seantheme.com
                            <a href="#" className="m-l-10">
                              Edit
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Profile;
