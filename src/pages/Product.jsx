import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Table from '../components/Table'
function Product() {
	const header = ["name", "unitPrice", "unitsInStock", "quantityPerUnit"]
	const [data, setData] = useState([]);

	useEffect(() => {
		// Make an API request when the component mounts
		axios.get('https://northwind.vercel.app/api/products')
		  .then(response => {
				setData(response.data); // Update the data state with the fetched data
		  })
		  .catch(error => {
				console.error('Error fetching data:', error);
		  });
	  }, []);

  return (
    <>
      <Table header={header} data={data}/>
    </>
  )
}

export default Product