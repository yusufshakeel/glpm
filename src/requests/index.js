'use strict';

function getProjectById({ httpClient, projectId, headers }) {
  return httpClient.get({
    url: `/projects/${projectId}`,
    headers
  });
}

function getPipelinesByProjectId({ httpClient, projectId, headers, config }) {
  return httpClient.get({
    url: `/projects/${projectId}/pipelines?per_page=${config.api.perPage}`,
    headers
  });
}

function getPipelinesById({ httpClient, projectId, pipelineId, headers }) {
  return httpClient.get({
    url: `/projects/${projectId}/pipelines/${pipelineId}`,
    headers
  });
}

function getPipelinesByBranchName({ httpClient, projectId, branchName, headers, config }) {
  return httpClient.get({
    url: `/projects/${projectId}/pipelines?ref=${branchName}&per_page=${config.api.perPage}`,
    headers
  });
}

function getBranchByName({ httpClient, projectId, headers, branchName }) {
  return httpClient.get({
    url: `/projects/${projectId}/repository/branches?search=^${branchName}$`,
    headers
  });
}

function getPipelineByCommitId({ httpClient, projectId, headers, commitId }) {
  return httpClient.get({
    url: `/projects/${projectId}/pipelines?sha=${commitId}`,
    headers
  });
}

module.exports = {
  getProjectById,
  getPipelinesByProjectId,
  getPipelinesByBranchName,
  getBranchByName,
  getPipelineByCommitId,
  getPipelinesById
};
