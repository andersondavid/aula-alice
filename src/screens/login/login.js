import React from 'react'
import './login.styles.css'
import { FaChevronRight } from "react-icons/fa";

export default function Login() {
	return (
		<div className='main'>
			<div className='container-foto'>
				<img className='foto' src='https://i.pinimg.com/564x/8c/44/34/8c44347b5f2c71220976e472b83df74b.jpg' alt='' />
			</div>
			<div className='container-btn'>
				<button className='btn'><FaChevronRight /></button>
			</div>
		</div>
	)
}
