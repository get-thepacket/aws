'use strict';
const AWS = require('aws-sdk');

module.exports.main = async (event,context) => {
  const client = new AWS.DynamoDB.DocumentClient();
  // console.log(event);
  const data = event;
  // console.log(data);
  const params = {
    TableName: 'notes',
    Item:{
      userid: "452",
      noteid: data.noteid,
      content: data.content,
      attachment: data.attachment,
      createdAt: Date.now()
    }
  }

  await client.put(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: params.Item,
        input: event,
      },
      null,
      2
    ),
  };
};
