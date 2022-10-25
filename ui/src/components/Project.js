import React, {useReducer,useState} from 'react'
import Button from '@mui/material/Button';
import axios from "axios";

import './Project.css'
import Buttons from './Buttons'

const Project = (props) => {

  const [, forceUpdate] = useReducer(x => x + 1, 0)
  const [hwSet1Usage, setHwSet1Usage] = useState(100)
  const [hwSet2Usage, setHwSet2Usage] = useState(100)
  const [users, setUsers] = useState(props.authorizedUsers)
  const [added, setAdded] = useState(false)

  const addSampleUser = () => {
    let temp = users
    temp.push("SampleUser")
    setUsers(temp)
    setAdded(true)
    forceUpdate()
    axios({
      method: "GET",
      url:`/joinProject/${props.id}`,
    }).then((response) => {
      const res = response.data
      alert(res.message)
    }).catch((error) => {
      console.log(error)
    })
  }

  const removeSampleUser = () => {
    let temp = users
    temp.pop()
    setUsers(temp)
    setAdded(false)
    forceUpdate()
    axios({
      method: "GET",
      url:`/leaveProject/${props.id}`,
    }).then((response) => {
      const res = response.data
      alert(res.message)
    }).catch((error) => {
      console.log(error)
    })
  }

  function checkInOutHardware(qty, isIn, hwSet) {
    let updatedVal = 0

    if (hwSet === "hwSet1") {
      updatedVal = hwSet1Usage
    }
    else {
      updatedVal = hwSet2Usage
    }

    if (isIn) {
      updatedVal += qty
      axios({
        method: "GET",
        url:`/check_in/${props.id}/${hwSet}/${qty}`,
      }).then((response) => {
        const res = response.data
        alert(res.message)
      }).catch((error) => {
        console.log(error)
      })
    }
    else {
      updatedVal -= qty
      axios({
        method: "GET",
        url:`/check_out/${props.id}/${hwSet}/${qty}`,
      }).then((response) => {
        const res = response.data
        alert(res.message)
      }).catch((error) => {
        console.log(error)
      })
    }

    if (hwSet === "hwSet1") {
      setHwSet1Usage(updatedVal)
    }
    else {
      setHwSet2Usage(updatedVal)
    }
    forceUpdate()

  }



  return (
    <div id="mainproj" className="project-structure">
      <div className='project-details'>
        <div className="project-name">
          {props.name}
        </div>
        <div className="project-users">
          Authorized Users: {users.join(", ")}
        </div>
        <div className="project-hwsets-btns">
          <div>HWSet1: {hwSet1Usage} / 100</div>
          <div>HWSet2: {hwSet2Usage} / 100</div>
        </div>
        <div className="project-hwsets-btns">
          <Buttons hwSet="hwSet1" onClick={checkInOutHardware}/>
          <Buttons hwSet="hwSet2" onClick={checkInOutHardware}/>
        </div>
          {!added &&
            <Button className='project-join' onClick={addSampleUser}>Join</Button> 
          }
          {added &&
            <Button className='project-join' onClick={removeSampleUser}>Leave</Button> 
          }        
        </div>
    </div>
  )
}

export default Project