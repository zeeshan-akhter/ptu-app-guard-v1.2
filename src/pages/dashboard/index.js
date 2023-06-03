// material-ui
import {
  Box,
  Button,
  Grid,
  Stack,
  Typography
} from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import { useState } from 'react';
// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  const [entryBtnClicked, setEntryBtnClicked] = useState(false);
  const exitBtnHandler = () =>{
    window.location.href="/exit";
  }
  const entryBtnHandler = () => {
    setEntryBtnClicked(!entryBtnClicked);
  }
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 2 */}
      <Grid item xs={12}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Visitor Form button</Typography>
          </Grid>
        </Grid>
        <MainCard content={false} sx={{ mt: 1.5 }}>
          <Box sx={{ pt: 1, pr: 2 }}>
            {!entryBtnClicked ?
              <Stack direction="row" spacing={15} justifyContent="center" alignItems="center" sx={{margin:"100px"}}>
                <Button 
                  sx={{ width: "350px", height:"200px" }} 
                  variant="contained" 
                  color="success" 
                  size='large'
                  onClick={entryBtnHandler}
                  >
                  Entry
                </Button>
                <Button 
                  sx={{ width: "350px", height:"200px" }} 
                  variant="contained" 
                  color="error" 
                  size='large'
                  onClick={exitBtnHandler}
                >
                  Exit
                </Button>
              </Stack>
              :
              <Stack direction="row" spacing={15} justifyContent="center" alignItems="center" sx={{margin:"100px"}}>
                <Button 
                  sx={{ width: "350px", height:"200px" }} 
                  variant="contained" 
                  size='large'
                  onClick={()=> window.location.href="/universityMemberEntry"}
                  >
                  University Member entry
                </Button>
                <Button 
                  sx={{ width: "350px", height:"200px" }} 
                  variant="contained" 
                  size='large'
                  onClick={()=> window.location.href="/eVisitorEntry"}
                >
                  Outsider entry
                </Button>
              </Stack>
            }
          </Box>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default DashboardDefault;
