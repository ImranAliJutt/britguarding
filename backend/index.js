const express = require('express');
const app = express();

app.get('/api/test', (req, res) => {
  res.send({ message: 'API is working!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
