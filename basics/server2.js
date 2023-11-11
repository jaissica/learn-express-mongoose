const express = require('express');
const app = express();
const port = 3001;

app.listen(port, () => {
  console.log(`app listening on ${port}`);
});

// first one to exexute
app.use(express.json());

// second one to exexute
// it ends here as there is no next
app.use((req, res, next) => {
  console.log(req.body);
  next();
});



app.use(function (req, res, next) {
  console.log('hello');
  next(new NotFoundError());
});

app.use(function(err, req, res, next) {
  const status = err.status || 500;
  const message = err.message;
  next();
  // return res.status(status).json({
  //   error: {message, status}
  // });
});

app.get('/', (req, res) => {
  return res.send({ping: 'pong'});
});
