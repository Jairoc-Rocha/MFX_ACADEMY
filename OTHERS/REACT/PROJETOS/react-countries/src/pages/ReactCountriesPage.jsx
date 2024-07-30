import { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import TextInput from "../components/TextInput";
import { allCountries } from "../data/countries";
import { allNewCountries } from "../data/all";
import Countries from "../components/Countries";
import Country from "../components/Country";

const ReactCountriesPage = () => {
  const [countryFilter, setCountryFilter] = useState("");
  const [visitedCountries, setVisitedCountries] = useState([]);

  function handleCountryFilterChange(newCountryFilter) {
    setCountryFilter(newCountryFilter);
  }

  function toggleVisitedCountry(countryId) {
    let newVisitedCountries = [...visitedCountries];

    const isCountryVisited = newVisitedCountries.indexOf(countryId) !== -1;

    if (isCountryVisited) {
      newVisitedCountries = newVisitedCountries.filter((visitedCountryId) => {
        return visitedCountryId !== countryId;
      });
    } else {
      newVisitedCountries.push(countryId);
    }

    setVisitedCountries(newVisitedCountries);
  }

  const countryFilterLowerCase = countryFilter.trim().toLocaleLowerCase();

  const filteredCountries =
    countryFilterLowerCase.length >= 3
      ? allNewCountries.filter((country) => {
          return country.nameLowerCase.includes(countryFilterLowerCase);
        })
      : allNewCountries;

  return (
    <>
      <Header>react-countries</Header>

      <Main>
        <TextInput
          id="InputCountryFilter"
          labelDescription="Informe o nome do pais (pelo menos 3 caracteres):"
          inputValue={countryFilter}
          onInputChange={handleCountryFilterChange}
          autoFocus
        />

        {/* prop driling */}
        {/* <Countries
          visitedCountries={visitedCountries}
          onCountryClick={toggleVisitedCountry}
        >
          {filteredCountries}
        </Countries> */}

        {/* Composition */}
        <Countries>
          <h2 className="text-center font-semibold">
            {filteredCountries.length} pais(es)
          </h2>
          <h3 className="text-center font-semibold text-sm">
            {visitedCountries.length} pais(es) visitado(s)
          </h3>

          {filteredCountries.map((country) => {
            const isVisited = visitedCountries.indexOf(country.id) !== -1;

            return (
              <Country
                isVisited={isVisited}
                onCountryClick={toggleVisitedCountry}
                key={country.id}
              >
                {country}
              </Country>
            );
          })}
        </Countries>
      </Main>
    </>
  );
};

export default ReactCountriesPage;
