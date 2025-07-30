const express = require('express');
const mongoose = require('mongoose');
const { OBSWebSocket } = require('obs-websocket-js');
const User = require('./user');
const app = express();

require('dotenv').config();

const port = 30001;

app.use(express.json());

mongoose.connect(process.env.DB_URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

const obs = new OBSWebSocket();

(async () => {
    try {
        const {
            obsWebSocketVersion,
            negotiatedRpcVersion
        } = await obs.connect('https://447a-2a09-bac1-7ae0-10-00-3c2-3e.ngrok-free.app', '2tdsOhb4ifbl3nhL', {
            rpcVersion: 1
            // ngrok use to connect obs
        });
        console.log(`Connected to server ${obsWebSocketVersion} (using RPC ${negotiatedRpcVersion})`)
    } catch (error) {
        console.error('Failed to connect', error.code, error.message);
    }
})();

app.post('/gift', async (req, res) => {
    // Xử lý sự kiện từ Owncast
    const { type, eventData } = req.body;

    const user = await User.find();
    console.log(user);

    if (type === 'CHAT') {
        const message = eventData.rawBody;
        console.log(`Tin nhắn nhận được: ${message}`);
        if (message.startsWith('/gift ')) {
            const [_, giftMessage] = message.split(' ');
            console.log(`Tặng quà: ${giftMessage}`);
            /* Request to update title. */
            obs.call('SetInputSettings', {
                'inputName': 'Example Title',
                'inputSettings': {
                    'text': giftMessage
                }
            }, (err, data) => {
                /* Error message and data. */
                console.log('Using call SetInputSettings:', err, data);
            });
        }
    }

    res.status(200).send('OK');
});


app.post('/donate', (req, res) => {
    // Xử lý sự kiện từ Owncast
    const { type, eventData } = req.body;

    if (type === 'CHAT') {
        const message = eventData.rawBody;
        console.log(`Tin nhắn nhận được: ${message}`);
        if (message.startsWith('/donate ')) {
            const [_, giftMessage] = message.split(' ');
            console.log(`Donate: ${giftMessage}`);
        }
    }

    res.status(200).send('OK');
});


app.get("/", async (req, res) => {
    const users = await User.find();
    console.log(users);
    return res.status(200).json({ message: 'ok' });
});

app.listen(port, () => {
    console.log(`port: ${port}`);
})
