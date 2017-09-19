//curl -X GET --include 'https://deepsocialapi.com/v1/Sampling_request?api_token=4z7e6cur1h4w008&url=25025320'
//jay@famepick.com - token : 4z7e6cur1h4w008
var unirest = require('unirest');
var json=require('json-stringify-safe');

// console.log ("test api request \n");
// //Brand Dictionary
// unirest.get("https://deepsocialapi.com/v1/accounts/brands/brands?api_token=4z7e6cur1h4w008")
//     .header("Accept", "application/json")
//     .end(function (result) {
//         console.log(result.status, result.headers, result.body);
//         console.log ("docking successed");
//     });

//
// console.log ("next test search \n");
// sample report
// unirest.get("https://deepsocialapi.com/v1/sampling_request")
//     .header("Content-Type", "application/x-www-form-urlencoded")
//     .header("Accept", "application/json")
//     .send("api_token=4z7e6cur1h4w008")
//     .send("url=instagram")// url of the account
//     .end(function (result) {
//         console.log(result.status, result.headers, result.body);
//         console.log("sample report end");
//     });
//
//
// //

//arianagrande

unirest.get("https://deepsocialapi.com/v1/sampling_request")
    .header("Content-Type", "application/x-www-form-urlencoded")
    .header("Accept", "application/json")
    .send("api_token=4z7e6cur1h4w008")
    .send("url=arianagrande")// url of the account or username or userid
    .end(function (result) {
        console.log("displays status:",result.status );
        console.log ("displays status:",result.headers);
        console.log("display body:",result.body);
        console.log("ariana report end");

    });


/*

 */


