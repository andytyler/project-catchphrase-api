var AWS = require('aws-sdk') // Load the SDK for JavaScript
AWS.config.update({ region: 'eu-west-1' }) // Set the Region

var response
var dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' }).DocumentClient()

const dummyData = {
  TableName: 'catchphrase-catchphrase-stack-GGDynamoTemplateSimpleTable-1UDOH9A0BQ4DU',
  Item: {
    NAME: { S: 'Tropical Banana' }
  }
}

exports.handler = (event, context) => {
  try {
    dynamodb.put(dummyData.Item, function (err, data) {
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
