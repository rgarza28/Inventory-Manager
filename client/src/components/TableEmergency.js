import React from 'react';
import MaterialTable from 'material-table';

function TableEmergency() {
   const { useState } = React;

   const [columns, setColumns] = useState([
      { title: 'Image', field: 'image' },
      { title: 'Name', field: 'name' },
      { title: 'SKU', field: 'sku' },
      {
         title: 'Current Inventory',
         field: 'currentInventory',
         type: 'numeric',
         align: 'center',
      },
      {
         title: 'Minimum Inventory',
         field: 'minInventory',
         type: 'numeric',
         align: 'center',
      },
      { title: 'Cost', field: 'cost', type: 'numeric', align: 'center' },
      { title: 'Retail', field: 'retail', type: 'numeric', align: 'center' },
   ]);

   const [data, setData] = useState([
      {
         image:
            'href:{https://res.cloudinary.com/ddcvaynal/image/upload/v1599863477/LEVEL-computers/LenovoC940_sfd5dg.jpg}',
         name: 'Lenovo - Yoga C940',
         sku: '5851234',
         description:
            '2-in-1 14 Touch-Screen Laptop - Intel Core i7 - 12GB Memory - 512GB Solid State Drive - Iron Gray',
         currentInventory: '24',
         minInventory: '10',
         cost: '949.00',
         retail: '1199.99',
      },
      {
         name: 'HP - Spectre x360',
         sku: '4523521',
         description:
            '2-in-1 15.6 4K Ultra HD Touch-Screen Laptop Intel Core i7 16GB Memory GeForce GTX 1650 Ti 1TB SSD - Nightfall Black',
         currentInventory: '16',
         minInventory: '10',
         cost: '1049.00',
         retail: '1249.99',
      },
      {
         name: 'HP - ENVY 17.3',
         sku: '7541252',
         description:
            '17.3 Touch-Screen Laptop - Intel Core i7 - 12GB Memory - 512GB SSD + 32GB Optane – NVIDIA GeForce MX330 - Natural Silver',
         currentInventory: '12',
         minInventory: '10',
         cost: '760.00',
         retail: '899.99',
      },
      {
         name: 'Samsung - Galaxy 13.3',
         sku: '6855214',
         description:
            ' 4K Ultra HD Touch-Screen Chromebook - Intel Core i5 - 8GB Memory - 256GB SSD - Fiesta Red',
         currentInventory: '11',
         minInventory: '10',
         cost: '649.00',
         retail: '799.99',
      },
      {
         name: 'ASUS - 15.6 Touch-Screen Laptop',
         sku: '3521147',
         description:
            'Intel Core i7 - 16GB Memory - 1TB Hard Drive + 128GB Solid State Drive - Gun Gray',
         currentInventory: '18',
         minInventory: '10',
         cost: '751.00',
         retail: '879.99',
      },
      {
         name: 'LG Ultra PC 17 inch Laptop',
         sku: '9852214',
         description:
            'Intel Core i5 - 16GB Memory - NVIDIA GeForce GTX 1650 - 512GB SSD - Dark Silver',
         currentInventory: '14',
         minInventory: '10',
         cost: '829.00',
         retail: '1099.99',
      },
      {
         name: 'Dell Inspiron 13 7000',
         sku: '9523374',
         description:
            '2-in-1 - 13.3 4K Ultra HD Touch-Screen Laptop - Intel Core i7 - 16GB Memory - 512GB SSD + 32GB Optane - black',
         currentInventory: '24',
         minInventory: '10',
         cost: '840.00',
         retail: '999.00',
      },
      {
         name: 'Microsoft Surface Laptop 3',
         sku: '5846632',
         description:
            '13.5 Touch-Screen - Intel Core i5 - 8GB Memory - 256GB Solid State Drive (Latest Model) - Matte Black',
         currentInventory: '18',
         minInventory: '10',
         cost: '790.00',
         retail: '929.00',
      },
      {
         name: 'Apple - MacBook Pro',
         sku: '9742251',
         description:
            ' 16 Display with Touch Bar - Intel Core i7 - 16GB Memory - AMD Radeon Pro 5300M - 512GB SSD (Latest Model) - Space Gray',
         currentInventory: '20',
         minInventory: '10',
         cost: '1699.00',
         retail: '1899.00',
      },
      {
         name: 'Acer - Nitro 5',
         sku: '9245574',
         description:
            '15.6 Laptop - AMD Ryzen 5 - 8GB Memory - NVIDIA GeForce GTX 1650 - 256GB SSD - Obsidian Black',
         currentInventory: '22',
         minInventory: '10',
         cost: '840.00',
         retail: '979.00',
      },
      {
         name: 'MSI GL65 Leopard',
         sku: '9845524',
         description:
            'Intel Core i7-10750H Processor 2.6GHz; NVIDIA GeForce GTX1660Ti 6GB GDDR6; 16GB DDR4-2666 RAM; 1TB Solid State Drive',
         currentInventory: '21',
         minInventory: '10',
         cost: '1099.00',
         retail: '1299.00',
      },
      {
         name: 'Gigabyte AORUS 15G',
         sku: '5874452',
         description:
            'Intel Core i7-10875H Processor 2.3GHz; NVIDIA GeForce RTX 2070 Super Max; 16GB DDR4-3200 RAM; 1TB Solid State Drive',
         currentInventory: '18',
         minInventory: '10',
         cost: '1099.00',
         retail: '1199.00',
      },
      {
         name: 'Toshiba Dynabook Tecra A50-F',
         sku: '6852235',
         description:
            'Intel Core i7-8565U Processor 1.8GHz; 8GB RAM; 256GB Solid State Drive; Intel UHD Graphics',
         currentInventory: '22',
         minInventory: '10',
         cost: '899.00',
         retail: '999.00',
      },
      {
         name: 'Razer Blade 15 15.6 Gaming Laptop Computer - Black',
         sku: '7853365',
         description:
            'Intel Core i7-10750H Processor 2.6GHz; NVIDIA GeForce RTX 2070 with Max-Q Design 8GB GDDR6; 16GB DDR4 RAM; 512GB',
         currentInventory: '24',
         minInventory: '10',
         cost: '1699.00',
         retail: '1999.00',
      },
      {
         name: 'Google Pixel Slate 12.3 Tablet Midnight Blue',
         sku: '4586624',
         description:
            'Intel Core i7 Processor 16GB Onboard RAM; 256GB Solid State Drive; Intel HD Graphics',
         currentInventory: '12',
         minInventory: '10',
         cost: '650.00',
         retail: '799.00',
      },
   ]);

   return (
      <MaterialTable
         title="Inventory"
         columns={columns}
         data={data}
         editable={{
            onRowAdd: (newData) =>
               new Promise((resolve, reject) => {
                  setTimeout(() => {
                     setData([...data, newData]);

                     resolve();
                  }, 1000);
               }),
            onRowUpdate: (newData, oldData) =>
               new Promise((resolve, reject) => {
                  setTimeout(() => {
                     const dataUpdate = [...data];
                     const index = oldData.tableData.id;
                     dataUpdate[index] = newData;
                     setData([...dataUpdate]);

                     resolve();
                  }, 1000);
               }),
            onRowDelete: (oldData) =>
               new Promise((resolve, reject) => {
                  setTimeout(() => {
                     const dataDelete = [...data];
                     const index = oldData.tableData.id;
                     dataDelete.splice(index, 1);
                     setData([...dataDelete]);

                     resolve();
                  }, 1000);
               }),
         }}
      />
   );
}

export default TableEmergency;
