import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/base';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { Box, Button } from '../../../node_modules/@mui/material/index';


export default function AddressForm() {
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    phoneNumber:"",
    address:"",
    gender:"",
    place:"",
    noOfPassengers:"",
    vehicleNumber:""
  });
  let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUserData({...userData, [name]: value});
        console.log(userData)
    };

  const handleSubmit = async(event) => {
    event.preventDefault();
    const {fullName, email, phoneNumber, address, gender, place, noOfPassengers, vehicleNumber} = userData;
    if(fullName && email && phoneNumber && address && gender && place && noOfPassengers && vehicleNumber){
      console.log("hey")
    }
    
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Visitors detail
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="fullName"
            name="fullName"
            label="Full name"
            value={userData.fullName}
            onChange={postUserData}
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="phoneNumber"
            name="phoneNumber"
            label="Phone"
            value={userData.phoneNumber}
            onChange={postUserData}
            fullWidth
            autoComplete="phone"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address of visitor"
            value={userData.address}
            onChange={postUserData}
            fullWidth
            autoComplete="address"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
        <FormControl fullWidth>
        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
                required
                row
                aria-labelledby="demo-radio-buttons-group-label"
                value={userData.gender}
                onChange={postUserData}
                defaultValue="male"
                name="gender"
            >
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
        </FormControl>
        </Grid>
        <Grid item xs={12}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Place to visit</InputLabel>
                <Select
                name="place"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={userData.place}
                onChange={postUserData}
                label="Place to visit"
                >
                    <MenuItem value="others">
                        <em>others</em>
                    </MenuItem>
                    <MenuItem value="Main Building">Main Building</MenuItem>
                    <MenuItem value="AB-1">AB 1</MenuItem>
                    <MenuItem value="AB-2">AB 2</MenuItem>
                    <MenuItem value="AB-3">AB 3</MenuItem>
                    <MenuItem value="PIT Building">PIT Building</MenuItem>
                    <MenuItem value="Auditorium">Auditorium</MenuItem>
                    <MenuItem value="BH-1">Boys Hostel 1</MenuItem>
                    <MenuItem value="BH-2">Boys Hostel 2</MenuItem>
                    <MenuItem value="BH-3">Boys Hostel 3</MenuItem>
                    <MenuItem value="GH-1">Girls Hostel 1</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="vehicleNumber"
            name="vehicleNumber"
            label="Vehicle number"
            value={userData.vehicleNumber}
            onChange={postUserData}
            fullWidth
            autoComplete="vehicle-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="noOfPassengers"
            name="noOfPassengers"
            label="Number of passengers"
            value={userData.noOfPassengers}
            onChange={postUserData}
            fullWidth
            variant="standard"
          />
        </Grid>
        <React.Fragment>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{ mt: 3, ml: 1 }}
            >
              Submit
            </Button>
          </Box>
        </React.Fragment>
      </Grid>
    </React.Fragment>
  );
}