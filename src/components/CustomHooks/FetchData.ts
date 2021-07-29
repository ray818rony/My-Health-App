import firebase from "firebase";
import React, { useState, useEffect } from "react";
import {server_calls } from '../../api';

export const useGetData = () => {
    const [heroData, setData] = useState<any>([]);

    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }

    //Use Effect Hook
    useEffect ( () => {
        handleDataFetch();
    }, [] )

    return { setData, getData:handleDataFetch}
}


// function Retrieve() {
//     const [users, setUsers] = useState ([]);
//     const [loading, setLoading] = useState (false);
  
//     const fire = firebase.firestore().collection("users")
//     console.log(fire)
//   }
//   function getUsers() {
//     setLoading(true);
//     fire.onSnapshot((querySnapshot: any[]) =>{
//       const item: any[] = [];
//       querySnapshot.forEach((doc) => {
//         item.push(doc.data());
//       });
//       getUsers();
//       setLoading(false);
//     });
//   }
//   useEffect(() => {
//     getUsers();
//   },[]);

// function setLoading(arg0: boolean) {
//     throw new Error("Function not implemented.");
// }
  