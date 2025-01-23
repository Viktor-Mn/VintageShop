import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import bigStar from '../assets/bigStar.png'
import { useParams } from 'react-router-dom'

const ProductPage = () => {
	const product = {
		id: 1,
		name: 'Iphone 12 Pro',
		price: 25000,
		rating: 5,
		img: `https://www.ispot.com.ua/image/cache/catalog/import_files/87/87c5b5a8c76c11eb97902c4d5459a249_d0c58982c79111eb97902c4d5459a249-700x700.jpg`,
	}

    const description = [
        {id:1, title: 'Оперативная память', description: '5 г6'},
        {id:2, title: 'Камера', description: '12 мп'},
        {id:3, title: 'Процессор', description: 'Пентиум 3'},
        {id:4, title: 'Кол-во ядер', description: '2'},
        {id:5, title: 'Аккумулятоp', description: '4888'},
    ]

	return (
		<Container className='mt-3'>
			<Row>
				<Col md={4}>
					<Image
						width={300}
						height={300}
						src={process.env.REACT_APP_API_URL + product.img}
					/>
				</Col>
				<Col md={4}>
					<Row className='d-flex flex-column align-items-center'>
						<h2>{product.name}</h2>
						<div
							className='d-flex align-items-center justify-content-center'
							style={{
								background: `url(${bigStar}) no-repeat center center`,
								width: 240,
								height: 240,
								backgroundSize: 'cover',
								fontSize: 64,
							}}
						>
							{product.rating}
						</div>
					</Row>
				</Col>
				<Col md={4}>
					<Card
						className='d-flex flex-column align-items-center justify-content-around'
						style={{
							width: 300,
							height: 300,
							fontSize: 32,
							border: '5px solid lightgray',
						}}
					>
						<h3>Від: {product.price} грн.</h3>
						<Button variant={'outline-dark'}>Додати в кошик</Button>
					</Card>
				</Col>
			</Row>
			<Row className='d-flex flex-column m-3'>
				<h1>Опис товару:</h1>
				{description.map((info, index) => (
					<Row
						key={info.id}
						style={{
							background: index % 2 === 0 ? 'lightgray' : 'transparent',
							padding: 10,
						}}
					>
						{info.title}: {info.description}
					</Row>
				))}
			</Row>
		</Container>
	)
}

export default ProductPage
