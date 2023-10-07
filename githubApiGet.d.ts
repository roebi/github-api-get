/**
 * Returns the github project info - reduce with pathExpression constants.
 *
 * @remarks
 * This method is part of the {@link githubApiGet | github-api-get}.
 *
 * @param {string} loginName - The github login name
 * @param {string} projectName - The github project name
 * @param {string} pathExpression - The path expression to reduce the project info
 * @param {boolean} infoLog - true Logs group and info into the console
 * @param {boolean} isProd - true Calls fetch to github api, false returns mock data with same structure
 * @returns {Promise<unknown>} The github topics of a project
 */
export declare function githubApiGetProject(
  loginName: string,
  projectName: string,
  pathExpression: string,
  infoLog: boolean,
  isProd: boolean,
): Promise<unknown>;
/**
 * Returns the github login info - reduce with pathExpression constants.
 *
 * @remarks
 * This method is part of the {@link githubApiGet | github-api-get}.
 *
 * @param {string} loginName - The github login name
 * @param {string} pathExpression - The path expression to reduce the login info
 * @param {boolean} infoLog - true Logs group and info into the console
 * @param {boolean} isProd - true Calls fetch to github api, false returns mock data with same structure
 * @returns {Promise<unknown>} The github login info
 */
export declare function githubApiGetLogin(
  loginName: string,
  pathExpression: string,
  infoLog: boolean,
  isProd: boolean,
): Promise<unknown>;
/**
 * Returns the github topics of a project.
 *
 * @deprecated
 * use githubApiGetProject() with pathExpression constant GITHUB_PROJECT_TOPICS
 *
 * @remarks
 * This method is part of the {@link githubApiGet | github-api-get}.
 *
 * @param {string} loginName - The github login name
 * @param {string} projectName - The github project name
 * @param {boolean} infoLog - true Logs group and info into the console
 * @param {boolean} isProd - true Calls fetch to github api, false returns mock data with same structure
 * @returns {Promise<string[]>} The github topics of a project
 */
export declare function getGithubTopics(
  loginName: string,
  projectName: string,
  infoLog: boolean,
  isProd: boolean,
): Promise<string[]>;
