// Load the SDK for JavaScript
import AWS from 'aws-sdk';
// Set the Region 
AWS.config.update({region: 'eu-west-1'})

var dynamodb = new AWS.DynamoDB()

var name = 'danny bogus'


function addItem () {
    // custoname = custoname || 'generic bob'
    var params = {
        TableName: 'giphy-guess',
        Item: {
            'id': {S: 'jezza k'},
            'NAME': {S: 'jezza k'}
        }
    }
    
    dynamodb.putItem(params, function(err, data) {
        if(err) {
            console.log('Error Occurred Idiot: ', err)
        } else {
            console.log('Successfully Added Following Item to DDB: ', data)
            
        }
    })
}

exports.lambdaHandler = async (event, context) => {
    try {
        // const ret = await axios(url);
        response = {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*'
            },
            'body': JSON.stringify({
                addItem()
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
