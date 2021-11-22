import React, { useEffect, useState } from 'react'
import { API } from "../../api";
import './Stock.css'
const axios = require('axios');

const Stock = () => {
	const [stocks, setStocks] = useState([]);


	useEffect(() => {
		API.marketSummary()
			.then(res => setStocks(res.data.marketSummaryResponse.result))
	}, [])

	console.log(stocks)
	return (
		<div className='stocks-container'>
			<div className='stocks'>
				{
					stocks.map(stock => <div
						key={stock.shortName}
					>
						<h5 className='fw-light text-primary'>{stock.shortName}</h5>
						<p className='fw-bold text-dark'>{stock.regularMarketPrice.fmt}</p>
						<p className='fw-bold text-danger'>{stock.regularMarketChange.fmt} ({stock.regularMarketChangePercent.fmt}) </p>
					</div>)
				}


			</div>
		</div>
	)
}

export default Stock
