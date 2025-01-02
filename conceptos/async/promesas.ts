// Simulando una API con promesas
function fetchData(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://api.example.com/data") {
          resolve("Datos obtenidos exitosamente.");
        } else {
          reject("URL no válida.");
        }
      }, 2000);
    });
  }
  
  // Ejemplo de uso
  fetchData("https://api.example.com/data")
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
  