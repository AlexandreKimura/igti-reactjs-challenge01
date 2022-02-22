function Select({handleChange, selectedCity = null, children: cities = []}) {

  return ( 
    <select onChange={handleChange}>
      {cities.map((city) => (
        <option value={city.id} key={city.id}>{city.name}</option>
      ))}
    </select>
  );
}

export default Select;