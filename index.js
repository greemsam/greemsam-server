require("dotenv").config();
const { default: axios } = require('axios')
const express = require('express')
const app = express()
const port = 3000
const accessToken = process.env.ACCESS_TOKEN
const appID = process.env.APP_ID
app.get('/', (req, response) => {
	response.set('Access-Control-Allow-Origin', '*')
	axios.get(`https://graph.instagram.com/${appID}/media?fields=id,media_type,media_url,username,timestamp&access_token=${accessToken}`)
  	.then( res =>{
		response.send(res.data)
	})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})