const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({
  region: 'us-east-1',
  apiVersion: '2012-08-10'
});

exports.handler = async event => {
  const params = {
    Item: {
      UserId: {
        S: 'user_' + Math.random()
      },
      Age: {
        N: event.age
      },
      FirstName: {
        S: event.firstName
      }
    },
    TableName: 'battle-team'
  };

  let promise = new Promise((res, rej) => {
    dynamodb.putItem(params, function(err, data) {
      if (err) {
        console.log(err);
        rej(err);
      } else {
        console.log(data);
        res(data);
      }
    });
  });

  const response = await promise;
  return response;
};
