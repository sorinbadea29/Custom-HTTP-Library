function easyHttp(){
  this.http = new XMLHttpRequest();
}

// GET Request
easyHttp.prototype.get = function(url, callback){ 
  this.http.open('GET', url, true);
  let self = this;
  this.http.onload = function(){
    if(self.http.status === 200){
      callback(self.http.response, null);
    }else{
      callback(null, 'Error: ' + self.http.status);
    };
  };
  this.http.send();
};

// Post Request
easyHttp.prototype.post = function(url, data, callback){
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');
  let self = this;
  this.http.onload = function(){
    if(self.http.status === 201){
      callback(self.http.responseText, null);
    }else{
      callback(null, 'Error: ' + self.http.status);
    };
  };
  this.http.send(JSON.stringify(data));
};

// Update Request
easyHttp.prototype.put = function(url, data, callback){
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');
  let self = this;
  this.http.onload = function(){
    if(self.http.status === 200){
      callback(self.http.responseText, null);
    }else{
      callback(null, 'Error: ' + self.http.status);
    };
  };
  this.http.send(JSON.stringify(data));
};

// Delete Request
easyHttp.prototype.delete = function(url, callback){
  this.http.open('DELETE', url, true);
  let self = this;
  this.http.onload = function(){
    if(self.http.status === 200){
      callback('Post deleted', null);
    }else{
      callback(null, 'error ' + self.http.status);
    };
  };
  this.http.send();
};