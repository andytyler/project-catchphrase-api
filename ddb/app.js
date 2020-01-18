var AWS = require('aws-sdk'); // Load the SDK for JavaScript
AWS.config.update({region: 'eu-west-1'}) // Set the Region 

var response;
var message;
var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'})

exports.lambdaHandler = async (event, context) => {
    try {
        console.log('got into the lamb');
        let params = {
            TableName: 'catchphrase-catchphrase-stack-GGDynamoTemplateSimpleTable-1UDOH9A0BQ4DU',
            Item: {
                'id': {S: 'jezzza k'},
                'NAME': {S: 'jezza k'}
            }
        }
        console.log('params = ' ,params);
        
        await dynamodb.putItem(params, function(err, data) {
            if(err) {
                message = 'Error Occurred Idiot: ' + err
            } else {
                message = 'Successfully Added Following Item to DDB: ' + data
                
            }
            console.log('MESSAGE', message)
        })

        // const ret = await axios(url);
        response = {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*'
            },
            'body': JSON.stringify(
                {status: "success & complete & " + message}
            )
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
