const Message = require('../models/message');

exports.createMessage = async (req, res) => {
    const newMessage = new Message(req.body);
    try {
        const savedMessage = await newMessage.save();
        res.status(201).json(savedMessage);
    } catch(err) {
        res.status(500).json(err);
    }
}

exports.getAllMessages = async (req, res) => {
    try {
        const messages = await Message.find().sort({createdAt: -1});
        res.status(200).json(messages);
    } catch(err) {
        res.status(500).json(err);
    }
}
