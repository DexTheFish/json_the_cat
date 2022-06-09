# using the REQUEST library

here is an example of a request:

```js
request (url, (error, response, body) => {
  console.log(error);
  console.log(response);
  console.log(body);
});
```