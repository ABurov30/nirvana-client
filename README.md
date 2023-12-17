

1. Start project in dev mode -> npm run dev

2. How to download use custom request base on Axios -> 

Example:
    request
    .sendRequest({ method: 'get', url: '/users' }, { useMock: true, mockData })
 	  .then(data => {
		console.log(data)
 	})


