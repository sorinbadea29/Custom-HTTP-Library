let http = new easyHttp;
let postData = {title: "Custom Post", body: "This is a custom post"};
let updateData = {title: "Updated Custom Post", body: "This is a custom post updated"};


http.get('https://jsonplaceholder.typicode.com/posts', function(res, err){
  if(res){
    console.log(res);
  }else{
    console.log(err);
  };
});


// http.post('https://jsonplaceholder.typicode.com/posts', postData,  function(res, err){
//   if(res){
//     console.log(res);
//   }else{
//     console.log(err);
//   };
// });


// http.put('https://jsonplaceholder.typicode.com/posts/100', updateData,  function(res, err){
//   if(res){
//     console.log(res);
//   }else{
//     console.log(err);
//   };
// });


// http.delete('https://jsonplaceholder.typicode.com/posts/101', function(res, err){
//   if(res){
//     console.log(res);
//   }else{
//     console.log(err);
//   };
// });