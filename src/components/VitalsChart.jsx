// USE util.js TO ADD FUNCTIONALITY TO CHART

import DonorInfo from "./DonorInfo";
import { checkWeight } from "../../utils";

export default function VitalsChart() {
  // const takeAction = () => {
  //   console.log("TEST");
  // };
  return (
    <main id="main">
      <section className="screening-info">
        <DonorInfo />
        <div className="vitals">
          <table>
            <tbody>
              <tr>
                <th>Activity</th>
                <th>Results</th>
                <th>Results Status</th>
              </tr>
              <tr>
                <td>Weight</td>
                <td id="weight">
                  <input type="text" id="weight-input" onInput={checkWeight} />{" "}
                  lbs
                </td>
                <td id="weight-result"></td>
              </tr>

              <tr>
                <td>Arm Check</td>
                <td id="arm-check">
                  <input type="text" id="arm-input" /> P/F
                </td>
                <td id="arm-result"></td>
              </tr>
              <tr>
                <td>Temperature</td>
                <td id="temperature">
                  <input type="text" id="temp-input" /> &#x2109;
                </td>
                <td id="temp-result"></td>
              </tr>
              <tr>
                <td>Pulse</td>
                <td id="pulse">
                  <input type="text" id="pulse-input" /> bpm
                </td>
                <td id="pulse-result"></td>
              </tr>
              <tr>
                <td>BP-SYS</td>
                <td id="sys">
                  <input type="text" id="sys-input" /> mmHg
                </td>
                <td id="sys-result"></td>
              </tr>
              <tr>
                <td>BP-DIA</td>
                <td id="dia">
                  <input type="text" id="dia-input" /> mmHg
                </td>
                <td id="dia-result"></td>
              </tr>
              <tr>
                <td>Hematocrit</td>
                <td id="hematocrit">
                  <input type="text" id="hematocrit-input" /> &#37;
                </td>
                <td id="hematocrit-result"></td>
              </tr>
              <tr>
                <td>Total Protein</td>
                <td id="total-protein">
                  <input type="text" id="protein-input" /> g/dl
                </td>
                <td id="protein-result"></td>
              </tr>
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
      </section>
    </main>
  );
}
