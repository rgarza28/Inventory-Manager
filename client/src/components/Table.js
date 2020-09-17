import React, { useState } from "react";
import MaterialTable from "material-table";
import axios from "axios";

export default function MaterialTableDemo() {
  const [state, setState] = useState({
    columns: [
      { title: "Part Number", field: "sku" },
      { title: "Product Name", field: "productName" },
      {
        title: "Current Inventory",
        field: "currentInventory",
        type: "numeric",
      },
      {
        title: "Minumum Inventory",
        field: "minInventory",
        type: "numeric",
      },
      {
        title: "Cost ($)",
        field: "cost",
        type: "numeric",
      },
      {
        title: "Retail Price ($)",
        field: "retail",
        type: "numeric",
      },
    ],
  });

  return (
    <MaterialTable
      title="Current Inventory Status"
      columns={state.columns}
      data={state.data}
      style={{ boxShadow: "0 1px 3px #184059" }}
      editable={{
        onRowUpdate: (data) =>
          new Promise((resolve) => {
            setTimeout(() => {
              let url = "http://localhost:5000/api/products/" + data._id;
              axios.put(url, data).then((response) => {
                resolve({
                  data: response.data,
                });
              });
            }, 600);
          }),
      }}
      options={{
        exportButton: true,
        sorting: false,
        search: false,
        paging: false,
      }}
      data={() =>
        new Promise((resolve, reject) => {
          let url = "http://localhost:5000/api/products/all";
          let token = localStorage.getItem("auth-token");
          axios
            .get(url, {
              headers: { "x-auth-token": token },
            })
            .then((response) => {
              // console.log(response);
              resolve({
                data: response.data,
              });
            });
        })
      }
    />
  );
}
