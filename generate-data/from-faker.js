var faker = require('faker')

module.exports = () => {
	const data = {users: [] }
	for (let i=0; i< 20; i++) {
		data.users.push({ id: i, name: faker.name.findName(), email: faker.internet.email(), card: faker.helpers.createCard()})
	}
	return data
}