require("dotenv").config();
const express = require("express");
const app = express();
// const port = 3000;

const github = {
  login: "AmanRathi",
  id: 10204815,
  node_id: "MDQ6VXNlcjEwMjA0ODE1",
  avatar_url: "https://avatars.githubusercontent.com/u/10204815?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/AmanRathi",
  html_url: "https://github.com/AmanRathi",
  followers_url: "https://api.github.com/users/AmanRathi/followers",
  following_url:
    "https://api.github.com/users/AmanRathi/following{/other_user}",
  gists_url: "https://api.github.com/users/AmanRathi/gists{/gist_id}",
  starred_url: "https://api.github.com/users/AmanRathi/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/AmanRathi/subscriptions",
  organizations_url: "https://api.github.com/users/AmanRathi/orgs",
  repos_url: "https://api.github.com/users/AmanRathi/repos",
  events_url: "https://api.github.com/users/AmanRathi/events{/privacy}",
  received_events_url: "https://api.github.com/users/AmanRathi/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Aman",
  company: "@Browserstack",
  blog: "https://amanrathi.com",
  location: "India",
  email: null,
  hireable: null,
  bio: "Product Designer",
  twitter_username: null,
  public_repos: 15,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2014-12-16T06:40:58Z",
  updated_at: "2026-08-11T18:02:10Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/login", (req, res) => {
  res.send("<input>login</input>");
});

app.get("/profile", (req, res) => {
  res.json(github);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
