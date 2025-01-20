const uuid = require('uuid')
const path = require('path')
const { Product, ProductDetails } = require('../models/models')
const ApiError = require('../error/ApiError')

class ProductController {
	async create(req, res) {
		try {
			const { name, price, brandId, typeId, info } = req.body
			const { image_url } = req.files
			let fileName = uuid.v4() + '.jpg'
			image_url.mv(path.resolve(__dirname, '..', 'static', fileName))

			const product = await Product.create({
				name,
				price,
				brandId,
				typeId,
				image_url: fileName,
			})

			if (info) {
				info = JSON.parse(info)
				info.forEach(element => {
					ProductDetails.create({
						name: element.title,
						description: element.description,
						productId: product.id,
					})
				})
			}

			return res.json(product)
		} catch (e) {
			next(ApiError.badRequest(e.message))
		}
	}

	async getAll(req, res) {
		let { brandId, typeId, limit, page } = req.query
		page = page || 1
		limit = limit || 9
		let offset = page * limit - limit
		let products
		if (!brandId && !typeId) {
			products = await Product.findAndCountAll({ limit, offset })
		}
		if (brandId && !typeId) {
			products = await Product.findAndCountAll({
				where: { brandId },
				limit,
				offset,
			})
		}
		if (!brandId && typeId) {
			products = await Product.findAndCountAll({
				where: { typeId },
				limit,
				offset,
			})
		}
		if (brandId && typeId) {
			products = await Product.findAndCountAll({
				where: { typeId, brandId },
				limit,
				offset,
			})
		}
		return res.json(products)
	}

	async getOne(req, res) {
		const { id } = req.params
		const product = await Product.findOne({
			where: { id },
			include: [{model: ProductDetails, as: 'info'}]
		})
		return res.json(product)
	}
}

module.exports = new ProductController()
