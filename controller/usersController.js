


const getAllUsers = (req, res) => {
    res.send("Fetching all the Users")
}

const getAllUsersById = (req, res) => {
    res.send(`Fetching the Users by Id : ${req.params.id}`)
}

const addUsers = (req, res) => {
    res.send("Add a new Users")
}
module.exports = {
    getAllUsers,
    getAllUsersById,
    addUsers
}

