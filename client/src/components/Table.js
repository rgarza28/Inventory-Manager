import React from "react";
import MaterialTable from "material-table";

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: "Part Number", field: "partnumber" },
      { title: "Product Image", field: "productimage", type: "image" },
      { title: "Product Name", field: "productname" },
      {
        title: "Current Inventory Level",
        field: "currentinvlevel",
        type: "numeric",
      },
      {
        title: "Minumum Inventory Level",
        field: "mininvlevel",
        type: "numeric",
      },
      {
        title: "Cost ($)",
        field: "cost",
        type: "numeric",
      },
      {
        title: "Retail Price ($)",
        field: "retailprice",
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
      {
        partnumber: "822-1000",
        productimage: "",
        productname: "Dell Chromebook 3100",
        currentinvlevel: "10",
        mininvlevel: 5,
        productcategory: 1,
        cost: 150,
        retailprice: 250,
      },
      {
        partnumber: "822-1001",
        productimage: "",
        productname: "Dell Chromebook 3120",
        currentinvlevel: "6",
        mininvlevel: 3,
        productcategory: 1,
        cost: 150,
        retailprice: 300,
      },
    ],
  });

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
