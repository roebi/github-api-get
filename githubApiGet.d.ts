/**
 * Returns the github topics of a project.
 *
 * @remarks
 * This method is part of the {@link githubApi | github-api}.
 *
 * @param {String} loginName - The github login name
 * @param {String} projectName - The github project name
 * @param {boolean} infoLog - true Logs group and info into the console
 * @param {boolean} isProd - true Calls fetch to github api, false returns mock data with same structure
 * @returns {Promise<String[]>} The github topics of a project
 */
export declare function getGithubTopics(
  loginName: String,
  projectName: String,
  infoLog: boolean,
  isProd: boolean,
): Promise<String[]>;
