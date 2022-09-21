type Coordenadas = {
  longitude: number;
  latitude: number;
  distancia: number;
};

function ImprimeLocalizacao(coordenadas: Coordenadas) {
  console.log(`Long: ${coordenadas.longitude} e Lat: ${coordenadas.latitude}`);
}

function ImprimeLocalizacao2(lat: number, lon: number, dist: number) {
  console.log(`Long: ${lon} e Lat: ${lat}`);
}
