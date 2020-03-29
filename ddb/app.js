var AWS = require('aws-sdk') // Load the SDK for JavaScript
AWS.config.update({ region: 'eu-west-1' }) // Set the Region

var response
var message
var dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' })

exports.lambdaHandler = (event, context) => {
  try {
    console.log('got into the lamb')
    consts params = {
      TableName: 'catchphrase-catchphrase-stack-GGDynamoTemplateSimpleTable-1UDOH9A0BQ4DU',
      Item: {
        id: { S: '12873647iuheg728vd6s2vd3673v' },
        NAME: { S: 'jezza k4' }
      }
    }
    console.log('params = ', params)

    dynamodb.putItem(params, function (err, data) {
      if (err) {
        console.log('Error Occurred Idiot: ', err)
      } else {
        console.log('Successfully Added Following Item to DDB: ', data)
      }
    })

    // const ret = await axios(url);
    response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(
        { status: 'success & complete' }
      )
    }
  } catch (err) {
    console.log(err)
    return err
  }

  return response
}
