import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { Routes } from '../../constants'
import TraderBlogs from './Blogs'
import MyStocks from './MyStock'
import Referral from './Referral'
import SubscriptionStatus from './SubscriptionStatus'

const TraderPage = () => {
	return (
		<div className='trader-page'>
			<Switch>
				<Route exact path={Routes.TRADER_BLOGS} component={TraderBlogs} />
				<Route exact path={Routes.TRADER_MY_STOCKS} component={MyStocks} />
				<Route exact path={Routes.TRADER_REFERRAL} component={Referral} />
				<Route exact path={Routes.TRADER_SUBSCRIPTION_STATUS} component={SubscriptionStatus} />
				<Redirect from={Routes.TRADER} to={Routes.TRADER_BLOGS} />
			</Switch>
		</div>
	)
}

export default TraderPage
