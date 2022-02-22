function ElectionResults({ city = null, children: info = [] }) {

  function percentage(totalVotes, votes) {
    const percentegeVotes =  (votes / totalVotes) * 100 
    return percentegeVotes.toFixed(2)
  }

  return ( 
    <div className="pt-2">
      <h2 className="font-semibold">Eleição em {city.name}</h2>
      <div className="flex gap-4 justify-center p-3">
        <span className="font-semibold">Total de eleitores: {city.votingPopulation.toLocaleString("pt-BR")}</span>
        <span className="font-semibold">Abstenção: {city.absence.toLocaleString("pt-BR")}</span>
        <span className="font-semibold">Comparecimento: {city.presence.toLocaleString("pt-BR")}</span>
      </div>
      <p>{info.length} Canditados</p>
      <div className="flex flex-wrap">
        {info.map((i, index) => {
          return (
            <div key={i.id} className="w-60 h-48 shadow-lg p-4 m-4">
              <div className="flex justify-between items-center">
                <img className="h-16 w-16 rounded-full object-cover" src={`/img/${i.candidate.username}.png`} alt={i.candidate.name} />
                <div>
                  <p className={index === 0 ? 'text-green-500' : 'text-red-500'}>{`${percentage(city.presence, i.votes)}%`}</p>
                  <p>{i.votes.toLocaleString('pt-BR')}</p>
                </div>
              </div>
              <div className="mt-10">
                <p>{i.candidate.name}</p>
                <p className={index === 0 ? 'text-green-700' : 'text-red-500'}>{index === 0 ? 'Eleito' : 'Não Eleito'}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default ElectionResults;