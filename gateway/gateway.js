const Gateway = require('micromq/gateway');
const port = 3000

const app = new Gateway({
  microservices: ['user_app','lesson_app'],
  rabbit: {
    url: 'amqp://rabbitmq:5672',
  },
});

app.get(['/getUsers'], async (req, res) => {
  await res.delegate('user_app');
});

app.get(['/getLessons'], async (req, res) => {
  await res.delegate('lesson_app');
});

app.listen(port);