const layer = require('/opt/example.js')
exports.handler =  async function(event, context) {

    let result = layer.example();
    console.log("example2 called")
    console.log("EVENT: \n" + JSON.stringify(event, null, 2))
    console.log(JSON.stringify(result));
    return {
      "isBase64Encoded": false,
      "statusCode": 200,
      "headers": {},
      "body": JSON.stringify(result)
    }
  }