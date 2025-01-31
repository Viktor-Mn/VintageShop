import React, { useContext } from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { Context } from '..'
import { NavLink } from 'react-router-dom'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'

const NavBar = observer(() => {
	const { user } = useContext(Context)
	const navigate = useNavigate()

	const logOut = () => {
		localStorage.removeItem('token')
		user.setUser({})
		user.setIsAuth(false)
		navigate(SHOP_ROUTE)
	}

	return (
		<Navbar bg='dark' variant='dark'>
			<Container>
				<NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>
					КупуйДевайс
				</NavLink>
				{user.isAuth ? (
					<Nav className='ml-auto' style={{ color: 'white' }}>
						<Button
							variant={'outline-light'}
							onClick={() => navigate(ADMIN_ROUTE)}
						>
							Адмін панель
						</Button>
						<Button
							variant={'outline-light'}
							className='ml-4'
							onClick={() => logOut()}
						>
							Вийти
						</Button>
					</Nav>
				) : (
					<Nav className='ml-auto' style={{ color: 'white' }}>
						<Button variant={'outline-light'} onClick={() => navigate(LOGIN_ROUTE)}>
							Авторизація
						</Button>
					</Nav>
				)}
			</Container>
		</Navbar>
	)
})

export default NavBar
