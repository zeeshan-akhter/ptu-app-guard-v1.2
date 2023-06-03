import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Button, Paper } from '@mui/material';
import { useState } from 'react';

const ComponentShadow = () => {
  const theme = createTheme();
  const [userData, setUserData] = useState({
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
    const {vehicleNumber} = userData;
    if(vehicleNumber){
      console.log("hey")
    }
    
  }

  return (
    <React.Fragment>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom sx={{margin: "20px"}}>
                        Exit Form
                    </Typography>
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
                <Box>
                <Button
                  variant="contained"
                  sx={{ mt: 3, ml: 1, display: "flex", justifyContent: 'flex-end' }}
                  onClick={handleSubmit}
                >
                Submit
                </Button>
              </Box>
            </Grid>
        </Paper>
      </Container>
    </ThemeProvider>
    </React.Fragment>
  );
};

export default ComponentShadow;
