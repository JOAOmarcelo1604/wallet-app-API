const usersQueries = {
    findByEmail: (email) => {
        return {
            name: "fetch-user",
            text: "SELECT * FROM categories WHERE id = $1",
            values: [email],
        }
    }
}

module.exports = usersQueries;