import { httpRequest, httpRequestGet } from "./http";

async function getCities() {
  const cities = await httpRequestGet("/cities");
  return cities;
}

async function getCandidates() {
  const candidates = await httpRequestGet(`/candidates`);
  return candidates;
}

async function getElectionsByCity(cityId) {
  const elections = await httpRequestGet(`/election?cityId=${cityId}`);
  return elections;
}

export { getCities, getCandidates, getElectionsByCity };
