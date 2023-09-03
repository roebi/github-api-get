// githubApi.ts

import jp from "jsonpath";
import { GITHUB_API_PROJECT_URL } from "../consts";
const isProd = import.meta.env.PROD; // false;

export async function getGithubTopics(githubName: String): Promise<Array<String>> {
  if (githubName) {
    // console.info('githubApi.ts: githubName: ' + githubName);

    async function returnData(isProd: boolean) {
      if (isProd) {
        // get from github project api
        const response = await fetch(GITHUB_API_PROJECT_URL + githubName);
        return await response.json();
      } else {
        // based on
        // file:///C:/d/r/astro-github-api-plugin/01-01-vanilla-HTML5-starter-page.json
        return Promise.resolve({
          name: "01-01-vanilla-HTML5-starter-page",
          html_url: "https://github.com/roebi/01-01-vanilla-HTML5-starter-page",
          description: "vanilla HTML 5 starter page - Have you ever heard of this HTML 5 tags ?",
          homepage: "https://roebi.github.io/01-01-vanilla-HTML5-starter-page/",
          topics: [" mockdata!", "html5", "html5-template", "roebi", "starter"],
        });
      }
    }

    // https://www.npmjs.com/package/jsonpath MIT License
    return Promise.resolve(jp.query(await returnData(isProd), "$.topics[*]") as Array<String>);
  } else {
    return Promise.resolve([] as Array<String>);
  }
}
