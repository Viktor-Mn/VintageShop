import React, { useContext } from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { Context } from '..'
import { NavLink } from 'react-router-dom'
import { SHOP_ROUTE } from '../utils/consts'
import { observer } from 'mobx-react-lite'

const NavBar = observer(() => {
	const { user } = useContext(Context)

	return (
		<Navbar bg='dark' variant='dark'>
			<Container>
				<NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>
					КупуйДевайс
				</NavLink>
				{user.isAuth ? (
					<Nav className='ml-auto' style={{ color: 'white' }}>
						<Button variant={'outline-light'}>Амін панель</Button>
						<Button variant={'outline-light'} className='ml-4'>
							Увійти
						</Button>
					</Nav>
				) : (
					<Nav className='ml-auto' style={{ color: 'white' }}>
						<Button
							variant={'outline-light'}
							onClick={() => user.setIsAuth(true)}
						>
							Авторизація
						</Button>
					</Nav>
				)}
			</Container>
		</Navbar>
	)
})

export default NavBar
