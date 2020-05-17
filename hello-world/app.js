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

const TABLE_NAME = 'catchphrase-api-stack-DataStoreTable-1FSDCDRWXZYFZ'

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
      catchphrases: scan
    })
  }
}

exports.postHandler = async (event) => {
  console.log('THIS IS THE REQUEST ITEM*****', event)
  
  const data = JSON.parse(event.body)
  console.log('THIS IS THE DATA*****', data)
  const guid = uuid()
  data.id = guid
  
  const params = {
    TableName: TABLE_NAME,
    Item: data
  }
  
  console.log('THIS IS THE PARAMS *****', params)

  // var responseCode = 200
  await dynamo.put(params).promise()

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      catchphrases: data
    })
  }
}


exports.deleteHandler = async (item) => {
  const data = JSON.parse(item.body)
  console.log('THIS IS THE DATA*****', data)

  const params = {
    TableName: TABLE_NAME,
    Key: data.id
  }

  console.log('THIS IS THE REQUEST ITEM*****', item)
  console.log('THIS IS THE PARAMS *****', params)

  await dynamo.delete(params).promise()

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      catchphrases: data
    })
  }
}
