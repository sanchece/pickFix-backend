const getSetQueryString = (jsonData) => {
    const keys = Object.keys(jsonData);
    const setQueryString = keys.map((key, i) => {
      return `${key}=$${i + 1}`;
    });
    const values = Object.values(jsonData);
    return {setQueryString,values}
  };

  module.exports=getSetQueryString;