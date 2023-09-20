// githubApi.ts
import fetch from "node-fetch";
import jp from "jsonpath";
import { GITHUB_API_BASE_URL } from "./consts.js";
// const isProd = false; // import.meta.env.PROD; // false;
/**
 * Returns the github topics of a project.
 *
 * @remarks
 * This method is part of the {@link githubApi | github-api}.
 *
 * @param {string} loginName - The github login name
 * @param {string} projectName - The github project name
 * @param {boolean} infoLog - true Logs group and info into the console
 * @param {boolean} isProd - true Calls fetch to github api, false returns mock data with same structure
 * @returns {Promise<string[]>} The github topics of a project
 */
export async function getGithubTopics(loginName, projectName, infoLog, isProd) {
  if (infoLog) {
    console.group("getGithubTopics");
  }
  if (loginName && projectName) {
    if (infoLog) {
      console.info("githubApi.ts: loginName: " + loginName);
      console.info("githubApi.ts: projectName: " + projectName);
    }
    if (infoLog) {
      console.groupEnd();
    }
    // https://www.npmjs.com/package/jsonpath MIT License
    return Promise.resolve(jp.query(await returnData(loginName, projectName, infoLog, isProd), "$.topics[*]"));
  } else {
    if (infoLog) {
      console.groupEnd();
    }
    return Promise.resolve([]);
  }
}
/**
 * Returns the github the project object / json of a project.
 *
 * @remarks
 * This method is part of the {@link githubApi | github-api}.
 *
 * @param {string} loginName - The github login name
 * @param {string} projectName - The github project name
 * @param {boolean} infoLog - true Logs group and info into the console
 * @param {boolean} isProd - true Calls fetch to github api, false returns mock data with same structure
 * @returns {Promise<any>} The github the project object / json of a project
 */
async function returnData(loginName, projectName, infoLog, isProd) {
  if (isProd) {
    // get from github project api
    const GITHUB_API_PROJECT_URL = GITHUB_API_BASE_URL + "repos/" + loginName + "/";
    const response = await fetch(GITHUB_API_PROJECT_URL + projectName);
    if (!response.ok) {
      if (infoLog) {
        console.info(
          "API rate limit exceeded for nnn.nnn.nnn.nnn. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)",
        );
        console.info("https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting");
      }
      // Github has a Rate Limit
      // in this case Status is 403 Forbidden
      // and return this Message Object / Json:
      // {
      //   message: "API rate limit exceeded for nnn.nnn.nnn.nnn. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)",
      //   documentation_url: 'https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting'
      // }
    }
    return await response.json();
  } else {
    // return mock data
    // based on
    // github-api/01-01-vanilla-HTML5-starter-page.json
    return Promise.resolve({
      name: "01-01-vanilla-HTML5-starter-page",
      html_url: "https://github.com/roebi/01-01-vanilla-HTML5-starter-page",
      description: "vanilla HTML 5 starter page - Have you ever heard of this HTML 5 tags ?",
      homepage: "https://roebi.github.io/01-01-vanilla-HTML5-starter-page/",
      topics: [" mockdata!", "html5", "html5-template", "roebi", "starter"],
    });
  }
}
