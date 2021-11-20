import React from 'react'
import { Link } from 'react-router-dom'
import { Routes } from '../../constants'

// TODO: add style this page make good user experience
const SignUpSuccess = () => {
	return (
		<div>
			<div className="message">
				Account Created Successfully.
			</div>
			<Link to={Routes.LOGIN}>
				Login here
			</Link>
		</div>
	)
}

export default SignUpSuccess
