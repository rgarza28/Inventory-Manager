import React, { useState } from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';

export default function MaterialTableDemo() {
   const [state, setState] = useState({
      columns: [
         { title: 'Part Number', field: 'sku' },
         { title: 'Product Name', field: 'productName' },
         {
            title: 'Current Inventory Level',
            field: 'currentInventory',
            type: 'numeric',
         },
         {
            title: 'Minumum Inventory Level',
            field: 'minInventory',
            type: 'numeric',
         },
         {
            title: 'Cost ($)',
            field: 'cost',
            type: 'numeric',
         },
         {
            title: 'Retail Price ($)',
            field: 'retail',
            type: 'numeric',
         },
      ]
   });

   return (
      <MaterialTable
         title="Current Inventory Status"
         columns={state.columns}
         data={state.data}
         style={{ boxShadow: '0 1px 3px #184059' }}
         editable={{
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
         }}
         options={{
            exportButton: true,
            sorting: true
         }}
         data={() =>
            new Promise((resolve, reject) => {
            let url = 'http://localhost:5000/api/products/all';
            let token = localStorage.getItem("auth-token");
              axios.get(url, {
               headers: { "x-auth-token": token },
             })
               .then(response => {
                   resolve({
                      data: response.data
                   });
               })
            })
          }
      />
   );
}
