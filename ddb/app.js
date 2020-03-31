var AWS = require('aws-sdk') // Load the SDK for JavaScript
AWS.config.update({ region: 'eu-west-1' }) // Set the Region

var dynamo = new AWS.DynamoDB.DocumentClient()

// const dummyData = {
//   TableName: 'catchphrase-catchphrase-stack-GGDynamoTemplateSimpleTable-1UDOH9A0BQ4DU',
//   Item: {
//     NAME: { S: 'Tropical Banana' }
//   }
// }

exports.handler = function (event, context, callback) {
  console.log('Received event:', JSON.stringify(event, null, 2))

  var operation = event.operation

  if (event.tableName) {
    event.payload.TableName = event.tableName
  }

  switch (operation) {
    case 'create':
      dynamo.put(event.payload, callback)
      break
    case 'read':
      dynamo.get(event.payload, callback)
      break
    case 'update':
      dynamo.update(event.payload, callback)
      break
    case 'delete':
      dynamo.delete(event.payload, callback)
      break
    case 'list':
      dynamo.scan(event.payload, callback)
      break
    case 'echo':
      callback(null, 'Success')
      break
    case 'ping':
      callback(null, 'pong')
      break
    default:
      callback(`Unknown operation: ${operation}`)
  }
}
