import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import firebase from "firebase/app";
import "firebase/database";

function Leaderboard() {
  const [leaderdata, setdata] = useState([]);
  const database = firebase.database().ref();

  useEffect(() => {
    var x = 0;
    database.orderByChild("ques_fund").once("child_added", (snapshot) => {
      var temp = leaderdata;
      temp[x] = snapshot.val();
      console.log(temp);
      setdata(temp);
      console.log(temp);
      x = x + 1;
    });
    console.log(leaderdata);
  }, []);

  const COLUMNS = [
    { field: "rank", headerName: "Rank", width: "100" },
    { field: "name", headerName: "Participant Name", width: "100" },
    { field: "ques_fund", headerName: "Score", width: "100" },
  ];
  const rows = [
    {
      id: 1,
      rank: 1,
      name: "bruh",
      ques_fund: "bruh",
      tatti: "poti",
    },
  ];

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Participant Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderdata ? (
            Object.values(leaderdata).map((row, index) => {
              console.log("hi");
              return (
                <tr key={row.timestamp}>
                  <td>{index}</td>
                  <td>{row.name}</td>
                  <td>{row.ques_fund}</td>
                </tr>
              );
            })
          ) : (
            <h1>bruh</h1>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
