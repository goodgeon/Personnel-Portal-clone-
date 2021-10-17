function request(url, obj) {
  return new Promise(async (resolve, reject) => {
    try {
      const fetchData = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ obj: obj }),
      });

      const datajson = await fetchData.json();
      resolve(datajson);
    } catch (error) {
      reject(error);
    }
  });
}

export default request;