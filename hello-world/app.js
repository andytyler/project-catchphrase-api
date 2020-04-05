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

// import { v4 as uuidv4 } from 'uuid'
var uuid = require('uuid/v4')
var AWS = require('aws-sdk') // Load the SDK for JavaScript
AWS.config.update({ region: 'eu-west-1' }) // Set the Region
const dynamo = new AWS.DynamoDB.DocumentClient({ region: 'eu-west-1' })

const TABLE_NAME = 'catchphrase-catchphrase-stack-DataStoreTable-DBCHTQBXRJTW'

exports.getHandler = async (event) => {
  const params = {
    TableName: TABLE_NAME
  }

  const scan = await dynamo.scan(params).promise()
  console.log(scan)

  function onlyURL (element) {
    return element.url
  }
  const data = scan.Items.map(onlyURL)
  const filteredData = data.filter(item => item != null)

  console.log(data)

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      catchphrases: filteredData
    })
  }
}

exports.postHandler = async (item) => {
  const data = JSON.parse(item.body)
  const guid = uuid()
  data.id = guid
  console.log(data)

  const params = {
    TableName: TABLE_NAME,
    Item: data
  }

  console.log(item)
  
  
  dynamo.put(params).promise()

  headers: {
    "x-custom-header" : "my custom header value",
    "Access-Control-Allow-Origin": "my-origin.com"
  },
  return
}
