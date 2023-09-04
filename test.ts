import test from "ava";
import { getGithubTopics } from "./githubApi.js";

test("foo", (t) => {
  t.pass();
});

test("bar", async (t) => {
  const bar = Promise.resolve("bar");
  t.is(await bar, "bar");
});

test("mockdataTopics", async (t) => {
  const loginName = "roebi";
  const projectName = "01-01-vanilla-HTML5-starter-page";
  const infoLog = true;
  const isProd = false;
  const githubTopics = getGithubTopics(loginName, projectName, infoLog, isProd) as Promise<String[]>;
  t.deepEqual(await githubTopics, [" mockdata!", "html5", "html5-template", "roebi", "starter"]);
});

test("noTopics", async (t) => {
  const loginName = "";
  const projectName = "";
  const infoLog = true;
  const isProd = false;
  const githubTopics = getGithubTopics(loginName, projectName, infoLog, isProd) as Promise<String[]>;
  t.deepEqual(await githubTopics, []);
});

test("prodDataTopics", async (t) => {
  const loginName = "roebi";
  const projectName = "01-01-vanilla-HTML5-starter-page";
  const infoLog = true;
  const isProd = true;
  const githubTopics = getGithubTopics(loginName, projectName, infoLog, isProd) as Promise<String[]>;
  t.deepEqual(await githubTopics, ["css3", "html5", "html5-template", "roebi", "starter"]);
});

test("prodDataNoTopicsInvalidProjectName", async (t) => {
  const loginName = "roebi";
  const projectName = "project-not-exist";
  const infoLog = true;
  const isProd = true;
  const githubTopics = getGithubTopics(loginName, projectName, infoLog, isProd) as Promise<String[]>;
  t.deepEqual(await githubTopics, []);
});
