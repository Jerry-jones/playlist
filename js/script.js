let search = "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1";
fetch(search)

.then(function(response) {
            return response.json();
        })
.then(function(beta) {
            console.log(beta);
  let url = beta.data[0].images.original.url;
   console.log(url)
  $(".main").html(`<img src=${url} height=300>`);

})


