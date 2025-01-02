async function fetchDataWithRetry(url: string, retries: number): Promise<string> {
    for (let i = 0; i < retries; i++) {
      try {
        const response = await fetchData(url);
        return response;
      } catch (error) {
        console.error(`Intento ${i + 1} fallido: ${error}`);
      }
    }
    throw new Error("No se pudo obtener los datos después de varios intentos.");
  }
  
  // Uso del ejemplo
  fetchDataWithRetry("https://api.example.com/data", 3)
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
  