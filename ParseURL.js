const request = require('request');

var result = 0;
var page_num = 1;
var total_pages = 0;
function getCountries(s, p) {
        
    var url = "https://jsonmock.hackerrank.com/api/countries/search?name=" + s+"&page="+page_num;
     
//console.log(url)
   //var req =  https.get(url, (res) => {
return new Promise((resolve, reject) => {
   request (url,function (error,response,body){

        if (error) reject(error);
        let dat = body;

       // res.on('data', (chunk) => {

           // dat += chunk;
    
            let resp = JSON.parse(dat);
            let data = resp.data;
            total_pages = resp.total_pages;
            //console.log(data.length, total_pages)
            if(data.length>0 && page_num<=total_pages){
                let data = resp.data;
                
                for (let res of data) {
                    if (res.population >= p)
                        result++;
                }
                
                page_num ++;
                 resolve(getCountries(s,p));
                //return result;
            }
            else{
                //console.log("result ",result);
                resolve (result);
            }
      
    });
     });
}

async function getResult(){
  let result = await getCountries("un",100090);
  console.log("-----------FINAL--------",result);
}

getResult()