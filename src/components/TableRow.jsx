export default function TableRow({
  vital,
  rowID,
  inputID,
  action,
  resultID,
  measurement,
}) {
  return (
    <tr>
      <td>{vital}</td>
      <td id={rowID}>
        <input type="text" id={inputID} onClick={action} /> {measurement}
      </td>
      <td id={resultID}></td>
    </tr>
  );
}
