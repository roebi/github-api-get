import test from "ava";
import { githubApiGetProject, githubApiGetLogin, getGithubTopics } from "./githubApiGet.js";
import { GITHUB_PROJECT_TOPICS, GITHUB_LOGIN_AVATAR_URL } from "./consts.js";

// dummy tests

test("foo", (t) => {
  t.pass();
});

test("bar", async (t) => {
  const bar = Promise.resolve("bar");
  t.is(await bar, "bar");
});

// tests for new githubApiGetProject

test("mockdataTopicsWithPathExpression", async (t) => {
  const loginName = "roebi";
  const projectName = "01-01-vanilla-HTML5-starter-page";
  const infoLog = true;
  const isProd = false;
  const githubTopics = githubApiGetProject(loginName, projectName, GITHUB_PROJECT_TOPICS, infoLog, isProd) as Promise<
    string[]
  >;
  t.deepEqual(await githubTopics, [" mockdata!", "html5", "html5-template", "roebi", "starter"]);
});

test("mockdataProjectInfoEmpty", async (t) => {
  const loginName = "roebi";
  const projectName = "01-01-vanilla-HTML5-starter-page";
  const infoLog = true;
  const isProd = false;
  const githubProjectInfoEmtpy = githubApiGetProject("", "", "", infoLog, isProd) as Promise<unknown>;
  t.deepEqual(await githubProjectInfoEmtpy, {});
});

test("realdataTopicsWithPathExpression", async (t) => {
  const loginName = "roebi";
  const projectName = "01-01-vanilla-HTML5-starter-page";
  const infoLog = true;
  const isProd = true;
  const githubTopics = githubApiGetProject(loginName, projectName, GITHUB_PROJECT_TOPICS, infoLog, isProd) as Promise<
    string[]
  >;
  t.deepEqual(await githubTopics, ["css3", "html5", "html5-template", "roebi", "starter"]);
});

// tests for new githubApiGetLogin

test("mockdataLoginInfoWithPathExpression", async (t) => {
  const loginName = "roebi";
  const infoLog = true;
  const isProd = false;
  const githubLoginInfoWithPathExpression = githubApiGetLogin(
    loginName,
    GITHUB_LOGIN_AVATAR_URL,
    infoLog,
    isProd,
  ) as Promise<unknown>;
  t.deepEqual(await githubLoginInfoWithPathExpression, ["https://avatars.githubusercontent.com/u/3611826?v=4"]);
});

test("mockdataLoginInfoEmpty", async (t) => {
  const loginName = "";
  const infoLog = true;
  const isProd = false;
  const githubLoginInfoEmtpy = githubApiGetLogin(loginName, "", infoLog, isProd) as Promise<unknown>;
  t.deepEqual(await githubLoginInfoEmtpy, {});
});

test("realdataLoginInfoWithPathExpression", async (t) => {
  const loginName = "roebi";
  const infoLog = true;
  const isProd = true;
  const githubLoginInfoWithPathExpression = githubApiGetLogin(
    loginName,
    GITHUB_LOGIN_AVATAR_URL,
    infoLog,
    isProd,
  ) as Promise<unknown>;
  t.deepEqual(await githubLoginInfoWithPathExpression, ["https://avatars.githubusercontent.com/u/3611826?v=4"]);
});

// tests for deprecated getGithubTopics

test("mockdataTopics", async (t) => {
  const loginName = "roebi";
  const projectName = "01-01-vanilla-HTML5-starter-page";
  const infoLog = true;
  const isProd = false;
  const githubTopics = getGithubTopics(loginName, projectName, infoLog, isProd) as Promise<string[]>;
  t.deepEqual(await githubTopics, [" mockdata!", "html5", "html5-template", "roebi", "starter"]);
});

test("noTopics", async (t) => {
  const loginName = "";
  const projectName = "";
  const infoLog = true;
  const isProd = false;
  const githubTopics = getGithubTopics(loginName, projectName, infoLog, isProd) as Promise<string[]>;
  t.deepEqual(await githubTopics, []);
});

test("prodDataTopics", async (t) => {
  const loginName = "roebi";
  const projectName = "01-01-vanilla-HTML5-starter-page";
  const infoLog = true;
  const isProd = true;
  const githubTopics = getGithubTopics(loginName, projectName, infoLog, isProd) as Promise<string[]>;
  t.deepEqual(await githubTopics, ["css3", "html5", "html5-template", "roebi", "starter"]);
});

test("prodDataNoTopicsInvalidProjectName", async (t) => {
  const loginName = "roebi";
  const projectName = "project-not-exist";
  const infoLog = true;
  const isProd = true;
  const githubTopics = getGithubTopics(loginName, projectName, infoLog, isProd) as Promise<string[]>;
  t.deepEqual(await githubTopics, []);
});
