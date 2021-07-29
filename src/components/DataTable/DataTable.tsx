import * as React from 'react';
import { DataGrid, GridColDef,GridValueGetterParams } from '@material-ui/data-grid';
import { server_calls } from '../../api/server'; // ADD THIS
import { useGetData } from '../CustomHooks'; // ADD THIS
import {
  Button, Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  GridListTileBar
} from '@material-ui/core'; // ADD THESE

import {UserForm} from '../Prefrences/';
import firebase from '../../firebaseConfig';
import { useState } from 'react';
import firestore from '../../firebaseConfig';
interface gridData {
  data: {
    id?: string;
  }
}
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 120 },
  { field: 'User Name', headerName: 'User Name', width: 200 },
  { field: 'Ft-Pt', headerName: 'Ft-Pt', width: 200 }
];
export const DataTable = () => {

  let { getData } = useGetData();
  let [open, setOpen] = React.useState(false);
  let [gridData, setData] = React.useState<gridData>({ data: {} })

  let handleOpen = () => {
    setOpen(true)
  }

  let handleClose = () => {
    setOpen(false)
  }

  let deleteData = () => {
    server_calls.delete(gridData.data.id!)
    getData()
  }
  console.log(gridData.data.id)

  return (
    <div style={{ height: 400, width: '100%' }}>
      
      

      <Button onClick={handleOpen}>Update</Button>
      <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

      {/*Dialog Pop Up begin */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Update Heroes</DialogTitle>
        <DialogContent>
          <UserForm id={gridData.data.id!} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancel</Button>
          <Button onClick={handleClose} color="primary">Done</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export const DataTable2 = () => {

  let { getData } = useGetData();
  let [open, setOpen] = React.useState(false);
  let [gridData, setData] = React.useState<gridData>({ data: {} })

  let handleOpen = () => {
    setOpen(true)
  }

  let handleClose = () => {
    setOpen(false)
  }

  let deleteData = () => {
    server_calls.delete(gridData.data.id!)
    getData()
  }
  console.log(gridData.data.id)

  return (
    <div style={{ height: 400, width: '100%' }}>
      <h2>We will match you depnding on this day/s</h2>
   
     {/*  */}

    <datalist/>
{/*  */}

      <Button onClick={handleOpen}>Update</Button>
      <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

      {/*Dialog Pop Up begin */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Prefrances</DialogTitle>
        <DialogContent>
          <DialogContentText>Update a User</DialogContentText>
          <UserForm id={gridData.data.id!} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancel</Button>
          <Button onClick={handleClose} color="primary">Done</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


function App() {
  const[users, setUsers]= useState ([]);
  const[loading,setLoading] = useState(false);
  if (loading) {
    return <h1>Loading .... </h1>;

  }

  return(
    <div>
      <h1>
        Users
      </h1>
      {users.map(( user: { name: {} | null | undefined; }) => (
        <div>
          <h2>{user.name}</h2>
        </div>
      ))}
    </div>
  )


}


export * from './DataTable'