// githubApi.ts

import jp from "jsonpath";
import { GITHUB_API_BASE_URL } from "./consts";

const isProd = import.meta.env.PROD; // false;

export async function getGithubTopics(loginName: String, projectName: String): Promise<Array<String>> {
  // console.group("getGithubTopics");
  if (loginName && projectName) {
    // console.info('githubApi.ts: loginName: ' + loginName);
    // console.info('githubApi.ts: projectName: ' + projectName);

    async function returnData(isProd: boolean) {
      if (isProd) {
        // get from github project api
        const GITHUB_API_PROJECT_URL = GITHUB_API_BASE_URL + "repos/" + loginName + "/";

        const response = await fetch(GITHUB_API_PROJECT_URL + projectName);
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
    // console.groupEnd();
    // https://www.npmjs.com/package/jsonpath MIT License
    return Promise.resolve(jp.query(await returnData(isProd), "$.topics[*]") as Array<String>);
  } else {
    // console.groupEnd();
    return Promise.resolve([] as Array<String>);
  }
}
