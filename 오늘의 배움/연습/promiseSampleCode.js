function getData(callbackFunc) {
  $.get("https://jsonplaceholder.typicode.com/comments", function (response) {
    callbackFunc(response);
  });
}

getData(function (tableData) {
  console.log(tableData);
});
