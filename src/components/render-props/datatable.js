import React from "react";

export default function Datatable({ rows }) {
  return (
    <table className="border">
      {rows.map((row) => {
        return (
          <tr className="border">
            <td className="border">{row.cell()}</td>
          </tr>
        );
      })}
    </table>
  );
}
