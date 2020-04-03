// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response

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
  try {
    // const ret = await axios(url);
    response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        catchphrases: [
          'https://www.rd.com/wp-content/uploads/2017/10/this-is-why-there-are-13-in-a-baker-s-dozen_179437478_stevemart-1024x683.jpg',
          'https://thumbs.dreamstime.com/z/as-dead-as-dodo-1489991.jpg',
          'https://media.photoblog.com/photos5/96736-1237849384-5-l.jpg',
          'https://www.heinzmarketing.com/wp-content/uploads/2017/08/A-watched-pot-never-boils.jpg',
          'https://www.iaexperiment.com/wp-content/uploads/2016/08/Foot-in-the-door-02.png',
          'https://100-pics.net/images/answers/en/whatphrase/whatphrase_32729_168456.gif',
          'https://americancultureconsultants.com/wp-content/uploads/2017/08/bird-hand-cartoon-1080x675.jpg',
          'https://13degreez.files.wordpress.com/2012/12/rock-and-a-hard-place-resized-600.png',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf-I9aLHTLOMuHF9ZNd08K8wTRDNDTy969ktAx8s4deh26bCHMSA',
          'https://cdn2.vectorstock.com/i/1000x1000/33/46/saying-raining-cats-and-dogs-cartoon-vector-16803346.jpg',
          'https://i.imgur.com/uGjyeQT.jpg',
          'http://idiomic.com/wp-content/uploads/2016/12/idiomic_pickle_600.jpg',
          'https://f4.bcbits.com/img/a3782539710_10.jpg',
          'https://keystoneelderlaw.com/wp-content/uploads/2018/03/nest-egg.jpg'
        ]
        // location: ret.data.trim()
      })
    }
  } catch (err) {
    console.log(err)
    return err
  }

  return response
}

exports.getHandler = async (event, context) => {
  try {
    // const ret = await axios(url);
    response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        catchphrases: [
          'https://www.rd.com/wp-content/uploads/2017/10/this-is-why-there-are-13-in-a-baker-s-dozen_179437478_stevemart-1024x683.jpg',
          'https://thumbs.dreamstime.com/z/as-dead-as-dodo-1489991.jpg',
          'https://media.photoblog.com/photos5/96736-1237849384-5-l.jpg',
          'https://www.heinzmarketing.com/wp-content/uploads/2017/08/A-watched-pot-never-boils.jpg',
          'https://www.iaexperiment.com/wp-content/uploads/2016/08/Foot-in-the-door-02.png',
          'https://100-pics.net/images/answers/en/whatphrase/whatphrase_32729_168456.gif',
          'https://americancultureconsultants.com/wp-content/uploads/2017/08/bird-hand-cartoon-1080x675.jpg',
          'https://13degreez.files.wordpress.com/2012/12/rock-and-a-hard-place-resized-600.png',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf-I9aLHTLOMuHF9ZNd08K8wTRDNDTy969ktAx8s4deh26bCHMSA',
          'https://cdn2.vectorstock.com/i/1000x1000/33/46/saying-raining-cats-and-dogs-cartoon-vector-16803346.jpg',
          'https://i.imgur.com/uGjyeQT.jpg',
          'http://idiomic.com/wp-content/uploads/2016/12/idiomic_pickle_600.jpg',
          'https://f4.bcbits.com/img/a3782539710_10.jpg',
          'https://keystoneelderlaw.com/wp-content/uploads/2018/03/nest-egg.jpg'
        ]
        // location: ret.data.trim()
      })
    }
  } catch (err) {
    console.log(err)
    return err
  }

  return response
}

exports.postHandler = async (event, context) => {
  try {
    // const ret = await axios(url);
    response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        catchphrases: [
          'https://www.rd.com/wp-content/uploads/2017/10/this-is-why-there-are-13-in-a-baker-s-dozen_179437478_stevemart-1024x683.jpg',
          'https://thumbs.dreamstime.com/z/as-dead-as-dodo-1489991.jpg',
          'https://media.photoblog.com/photos5/96736-1237849384-5-l.jpg',
          'https://www.heinzmarketing.com/wp-content/uploads/2017/08/A-watched-pot-never-boils.jpg',
          'https://www.iaexperiment.com/wp-content/uploads/2016/08/Foot-in-the-door-02.png',
          'https://100-pics.net/images/answers/en/whatphrase/whatphrase_32729_168456.gif',
          'https://americancultureconsultants.com/wp-content/uploads/2017/08/bird-hand-cartoon-1080x675.jpg',
          'https://13degreez.files.wordpress.com/2012/12/rock-and-a-hard-place-resized-600.png',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf-I9aLHTLOMuHF9ZNd08K8wTRDNDTy969ktAx8s4deh26bCHMSA',
          'https://cdn2.vectorstock.com/i/1000x1000/33/46/saying-raining-cats-and-dogs-cartoon-vector-16803346.jpg',
          'https://i.imgur.com/uGjyeQT.jpg',
          'http://idiomic.com/wp-content/uploads/2016/12/idiomic_pickle_600.jpg',
          'https://f4.bcbits.com/img/a3782539710_10.jpg',
          'https://keystoneelderlaw.com/wp-content/uploads/2018/03/nest-egg.jpg'
        ]
        // location: ret.data.trim()
      })
    }
  } catch (err) {
    console.log(err)
    return err
  }

  return response
}
