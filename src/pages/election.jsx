import { useEffect, useState } from "react";
import ElectionResults from "../components/ElectionResults";
import Header from "../components/Header";
import Main from "../components/Main";
import Select from "../components/Select";
import { getCandidates, getCities, getElectionsByCity } from "../services/api";

function ElectionPage() {

  const [cities, setCities] = useState([])
  const [candidates, setCandidates] = useState([])
  const [electionInfo, setElectionInfo] = useState([])
  const [selectedCity, setSelectedCity] = useState(null)
  const [error, setError] = useState("")

  useEffect(() => {
    (async function getCitiesFromDB() {
      try {
        setCities(await getCities())
        setCandidates(await getCandidates())
      } catch(err) {
        setError(err.message)
      }
    })()
  }, [])

  /*{
    "id": "09194903-aafb-402e-8e5f-305bece66fbb",
    "cityId": "d2dab6a2-3029-45a5-89f2-fcbaee387758",
    "candidateId": "32cce90d-b2ef-47da-9ec5-13b5078c94a3",
    "votes": 136142
  },*/

  /**
  * "id": "87eed362-e4a8-4e67-9bfd-1f4cd35491a6",
    "name": "Antman",
    "username": "antman"
  */

  useEffect(() => {
    (async function getElectionsFromDB() {
      try {
        const election = await getElectionsByCity(selectedCity.id)
        setElectionInfo(election.map((candidate) => {
          return {
            ...candidate,
            candidate: candidates.find(({ id }) => candidate.candidateId === id)
          }
        }))
      } catch(err) {
        setError(err.message)
      }
    })()
  }, [selectedCity, candidates])

  function handleChange(e) {
    const cityId = e.target.value
    const city = cities.find(({id}) => cityId === id)
    setSelectedCity(city)
  }

  function sortArray(a, b) {
    return b.votes - a.votes
  }

  return ( 
    <>
      <Header>react-elections</Header>
      <Main>
        <h2>Escolha o município</h2>
        <Select handleChange={handleChange} >{cities}</Select>
        {selectedCity && (
          <ElectionResults city={selectedCity}>{electionInfo.sort(sortArray)}</ElectionResults>
        )}
      </Main>
    </>
  );
}

export default ElectionPage;