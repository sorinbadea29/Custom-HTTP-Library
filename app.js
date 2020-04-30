let http = new easyHttp();

http.get('https://jsonplaceholder.typicode.com/posts/', function(res, err){
  if(res){
    console.log(res);
  }else{
    console.log(err);
  }
});