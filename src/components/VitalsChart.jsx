// USE REACT QUERY TO GET DONOR INFO
// USE GITHUB TO REVIEW ANIMELIST PROJECT FOR HELP
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { takeAction } from "../../utils";

const fetchUser = async () => {
  try {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    return data.results[0];
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch user data");
  }
};

export default function VitalsChart() {
  return (
    <main id="main">
      <section className="screening-info">
        <div className="profile"></div>
        <div className="vitals">
          <table>
            <tr>
              <th>Activity</th>
              <th>Results</th>
              <th>Results Status</th>
            </tr>
            <tr>
              <td>Weight</td>
              <td id="weight">
                <input type="text" id="weight-input" /> lbs
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
          </table>
        </div>
        <div className="check-results">
          <button
            type="button"
            className="check-btn"
            id="result-btn"
            onClick={takeAction}
          >
            Check Results
          </button>
        </div>
      </section>
    </main>
  );
}
