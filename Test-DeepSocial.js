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
    .send("api_token=1wcq8u2g7lwk8ss")
    .send("url=rasheedadabosschick")// url of the account or username or userid
    .end(function (result) {
        console.log("displays status:",result.status );
        console.log ("displays status:",result.headers);
        console.log("display body:",result.body);
        console.log("ariana report end");
        var savefile = require('fs');
        savefile.writeFile("report.txt", result.body, function(err) {
            if(err) {
                return console.log(err);
            }
        });



    });
//9/19 update

/*
fullName: 'Rasheeda',
  engagements: 44720,
  followers: 5676522,
  audience_credibility: 0.9380940470235117,
  content_persons_statistic:
   { genders: { FEMALE: 0.7218406593406593, MALE: 0.27815934065934067 },
     ages:
      { '13-17': 0.16409935463899486,
        '18-24': 0.3543922457979753,
        '25-34': 0.3737284010435243,
        '35-44': 0.07511939290753412,
        '45-64': 0.032660605611971365 },
     gendersPerAge:
      { '13-17': [Object],
        '18-24': [Object],
        '25-34': [Object],
        '35-44': [Object],
        '45-64': [Object] },
     ethnicity:
      { 'White / Caucasian': 0.1791044776119403,
        Asian: 0.1044776119402985,
        'African American': 0.7164179104477612 } },
  audience_languages:
   { en: 0.9821958456973294,
     es: 0.002967359050445104,
     pt: 0.002637652489284537,
     fa: 0.0023079459281239697,
     ru: 0.0016485328058028356,
     fr: 0.0016485328058028356,
     id: 0.0009891196834817012,
     de: 0.0003297065611605671,
     fo: 0.0003297065611605671,
     ht: 0.0003297065611605671,
     sco: 0.0003297065611605671,
     ca: 0.0003297065611605671,
     sv: 0.0003297065611605671,
     ms: 0.0003297065611605671,
     mt: 0.0003297065611605671,
     war: 0.0003297065611605671,
     it: 0.0003297065611605671,
     iw: 0.0003297065611605671,
     ar: 0.0003297065611605671,
     th: 0.0003297065611605671,
     other: 0.0013188262446422684 },
  audience_brand_affinity:
   { Cars:
      { Bentley: 0.006766553890768487,
        'Mercedes-Benz': 0.005799903334944417,
        Chevrolet: 0.005316578057032383 },
     'Shopping & Retail':
      { Walmart: 0.01014983083615273,
        FashionNova: 0.008216529724504592 },
     'Television & Film':
      { BlackLove: 0.017883035282745288,
        'DC Entertainment': 0.017883035282745288,
        'Walt Disney': 0.015949734171097147,
        Batman: 0.006766553890768487,
        NETFLIX: 0.005316578057032383 },
     'Luxury Apparel':
      { Gucci: 0.025616239729337846,
        Chanel: 0.014499758337361043,
        'Christian Dior': 0.008216529724504592 },
     'Travel, Tourism & Aviation': { Hilton: 0.005799903334944417 },
     'Beauty & Cosmetics':
      { 'Anastasia Beverly Hills': 0.00918318028032866,
        'MAC Cosmetics': 0.00918318028032866,
        Sephora: 0.008216529724504592,
        'Christian Dior': 0.008216529724504592,
        'NYX Professional Makeup': 0.007733204446592557,
        'BH Cosmetics': 0.005799903334944417 },
     'Clothes, Shoes, Handbags & Accessories':
      { 'Forever 21': 0.007249879168680522,
        GAP: 0.007249879168680522,
        Vans: 0.006283228612856452,
        'Michael Kors': 0.005316578057032383 },
     'Jewellery & Watches': { 'Tiffany & Co': 0.007249879168680522 },
     'Friends, Family and Relationships': { 'Walt Disney': 0.015949734171097147 },
     'Coffee, Tea & Beverages': { Starbucks: 0.016916384726921217 },
     'Electronics & Computers':
      { Apple: 0.04881585306911552,
        'Beats By Dre': 0.018849685838569358,
        Amazon: 0.00918318028032866 },
     Activewear:
      { Nike: 0.031899468342194294,
        Adidas: 0.013533107781536975,
        Puma: 0.005316578057032383 },
     'Toys, Children & Baby': { Barbie: 0.019816336394393428 },
     Music:
      { Drake: 0.02609956500724988,
        'Beats By Dre': 0.018849685838569358,
        SoundCloud: 0.01401643305944901,
        MTV: 0.006766553890768487,
        'Spotify Music': 0.006283228612856452 },
     'Beer, Wine & Spirits': { Hennessy: 0.011599806669888834, Ciroc: 0.006766553890768487 },
     'Fashion & Style': { 'Vogue Paris': 0.008216529724504592 },
     'Business & Careers': { Paypal: 0.005799903334944417 },
     Sports: { NBA: 0.01304978250362494 } },
  audience_interests:
   { 'Television & Film': 0.08962264150943396,
     Music: 0.07547169811320754,
     'Restaurants, Food & Grocery': 0.075,
     'Beer, Wine & Spirits': 0.06556603773584906,
     'Electronics & Computers': 0.06415094339622641,
     'Shopping & Retail': 0.05990566037735849,
     'Beauty & Cosmetics': 0.05990566037735849,
     'Luxury Apparel': 0.057547169811320756,
     'Clothes, Shoes, Handbags & Accessories': 0.05471698113207547,
     Activewear: 0.05047169811320755,
     Wedding: 0.045283018867924525,
     Cars: 0.04009433962264151,
     Sports: 0.03349056603773585,
     'Toys, Children & Baby': 0.03349056603773585,
     'Travel, Tourism & Aviation': 0.03160377358490566,
     'Coffee, Tea & Beverages': 0.024056603773584907,
     'Camera & Photography': 0.02358490566037736,
     'Fashion & Style': 0.02122641509433962,
     'Jewellery & Watches': 0.016037735849056604,
     'Fitness & Yoga': 0.016037735849056604,
     Pets: 0.016037735849056604 },
  best_go_live_time: [ 'available on demand' ],
  content_geo_statistic:
   { countries:
      { US: 0.8555066079295154,
        KE: 0.01762114537444934,
        ZA: 0.016740088105726872,
        GB: 0.014096916299559472,
        NG: 0.012334801762114538,
        TT: 0.007048458149779736,
        JM: 0.007048458149779736,
        CA: 0.006167400881057269,
        GH: 0.003524229074889868,
        AG: 0.003524229074889868,
        FR: 0.003524229074889868,
        IL: 0.0026431718061674008,
        AE: 0.0026431718061674008,
        MX: 0.0026431718061674008,
        CO: 0.0026431718061674008,
        ID: 0.0026431718061674008,
        BB: 0.001762114537444934,
        BE: 0.001762114537444934,
        DO: 0.001762114537444934,
        IT: 0.001762114537444934,
        BS: 0.001762114537444934,
        TH: 0.001762114537444934,
        AZ: 0.001762114537444934,
        NL: 0.001762114537444934 },
     states:
      { Georgia: 0.12246696035242291,
        Florida: 0.09515418502202644,
        'New York': 0.08546255506607929,
        Texas: 0.07400881057268723,
        California: 0.06607929515418502,
        Ohio: 0.03171806167400881,
        'North Carolina': 0.030837004405286344,
        Maryland: 0.029955947136563875,
        Illinois: 0.02907488986784141,
        Pennsylvania: 0.027312775330396475,
        Louisiana: 0.02555066079295154,
        Virginia: 0.02290748898678414,
        Michigan: 0.019383259911894272,
        'South Carolina': 0.01762114537444934,
        Tennessee: 0.015859030837004406,
        Nevada: 0.014977973568281937,
        Alabama: 0.014977973568281937,
        'District of Columbia': 0.012334801762114538,
        'New Jersey': 0.012334801762114538,
        Mississippi: 0.01145374449339207,
        Massachusetts: 0.007048458149779736,
        Missouri: 0.007048458149779736,
        Arizona: 0.006167400881057269,
        Minnesota: 0.0052863436123348016,
        Arkansas: 0.004405286343612335,
        Indiana: 0.004405286343612335,
        Colorado: 0.003524229074889868,
        Kentucky: 0.003524229074889868,
        Washington: 0.003524229074889868,
        Wisconsin: 0.003524229074889868,
        Oklahoma: 0.003524229074889868,
        Kansas: 0.001762114537444934,
        Delaware: 0.001762114537444934,
        Oregon: 0.001762114537444934,
        Connecticut: 0.001762114537444934,
        'South Dakota': 0.000881057268722467,
        'West Virginia': 0.000881057268722467,
        Hawaii: 0.000881057268722467 },
     cities:
      [ [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object] ] },
  top_posts:
   { time: 1505859186,
     data:
      [ [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object] ] },
  name: 'rasheedadabosschick' }
ariana report end
 */


