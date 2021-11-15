import React from 'react'
import { Route, Switch } from 'react-router'
import AddStock from './AddStock'
import AdminBlog from './AdminBlog'
import AdminDashboard from './AdminDashboard'
import AdminReferral from './AdminReferral'
import AdminSearchResult from './AdminSearchResult'
import AdminTraders from './Traders'

const AdminPage = () => {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={AdminDashboard} />
				<Route exact path="/referral" component={ AdminReferral } />
				<Route exact path="/blog" component={ AdminBlog } />
				<Route exact path="/traders" component={ AdminTraders } />
				<Route exact path="/add-stock" component={ AddStock } />
				<Route exact path="/search" component={ AdminSearchResult } />
			</Switch>
		</div>
	)
}

export default AdminPage
