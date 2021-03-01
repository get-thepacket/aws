'use strict';
const AWS = require('aws-sdk');
const uuid = require('uuid');

module.exports.main = async (event,context) => {
  const client = new AWS.DynamoDB.DocumentClient();
  // console.log(event);
  const data = event;
  // console.log(data);
  const params = {
    TableName: 'notes',
    Item:{
      userid: "452",
      noteid: uuid.v4(),
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
