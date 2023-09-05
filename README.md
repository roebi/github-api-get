## github-api

- use github api to get project info, i.e. its topics or user info

- github api for a project - only root GET request

- github api for a user - only root GET request

## Install

```git bash
npm install github-api
```

## Usage

```javascript
---
import { getGithubTopics } from "./githubApi.js";

// async ... getGithubTopics from github:
  const loginName = "roebi";
  const projectName = "01-01-vanilla-HTML5-starter-page";
  const infoLog = true;
  const isProd = true;
  const githubTopics = getGithubTopics(loginName, projectName, infoLog, isProd) as Promise<String[]>;

  const realGithubTopics = await githubTopics;
  console.group("realGithubTopics");
  console.info("realGithubTopics");
  console.info(realGithubTopics);
  console.groupEnd();

// if you need a part of the project information
// github-api.project.topics

// if you need a part of the user information
// github-api.user.avatar_url

---
```

## github API has a hourly based rate limit

if this limit is reached in a hour, then

the response is in this case a 'Status is 403' Forbidden

and return this Message Object / Json:

```javascript
{
  message: "API rate limit exceeded for nnn.nnn.nnn.nnn. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)",
  documentation_url: 'https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting'
}
```

see [github - rest - resources-in-the-rest-api - rate-limiting](https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting)

## API - implemented

### getGithubTopics(loginName, projectName, infoLog, isProd)

get project topics as a Array

#### loginName

Type: `String`

The github login name

#### projectName

Type: `String`

The github project namen of the project of a user login

#### infoLog

Type: `boolean`

true Logs group and info into the console

#### isProd

Type: `boolean`

true Calls fetch to github api, false returns mock data with same structure

#### return

Returns a `Promise<String[]>` with the list of the project topics

i.e.

```javascript
"topics": [
  "html5",
  "html5-template",
  "roebi",
  "starter"
]
```

## tip on the behavior of the function

look in the tests: test.ts

## API - not yet implemented

### github-api(loginName, projectName?, infoLog, isProd)

get project info or user info

Returns a `Promise<any>` with the project info or user info

#### loginName

Type: `String`

The github login name

#### projectName (optional)

Type: `String`

The github project namen of the project of a user login

#### infoLog

Type: `boolean`

true Logs group and info into the console

#### isProd

Type: `boolean`

true Calls fetch to github api, false returns mock data with same structure

#### return

Returns a `Promise<any>`

with a Json / Object of a project

or

with a Json / Object of a user login if only loginName is set

see Example answer Json / Object of a project

## Example answer Json / Object of a project

Github Meta Data of project 'roebi/01-01-vanilla-HTML5-starter-page'

```json
{
  "name": "01-01-vanilla-HTML5-starter-page",
  ...
  "owner": {
     "login": "roebi",
     ...
  },
  "description": "vanilla HTML 5 starter page - Have you ever heard of this HTML 5 tags ?",
  ...
  "topics": [
    "html5",
    "html5-template",
    "roebi",
    "starter"
  ],
  ...
}
```

## Example answer Json / Object of a login of a user

Github Meta Data of user login 'roebi'

```json
{
  "login": "roebi",
  ...
  "avatar_url": "...",
  ...
  "location": "Switzerland",
  ...
  "bio": "..."
}
```

## tip on the behavior of the function

look in the tests: test.ts
