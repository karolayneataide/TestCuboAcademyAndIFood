console.log(
  'Segundo o Instituto de Astronomia, Geofísica e Ciências Atmosféricas (IAG) da Universidade de São Paulo (USP), a atmosfera, camada de gás que envolve nosso planeta, é constituída de cinco camadas: troposfera, estratosfera, mesosfera, termosfera e exosfera. O ar se torna mais rarefeito ("menos ar") quanto mais distante da superfície terrestre. É por isso que os alpinistas normalmente levam oxigênio com eles quando escalam altas montanhas (começa a "faltar" ar para a respiração). A troposfera é a única camada em que os seres vivos podem respirar normalmente.'
);

function solucao(altitude) {
  if (altitude <= 20) {
    console.log("Você está na Troposfera");
  } else if (altitude > 20 && altitude <= 50) {
    console.log("Você está na Estratosfera");
  } else if (altitude > 50 && altitude <= 80) {
    console.log("Você está na Mesosfera");
  } else if (altitude > 80 && altitude <= 450) {
    console.log("Você está na Termosfera");
  } else if (altitude > 450 && altitude <= 900) {
    console.log("Você está na Exosfera");
  }
}

altitude(20);
