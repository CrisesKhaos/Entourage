// import React, { useEffect, useState } from "react";

// import firebase from "firebase/app";
// import "firebase/database";

// function Leaderboard() {
//   const [leaderdata, setdata] = useState([]);
//   const database = firebase.database().ref();

//   useEffect(() => {
//     var x = 0;
//     database.orderByChild("ques_fund").once("child_added", (snapshot) => {
//       var temp = leaderdata;
//       temp[x] = snapshot.val();
//       console.log(temp);
//       setdata(temp);
//       console.log(temp);
//       x = x + 1;
//     });
//     console.log(leaderdata);
//   }, []);

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>Rank</th>
//             <th>Participant Name</th>
//             <th>Score</th>
//           </tr>
//         </thead>
//         <tbody>
//           {leaderdata ? (
//             Object.values(leaderdata).map((row, index) => {
//               console.log("hi");
//               return (
//                 <tr key={row.timestamp}>
//                   <td>{index}</td>
//                   <td>{row.name}</td>
//                   <td>{row.ques_fund}</td>
//                 </tr>
//               );
//             })
//           ) : (
//             <h1>bruh</h1>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Leaderboard;
