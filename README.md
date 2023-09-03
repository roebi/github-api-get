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
import github-api from 'github-api';

// if you need a part of the project information
// github-api.project.topics

// if you need a part of the user information
// github-api.user.avatar_url

---
```

## API

### github-api(loginName, projectName?)

get project info or user info

Returns a `Promise<any>` with the project info or user info

#### loginName

Type: `string`

login of user

#### projectName (optional)

Type: `string`

name of the project of a user login if projectName i set

#### return

a Json / Object of a project

or

a Json / Object of a user login if only loginName is set

see Example answer Json / Object of a project

### getGithubTopics(loginName, projectName)

get project topics as a Array

Returns a `Promise<Array>` with the list of the project topics

i.e.

```javascript
"topics": [
  "html5",
  "html5-template",
  "roebi",
  "starter"
]
```

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
