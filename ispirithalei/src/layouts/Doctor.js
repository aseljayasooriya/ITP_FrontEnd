import React from "react";
import Sidebar from "../components/staff-ui/sidebar/Sidebar";
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';
import TransformIcon from '@material-ui/icons/Transform';
import DoneIcon from '@material-ui/icons/Done';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Topbar from "../components/staff-ui/topbar/Topbar";
import "./layout.css"
import DoctorHome from "../pages/staff-ui/doctor/DoctorHome";
import DoctorPrescription from "../pages/staff-ui/doctor/DoctorPrescription";
import DoctorViewPrecription from "../pages/staff-ui/doctor/DoctorViewPrescription";
import DoctorEditPrescription from "../pages/staff-ui/doctor/DoctorEditPrescription";
import DoctorAddNote from "../pages/staff-ui/doctor/DoctorAddNote";
import DoctorViewNotes from "../pages/staff-ui/doctor/DoctorViewNotes";
import NewSession from '../pages/staff-ui/doctor/NewSession'
import { Switch, Route } from "react-router-dom";

const Doctor = () => {
  const user = {
    name: 'Asel Jayasooriya',
    role: 'Doctor',
    list: [
      {
        path: "",
        exact: true,
        icon: <DashboardOutlinedIcon className="sidebarIcon" />,
        iconlabel: 'Dashboard',
        id: 1
      },
      {
        path: "addprescription",
        icon: <PublishOutlinedIcon className="sidebarIcon" />,
        iconlabel: 'Add Prescription',
        id: 2
      },
      {
        path: "viewprescription",
        icon: <TransformIcon className="sidebarIcon" />,
        iconlabel: 'View Prescriptions',
        id: 3
      },
      {
        path: "doctorschedule",
        icon: <DoneIcon className="sidebarIcon" />,
        iconlabel: 'Doctor Schedule',
        id: 4
      },
      {
        path: "support",
        icon: <HelpOutlineIcon className="sidebarIcon" />,
        iconlabel: 'Support',
        id: 5
      },



    ]
  }

  return (
    <div >
      <div className="container">
        <Sidebar user={user} />
        <div className="others">
          <Topbar page={user.list} />
          <Switch>
            <Route exact path="/staff/doctor/">
              <DoctorHome />
            </Route>


            <Route path="/staff/doctor/addprescription">
              <DoctorPrescription />
            </Route>

            <Route path="/staff/doctor/viewprescription">
              <DoctorViewPrecription />
            </Route>

            <Route path="/staff/doctor/doctorschedule">
              <NewSession />
            </Route>

            {/* <Route path="/staff/doctor/support">
              <# />
            </Route> */}

            <Route path="/staff/doctor/addnote">
              <DoctorAddNote />
            </Route>

            <Route path="/staff/doctor/viewnote">
              <DoctorViewNotes />
            </Route>

            <Route path="/staff/doctor/editprescription">
              <DoctorEditPrescription />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default Doctor
