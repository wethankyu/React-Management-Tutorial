const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
  res.send([
    {
      'id': 1,
      'image': 'https://placeimg.com/64/64/1',
      'name': '김규섭',
      'birthday': '950314',
      'gender': '남자',
      'job': '대학생'
    },
    {
      'id': 2,
      'image': 'https://placeimg.com/64/64/2',
      'name': '이규섭',
      'birthday': '950314',
      'gender': '남자',
      'job': '대학생'
    },
    {
      'id': 3,
      'image': 'https://placeimg.com/64/64/3',
      'name': '박규섭',
      'birthday': '950314',
      'gender': '남자',
      'job': '대학생'
    }
  ]);
})

// app.get('/api/hello', (req, res) => {
//   res.send({ message: 'Hello Express!' });
// });

app.listen(port, () => console.log(`Listneing on port ${port}`));