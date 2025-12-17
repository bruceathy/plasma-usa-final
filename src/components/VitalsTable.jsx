// USE util.js TO ADD FUNCTIONALITY TO CHART
// prompt: change an imput element into the p element that was typed into it
import { useState } from "react";

import TableRow from "./TableRow";
import {
  checkWeight,
  checkArmCheck,
  checkTemperature,
  checkPulse,
  checkSys,
  checkDia,
  checkHematocrit,
  checkTotalProtein,
} from "../../utils";

export default function VitalsTable() {
  let passedVitals = []; // use to check if all vitals are passed
  const [weightVal, setWeightVal] = useState("");

  function justTest() {
    // checkWeight();
    // setWeightVal(weight.value);
  }

  return (
    <>
      <div className="vitals">
        <table>
          <tbody>
            <tr>
              <th>Activity</th>
              <th>Results</th>
              <th>Results Status</th>
            </tr>
            <TableRow
              vital="Weight"
              rowID="weight"
              inputID="weight-input"
              action={justTest}
              measurement={"lbs"}
              resultID="weight-result"
            />
            <TableRow
              vital="Arm Check"
              rowID="arm-check"
              inputID="arm-input"
              action={checkArmCheck}
              measurement={"P/F"}
              resultID="arm-result"
            />
            <TableRow
              vital="Temperature"
              rowID="temperature"
              inputID="temp-input"
              action={checkTemperature}
              measurement="&#x2109;"
              resultID="temp-result"
            />
            <TableRow
              vital="Pulse"
              rowID="pulse"
              inputID="pulse-input"
              action={checkPulse}
              measurement="bpm"
              resultID="pulse-result"
            />
            <TableRow
              vital="BP-SYS"
              rowID="sys"
              inputID="sys-input"
              action={checkSys}
              measurement="mmHg"
              resultID="sys-result"
            />
            <TableRow
              vital="BP-DIA"
              rowID="dia"
              inputID="dia-input"
              action={checkDia}
              measurement="mmHg"
              resultID="dia-result"
            />
            <TableRow
              vital="Hematocrit"
              rowID="hematocrit"
              inputID="hematocrit-input"
              action={checkHematocrit}
              measurement="&#37;"
              resultID="hematocrit-result"
            />
            <TableRow
              vital="Total Protein"
              rowID="total-protein"
              inputID="protein-input"
              action={checkTotalProtein}
              measurement="g/dl"
              resultID="protein-result"
            />
          </tbody>
        </table>
      </div>
      <div className="check-results">
        <button
          type="button"
          className="check-btn"
          id="result-btn"
          // onClick={takeAction}
        >
          Check Results
        </button>
      </div>
    </>
  );
}
