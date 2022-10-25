import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@material-ui/core/TextField';

const Buttons = () => {

  return (
    <div style={{display: "flex", flexDirection: "row", gap: ".2rem"}}>
          <TextField id="outlined-basic" label="Enter Quantity" variant="outlined"/>
          <Button >Check In</Button>
          <Button >Check Out</Button>
    </div>
  )
}

export default Buttons