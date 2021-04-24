import React, { Component } from 'react'
 import "./userControle.css";



const UserControle=()=>{
    

    return(

        <div className="container">
    <div className="row">
        <div className="col-md-6">
            <div className="card widget-user">
                <div className="card-body">
                    <img 
                    src="https://bootdey.com/img/Content/avatar/avatar1.png" 
                    className="img-fluid d-block rounded-circle avatar-md" 
                    alt="user"/>
                    <div className="wid-u-info">
                        <h5 className="mt-3 mb-1">Chadengle</h5>
                        <p className="text-muted mb-0">coderthemes@gmail.com</p>
                        <div className="user-position">
                            <span className="text-warning">Admin</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div className="col-md-6">
            <div className="card widget-user">
                <div className="card-body">
                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png"
                     className="img-fluid d-block rounded-circle avatar-md"
                      alt="user"/>
                    <div className="wid-u-info">
                        <h5 className="mt-3 mb-1">Michael Zenaty</h5>
                        <p className="text-muted mb-0">coderthemes@gmail.com</p>
                        <div className="user-position">
                            <span className="text-info">Customer</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div className="row">
        <div className="col-md-6">
            <div className="card widget-user">
                <div className="card-body">
                    <img 
                    src="https://bootdey.com/img/Content/avatar/avatar7.png" 
                    className="img-fluid d-block rounded-circle avatar-md"
                     alt="user"/>
                    <div className="wid-u-info">
                        <h5 className="mt-3 mb-1">Michael Zenaty</h5>
                        <p className="text-muted mb-0">coderthemes@gmail.com</p>
                        <div className="user-position">
                            <span className="text-danger">User</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-6">
            <div className="card widget-user">
                <div className="card-body">
                    <img 
                    src="https://bootdey.com/img/Content/avatar/avatar2.png"
                     className="img-fluid d-block rounded-circle avatar-md" 
                     alt="user"/>
                    <div className="wid-u-info">
                        <h5 className="mt-3 mb-1">Michael Zenaty</h5>
                        <p className="text-muted mb-0">coderthemes@gmail.com</p>
                        <div className="user-position">
                            <span className="text-success">User</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    );

}



export default UserControle;