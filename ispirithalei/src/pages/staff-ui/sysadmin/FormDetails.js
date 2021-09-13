import React from "react";
import { Container, InputLabel } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core";
import empFormService from "../../../services/empForm.service";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import { Card } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import {
  useForm,
  Form,
} from "../../../components/patient-ui/Echannelling/useForm";
import { useState } from "react";
import passwordService from "../../../services/password.service";
import MenuItem from "@material-ui/core/MenuItem";
import { Select } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";

const initialFValues = {
  step: 1,
  role: "",
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  address: "",
};

function EmpForm() {
  const handleSubmit = (e) => {
    console.log("submitted");
    //password generator
    var randomstring = Math.random().toString(36).slice(-8);
    console.log(randomstring);

    e.preventDefault();

    const data = {
      role: role,
      firstName: selectedFirstName,
      lastName: selectedLastName,
      email: selectedEmail,
      mobile: selectedMobile,
      address: selectedAddress,
      password: randomstring,
    };

    empFormService
      .create(data)

      .then((response) => {
        alert("success");
        console.log("inside create" + response.data);
        console.log("inside then" + response.data);
      })
      .catch((e) => {
        // alert(e );
        console.log("this is the error:" + e);
      });

    passwordService
      .create(data)

      .then((response) => {
        alert("success");
        console.log("inside create" + response.data);
        console.log("inside then" + response.data);
      })
      .catch((e) => {
        // alert(e );
        console.log("this is the error:" + e);
      });
  };

  const [selectedFirstName, setSelectedFirstName] = useState("");
  const [selectedLastName, setSelectedLastName] = useState("");
  const [selectedEmail, setSelectedEmail] = useState("");
  const [selectedMobile, setSelectedMobile] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");

  const handleFirstNameChange = (event) => {
    setSelectedFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setSelectedLastName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setSelectedEmail(event.target.value);
  };
  const handleMobileChange = (event) => {
    setSelectedMobile(event.target.value);
  };
  const handleAddressChange = (event) => {
    setSelectedAddress(event.target.value);
  };
  const [role, setRole] = useState("");

  const handleRoleChange = (event) => {
    setRole(event.target.value);
    console.log(event.target.value);
  };

  return (
    <Container maxWidth="md">
      <Form>
        <container>
          <div>
            <MuiThemeProvider>
              <React.Fragment>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Employee Form
                    </Typography>
                    <br></br>
                    <br></br>

                    <Grid container spacing={3}>
                      <Grid item xs={4}>
                        <p style={styles.label}>Role</p>
                      </Grid>
                      <Grid item xs={5}>
                        <Select
                          variant="outlined"
                          style={styles.formControl}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={role}
                          onChange={handleRoleChange}
                        >
                          <MenuItem value="Doctor">Doctor</MenuItem>
                          <MenuItem value="InventoryManager">
                            InventoryManager
                          </MenuItem>
                          <MenuItem value="Labassistant">Labassistant</MenuItem>
                          <MenuItem value="Pharmasist">Pharmasist</MenuItem>
                          <MenuItem value="PaymentAdmin">PaymentAdmin</MenuItem>
                          <MenuItem value="Receptionist">Receptionist</MenuItem>
                          <MenuItem value="SysAdmin">SysAdmin</MenuItem>
                        </Select>
                      </Grid>

                      <Grid item xs={4}>
                        <p style={styles.label}>First Name</p>
                      </Grid>
                      <Grid item xs={5}>
                        <TextField
                          name="firstName"
                          label="First Name"
                          variant="outlined"
                          required
                          fullWidth={true}
                          onChange={handleFirstNameChange}
                          defaultValue={selectedFirstName}
                        />
                      </Grid>

                      <Grid item xs={4}>
                        <p style={styles.label}>Last Name</p>
                      </Grid>
                      <Grid item xs={5}>
                        <TextField
                          name="lastName"
                          label="Last Name"
                          variant="outlined"
                          required
                          fullWidth={true}
                          onChange={handleLastNameChange}
                          defaultValue={selectedLastName}
                        />
                      </Grid>

                      <Grid item xs={4}>
                        <p style={styles.label}>Email</p>
                      </Grid>
                      <Grid item xs={5}>
                        <TextField
                          name="email"
                          label="Email"
                          variant="outlined"
                          required
                          fullWidth={true}
                          onChange={handleEmailChange}
                          defaultValue={selectedEmail}
                        />
                      </Grid>

                      <Grid item xs={4}>
                        <p style={styles.label}>Mobile</p>
                      </Grid>
                      <Grid item xs={5}>
                        <TextField
                          type="number"
                          name="mobile"
                          label="Mobile"
                          variant="outlined"
                          required
                          fullWidth={true}
                          InputProps={{inputProps:{min: 10, max: 10}}}
                          onChange={handleMobileChange}
                          defaultValue={selectedMobile}
                        />
                      </Grid>

                      <Grid item xs={4}>
                        <p style={styles.label}>Address</p>
                      </Grid>
                      <Grid item xs={5}>
                        <TextField
                          name="address"
                          label="Adress"
                          variant="outlined"
                          required
                          fullWidth={true}
                          onChange={handleAddressChange}
                          defaultValue={selectedAddress}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Button
                          
                          variant="contained"
                          color="secondary"
                          style={styles.button}
                          startIcon={<AutorenewIcon />}
                        >Reset</Button>

                        <Button
                          
                          type="submit"
                          variant="contained"
                          color="primary"
                          style={styles.button}
                          onClick={handleSubmit}
                          startIcon={<SendIcon />}
                        >submit</Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </React.Fragment>
            </MuiThemeProvider>
          </div>
        </container>
      </Form>
    </Container>
  );
}

const styles = {
  button: {
    margin: 20,
    left: 415,
  },

  label: {
    margin: 30,
  },

  formControl: {
    minWidth: 228,
  },
};

export default EmpForm;
