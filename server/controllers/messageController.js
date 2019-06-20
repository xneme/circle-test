const db = require('../../models/index')

const getMessages = async (req, res) => {
  try {
    const messages = await db.Message.findAll()
    res.status(200).json(messages)
  } catch (e) {
    console.log(e)
    res.status(500).json({ error: 'server went BOOM!' })
  }
}

const createMessage = async (req, res) => {
  const newMessage = await db.Message.create({
    header: 'Important notice!',
    content: req.body.message,
  })
  res.status(200).json(newMessage)
}

module.exports = {
  getMessages,
  createMessage,
}
