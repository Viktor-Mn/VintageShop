import { makeAutoObservable } from 'mobx'

export default class ProductStore {
	constructor() {
		this._types = [
			{ id: 1, name: 'Холодильники' },
			{ id: 2, name: 'Смартфоны' },
		]
		this._brands = [
			{ id: 1, name: 'Samsung' },
			{ id: 2, name: 'Apple' },
		]
		this._products = [
			{
				id: 1,
				name: 'Iphone 12 Pro',
				price: 25000,
				rating: 5,
				img: `https://www.ispot.com.ua/image/cache/catalog/import_files/87/87c5b5a8c76c11eb97902c4d5459a249_d0c58982c79111eb97902c4d5459a249-700x700.jpg`,
			},
			{
				id: 2,
				name: 'Iphone 12 Pro',
				price: 25000,
				rating: 5,
				img: `https://www.ispot.com.ua/image/cache/catalog/import_files/87/87c5b5a8c76c11eb97902c4d5459a249_d0c58982c79111eb97902c4d5459a249-700x700.jpg`,
			},
			{
				id: 3,
				name: 'Iphone 12 Pro',
				price: 25000,
				rating: 5,
				img: `https://www.ispot.com.ua/image/cache/catalog/import_files/87/87c5b5a8c76c11eb97902c4d5459a249_d0c58982c79111eb97902c4d5459a249-700x700.jpg`,
			},
			{
				id: 4,
				name: 'Iphone 12 Pro',
				price: 25000,
				rating: 5,
				img: `https://www.ispot.com.ua/image/cache/catalog/import_files/87/87c5b5a8c76c11eb97902c4d5459a249_d0c58982c79111eb97902c4d5459a249-700x700.jpg`,
			},
			{
				id: 5,
				name: 'Iphone 12 Pro',
				price: 25000,
				rating: 5,
				img: `https://www.ispot.com.ua/image/cache/catalog/import_files/87/87c5b5a8c76c11eb97902c4d5459a249_d0c58982c79111eb97902c4d5459a249-700x700.jpg`,
			},
		]
		makeAutoObservable(this)
	}

	setTypes(types) {
		this._types = types
	}
	setBrands(brands) {
		this._brands = brands
	}
	setProduct(products) {
		this._products = products
	}

	get types() {
		return this._types
	}

	get brands() {
		return this._brands
	}

	get products() {
		return this._products
	}
}
