import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import Calendar from './Calendar';
import { Link } from "react-router-dom";

const columns = [
    { field: 'id', headerName: 'PATIENT ID', width: 150 },
    {
        field: 'pName',
        headerName: 'PATIENT NAME',
        width: 400,
        editable: false,
    },
    {
        field: 'pPhone',
        headerName: 'PHONE NUMBER',
        width: 250,
        editable: false,
    },
    {
        field: 'pAge',
        headerName: 'AGE',
        type: 'number',
        width: 185,
        editable: false,
    },
];

const rows = [
    { id: 1, pName: 'Praveen Dias', pPhone: '0789874589', pAge: 35 },
    { id: 2, pName: 'David Perera', pPhone: '0718964287', pAge: 50 },
    { id: 3, pName: 'Kamal Jayantha', pPhone: '0778945578', pAge: 60 },
    { id: 4, pName: 'Namal Ranawaka', pPhone: '0704447878', pAge: 45 },
    { id: 5, pName: 'Amali Priyawansa', pPhone: '0789546217', pAge: 40 },
    { id: 6, pName: 'Kamal Gunawansa', pPhone: '0774587458', pAge: 50 },
    { id: 7, pName: 'Janaka Sampath', pPhone: '0774563214', pAge: 35 },
    { id: 8, pName: 'Supun Shantha', pPhone: '0774447778', pAge: 28 },
    { id: 9, pName: 'Shantha Sanath', pPhone: '0768975566', pAge: 60 },
    { id: 10, pName: 'Janaka Jayasinghe', pPhone: '0768797484', pAge: 66 },
];

export default function DoctorHome() {
    return (
        <div>
            <Card style={{ width: 380 }}>
                <CardContent>
                    <Calendar />
                </CardContent>
            </Card>
            <br />

            <Card>
                <CardContent style={{ backgroundColor: "#D9FAFF" }}>
                    <h3>PATIENT APPOINTMENTS</h3>
                    <br />
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            checkboxSelection
                            disableSelectionOnClick
                            style={{ backgroundColor: "white" }}
                        />
                    </div>

                    <div style={{ marginTop: 15 }} className="buttonAlignRight">
                        <Link to="/staff/doctor/addprescription">
                            <Tooltip title="Add Prescription" placement="bottom" aria-label="add">
                                <Fab color="primary">
                                    <AddIcon fontSize="large" />
                                </Fab>
                            </Tooltip>
                        </Link>
                    </div>
                </CardContent>
            </Card>

        </div>
    );
}