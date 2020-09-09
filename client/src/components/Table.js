import React, { useState } from "react";
import MaterialTable from "material-table";

export default function MaterialTableDemo() {
  const [state, setState] = useState({
    columns: [
      { title: "Part Number", field: "sku" },
      // { title: "Product Image", field: "productimage", type: "image" },
      { title: "Product Name", field: "productName" },
      {
        title: "Current Inventory Level",
        field: "currentInventory",
        type: "numeric",
      },
      {
        title: "Minumum Inventory Level",
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
      {
        title: "Product Category",
        field: "productcategory",
        lookup: {
          1: "Laptop",
          2: "Desktop",
          3: "Tablet",
          4: "Phone",
          5: "Television",
        },
      },
    ],
    data: [
      // {
      //   sku: "",
      //   productName: "",
      //   description: "",
      //   currentInventory: "10",
      //   minInventory: 1,
      //   cost: 1,
      //   retail: 150,
      // },
    ],
  });

  let [sku, setSku] = useState();
  let [productName, setProductName] = useState();
  let [description, setDescription] = useState();
  let [currentInventory, setcurrentInventory] = useState();
  let [minInventory, setMinInventory] = useState();
  let [cost, setCost] = useState();
  let [retail, setRetail] = useState();

  // let productNameValue = state.data.productName;

  return (
    <MaterialTable
      title="Current Inventory Status"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);

                sku = newData.sku;
                productName = newData.productName;
                description = newData.description;
                currentInventory = newData.currentInventory;
                minInventory = newData.minInventory;
                cost = newData.cost;
                retail = newData.retail;

                // setProductName(productNameValue);
                console.log(productName);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
