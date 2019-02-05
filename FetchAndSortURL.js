var http = require("https");
var title = [];
var total_pages = 0;
var page = 1;
var total = 0;
 let url = "https://jsonmock.hackerrank.com/api/movies/search/?Title=subs";
 

function getMovieTitles (subsStr){
  if(subsStr)
  url = url.replace("subs",subsStr);
var req = http.get(url, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    var res = JSON.parse(body.toString());

  
  if(res.data.length>0 ){
    total = res.total;
    total_pages = res.total_pages;
    page = parseInt(res.page);
    page = page+1;
    //console.log(total_pages,page);
    
    res.data.forEach(function(value){
      //console.log(value.Title)
      title.push(value.Title);
    })
  
    url =  url +"&page="+page;
    //console.log(title)
    if(page<=total_pages)
      getMovieTitles();
    else
    {
      if(total === title.length && title.length>0)
        console.log (title.sort().join("\n"));
      else{
        console.log("No result!!")
      }
    }
  }else{
        console.log("No result!!")
      }
  
    
  });
});
 
req.end();

}

 getMovieTitles("brother");