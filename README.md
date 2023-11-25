## github-api-get

- use githubApiGetProject to get the github project info - reduce with pathExpression constants - only root GET request

- i.e. its project topics

- use githubApiGetLogin to get the github login info - reduce with pathExpression constants - only root GET request

- i.e. its user avatar

- use getGithubTopics to get the github project topics - deprecated - use githubApiGetProject with GITHUB_PROJECT_TOPICS

## Install

```git bash
npm install github-api-get
```

## Usage

```javascript
---
// in a module
export {};

// import the function from the library
import { getGithubTopics } from "github-api-get";

// define a example usage function
export async function getGithubTopicsFromGithub() {
  const loginName = "roebi";
  const projectName = "01-01-vanilla-HTML5-starter-page";
  const infoLog = true;
  const isProd = true;

  const githubTopics = getGithubTopics(loginName, projectName, infoLog, isProd) as Promise<string[]>;

  const realGithubTopics = await githubTopics;
  console.group("realGithubTopics");
  console.info("realGithubTopics");
  console.info(realGithubTopics);
  console.groupEnd();
}

// run the example
await getGithubTopicsFromGithub();

---
```

## Usage of other APIs

look in the tests: test.ts

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

get github project topics as a Array

deprecated: use githubApiGetProject() with pathExpression constant GITHUB_PROJECT_TOPICS

#### loginName

Type: `String`

The github login name

#### projectName

Type: `String`

The github project name of the project of a user login

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

## API - new implemented

### githubApiGetProject(loginName, projectName, pathExpression, infoLog, isProd)

get github project info - reduce with pathExpression constants

Returns a `Promise<any>` with the project info

#### loginName

Type: `String`

The github login name

#### projectName

Type: `String`

The github project name of the project of a user login

#### pathExpression

Type: `String`

filter the project name of the project of a user login

#### infoLog

Type: `boolean`

true Logs group and info into the console

#### isProd

Type: `boolean`

true Calls fetch to github api, false returns mock data with same structure

#### return

Returns a `Promise<any>`

with a Json / Object of a project reduced with pathExpression

see Example answer Json / Object of a project

### githubApiGetLogin(loginName, pathExpression, infoLog, isProd)

get github user info - reduce with pathExpression constants

Returns a `Promise<any>` with the project info or user info

#### loginName

Type: `String`

The github login name

#### pathExpression

Type: `String`

filter the project namen of the project of a user login

#### infoLog

Type: `boolean`

true Logs group and info into the console

#### isProd

Type: `boolean`

true Calls fetch to github api, false returns mock data with same structure

#### return

Returns a `Promise<any>`

with a Json / Object of a user login reduced with pathExpression

see Example answer Json / Object of a login of a user

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
  "html_url": "https://github.com/roebi/01-01-vanilla-HTML5-starter-page",
  "description": "vanilla HTML 5 starter page - Have you ever heard of this HTML 5 tags ?",
  ...
  "url": "https://api.github.com/repos/roebi/01-01-vanilla-HTML5-starter-page",
  ...
  "homepage": "https://roebi.github.io/01-01-vanilla-HTML5-starter-page/",
  ...
  "license": {
    "key": "unlicense",
  },
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
  "url": "https://api.github.com/users/roebi",
  "html_url": "https://github.com/roebi",
  ...
  "location": "Switzerland",
  ...
  "bio": "..."
}
```

## tip on the behavior of the function

look in the tests: test.ts
