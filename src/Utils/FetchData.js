

export const exerciseOption = {
    method: 'GET',
    params: {limit: '30'},
    headers: {
      'X-RapidAPI-Key': '71f3a61b7fmsh0da501db29e311dp172c2bjsn7e05c16ed314',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '4684ee0193msh527a540845c56e8p1d6e9bjsn1fe7966e4d21',
  },
};

export const fetchData = async(url, option)=>{
    const response = await fetch(url, option);
    const data = await response.json()
    return data;
}



// old api key:::::    fc3db73084mshce2ba7bc0eb1a39p11e4f6jsna8d3355a20f5