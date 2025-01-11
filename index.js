require('dotenv').config()
const express = require("express")
const app = express()
const port = 3000

const githubData = {
    "login": "jaydhurve09",
    "id": 175489416,
    "node_id": "U_kgDOCnXBiA",
    "avatar_url": "https://avatars.githubusercontent.com/u/175489416?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/jaydhurve09",
    "html_url": "https://github.com/jaydhurve09",
    "followers_url": "https://api.github.com/users/jaydhurve09/followers",
    "following_url": "https://api.github.com/users/jaydhurve09/following{/other_user}",
    "gists_url": "https://api.github.com/users/jaydhurve09/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/jaydhurve09/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/jaydhurve09/subscriptions",
    "organizations_url": "https://api.github.com/users/jaydhurve09/orgs",
    "repos_url": "https://api.github.com/users/jaydhurve09/repos",
    "events_url": "https://api.github.com/users/jaydhurve09/events{/privacy}",
    "received_events_url": "https://api.github.com/users/jaydhurve09/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 10,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2024-07-13T13:31:27Z",
    "updated_at": "2025-01-04T13:43:59Z"
}

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/login', (req, res) => {
    res.send('<h1>Login page</h1>')
})

app.get('/github', (req, res) => {
    res.send(githubData)
})

app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})