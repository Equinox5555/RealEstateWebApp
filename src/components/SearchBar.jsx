import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'acfbfc4e8emshb92faf2ba06490cp1eec8fjsn1c592046396c',
        'X-RapidAPI-Host': 'realty-in-au.p.rapidapi.com'
      }
    };

    function handleSubmit(e) {
      e.preventDefault();
      if(!query) return;
      
      const url = `https://realty-in-au.p.rapidapi.com/auto-complete?query=${query}`;
      getResult(url)

      setQuery("");
    }

    async function getResult(url) {
      try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }

  return (
    <form onSubmit={handleSubmit} >
        <input placeholder="Search by Location" value={query} onChange={(e) => setQuery(e.target.value)} className="form-control mr-sm-2"/>
    </form>
  )
}
