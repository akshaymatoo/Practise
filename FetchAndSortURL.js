const request = require("request");
let title = [];
let total_pages = 0;
let page_num = 1;

function getMovieTitles (subsStr){
  let url = "https://jsonmock.hackerrank.com/api/movies/search/?Title=subs&page="+page_num;
  if(subsStr)
    url = url.replace("subs",subsStr);
    
  //console.log(url)
 
 return new Promise((resolve, reject) => {
    request (url,function (error,response,body){
      if (error) reject(error);
      

      var movie_data = JSON.parse(body);

       
      total_pages = movie_data.total_pages;

      
      if(movie_data.data.length>0 && page_num<=total_pages){
        
        for(let movie of movie_data.data){
          //console.log(movie)
          title.push(movie.Title);
        }
        //console.log(title)
        page_num++;
        resolve(getMovieTitles(subsStr));
      }
      else{
          resolve(title.sort().join("\n"));
      }
    });
 });
 
   
  }
 
async function getResult(){
  let title_spiderman = await getMovieTitles("spiderman");
  console.log(title_spiderman);
  page_num = 1;
  title = [];
  console.log("-------------------");
   let superman = await getMovieTitles("superman");
  console.log(superman);
}

getResult();
 


 