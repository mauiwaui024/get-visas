const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors'); // Import the cors middleware
const { createDeal } = require('./leads'); 
const { client } = require('./index'); // Import the client object from index.js

const app = express();
const port = 3001; 

app.use(bodyParser.json());
app.use(cors());
app.post('/api/createDeal', async (req, res) => {
  try {
    const formData = req.body;
    if (client.token.isExpired()) {
      console.log(`Обновили токен ${port}`);
      await client.token.refresh();
    }

    await createDeal(formData);
    // Отправка ответа клиенту
    res.json({ success: true, message: 'Сделка успешно создана' });
  } catch (error) {
    console.error('Ошибка:', error);
    res.status(500).json({ success: false, message: 'Ошибка сервера' });
  }
});



app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});