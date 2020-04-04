// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

exports.getHandler = async (event, context) => {
  const params = {
    TableName: 'catchphrase-catchphrase-stack-DataStoreTable-DBCHTQBXRJTW'
  }
  const data = await dynamo.scan(params).promise()
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: data
  }
}

// set up db access
var AWS = require('aws-sdk') // Load the SDK for JavaScript
AWS.config.update({ region: 'eu-west-1' }) // Set the Region
const dynamo = new AWS.DynamoDB.DocumentClient({ region: 'eu-west-1' })
console.log('set up and declared the db interaction')

exports.postHandler = async (item) => {
  const params = {
    TableName: 'catchphrase-catchphrase-stack-DataStoreTable-DBCHTQBXRJTW',
    Item: JSON.parse(item.body)
  }
  console.log(item)
  return dynamo.put(params).promise()
}

// exports.postHandler = async (event, context) => {
//   console.log('inside the correct handler')
//   try {
//     var item = { id: 'xyz', info: 'something' } // event.item ||
//     var params = {
//       TableName: 'catchphrase-catchphrase-stack-DataStoreTable-DBCHTQBXRJTW',
//       Item: item
//     }
//     console.log('about to do post')

//     dynamo.put(params).promise()

//     return {
//       statusCode: 200,
//       headers: {
//         'Access-Control-Allow-Origin': '*'
//       },
//       body: JSON.stringify({
//         message: 'Sussessfully made post'
//         // location: ret.data.trim()
//       })
//     }
//   } catch (err) {
//     console.log(err)
//     return err
//   }
// }
