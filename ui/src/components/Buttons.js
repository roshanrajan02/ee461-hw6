import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@material-ui/core/TextField';

const Buttons = (props) => {

  const [quantity, setQuantity] = useState(0)

  return (
    <div style={{display: "flex", flexDirection: "row", gap: ".2rem"}}>
          <TextField id="outlined-basic" label="Enter Quantity" variant="outlined" onChange={(event) => setQuantity(parseInt(event.target.value))}/>
          <Button onClick={() => props.onClick(quantity, true, props.hwSet)}>Check In</Button>
          <Button onClick={() => props.onClick(quantity, false, props.hwSet)}>Check Out</Button>
    </div>
  )
}

export default Buttons