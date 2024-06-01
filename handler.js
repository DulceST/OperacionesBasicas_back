exports.media = async (event) => {
  if (!event.body) {
    return {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        error: "No se proporcionaron números en el cuerpo del evento.",
      }),
    };
  }

  const requestBody = JSON.parse(event.body);

  if (!Array.isArray(requestBody.numeros)) {
    return {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        error: "Se esperaba un array de números en el cuerpo del evento.",
      }),
    };
  }

  const numeros = requestBody.numeros;

  if (numeros.length < 20) { // Validar que haya al menos 20 números en el array
    return {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        error: "Se requiere un mínimo de 20 números para calcular la media.",
      }),
    };
  }

  const sum = numeros.reduce((acc, num) => acc + num, 0);
  const media = sum / numeros.length;

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      Media: media,
    }),
  };
};

exports.mediana = async (event) => {
  if (!event.body) {
    return {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        error: "No se proporcionaron números en el cuerpo del evento.",
      }),
    };
  }

  const requestBody = JSON.parse(event.body);

  if (!Array.isArray(requestBody.numeros)) {
    return {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        error: "Se esperaba un array de números en el cuerpo del evento.",
      }),
    };
  }

  const numeros = requestBody.numeros;

  if (numeros.length < 20) {
    return {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        error: "Se requiere un mínimo de 20 números calcular la mediana.",
      }),
    };
  }

  // Ordenar el array de números
  numeros.sort((a, b) => a - b);

  let mediana;
  const middleIndex = Math.floor(numeros.length / 2);

  if (numeros.length % 2 === 0) {
    // Si la cantidad de números es par, la mediana es el promedio de los dos números centrales
    mediana = (numeros[middleIndex - 1] + numeros[middleIndex]) / 2;
  } else {
    // Si la cantidad de números es impar, la mediana es el número central
    mediana = numeros[middleIndex];
  }

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      Mediana: mediana,
    }),
  };
};

exports.moda = async (event) => {
  if (!event.body) {
    return {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        error: "No se proporcionaron números en el cuerpo del evento.",
      }),
    };
  }

  const requestBody = JSON.parse(event.body);

  if (!Array.isArray(requestBody.numeros)) {
    return {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        error: "Se esperaba un array de números en el cuerpo del evento.",
      }),
    };
  }

  const numeros = requestBody.numeros;

  if (numeros.length < 20) {
    return {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        error: "Se requiere un mínimo de 20 números para calcular la moda.",
      }),
    };
  }

  // Contar la frecuencia de cada número
  const frequencyMap = {};
  numeros.forEach(num => {
    frequencyMap[num] = frequencyMap[num] ? frequencyMap[num] + 1 : 1;
  });

  // Encontrar el número con mayor frecuencia (la moda)
  let moda;
  let maxFrequency = 0;
  Object.keys(frequencyMap).forEach(key => {
    if (frequencyMap[key] > maxFrequency) {
      moda = Number(key);
      maxFrequency = frequencyMap[key];
    }
  });

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      Moda: moda,
    }),
  };
};

exports.varianza = async (event) => {
  if (!event.body) {
    return {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        error: "No se proporcionaron números en el cuerpo del evento.",
      }),
    };
  }

  const requestBody = JSON.parse(event.body);

  if (!Array.isArray(requestBody.numeros)) {
    return {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        error: "Se esperaba un array de números en el cuerpo del evento.",
      }),
    };
  }

  const numeros = requestBody.numeros;

  if (numeros.length < 20) {
    return {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        error: "Se requiere un mínimo de 20 números para calcular la varianza.",
      }),
    };
  }

  // Calcular la media
  const sum = numeros.reduce((acc, num) => acc + num, 0);
  const media = sum / numeros.length;

  // Calcular la varianza
  const variance = numeros.reduce((acc, num) => acc + Math.pow(num - media, 2), 0) / numeros.length;

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      Varianza: variance,
    }),
  };
};

exports.desviacionEstandar = async (event) => {
  if (!event.body) {
    return {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        error: "No se proporcionaron números en el cuerpo del evento.",
      }),
    };
  }

  const requestBody = JSON.parse(event.body);

  if (!Array.isArray(requestBody.numeros)) {
    return {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        error: "Se esperaba un array de números en el cuerpo del evento.",
      }),
    };
  }

  const numeros = requestBody.numeros;

  if (numeros.length < 20) {
    return {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        error: "Se requiere un mínimo de 20 números para calcular la Desviacion estandar.",
      }),
    };
  }

  // Calcular la media
  const sum = numeros.reduce((acc, num) => acc + num, 0);
  const media = sum / numeros.length;

  // Calcular la varianza
  const variance = numeros.reduce((acc, num) => acc + Math.pow(num - media, 2), 0) / numeros.length;

  // Calcular la desviación estándar
  const stdDeviation = Math.sqrt(variance);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      "Desviación Estándar": stdDeviation,
    }),
  };
};

exports.rango = async (event) => {
  if (!event.body) {
    return {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        error: "No se proporcionaron números en el cuerpo del evento.",
      }),
    };
  }

  const requestBody = JSON.parse(event.body);

  if (!Array.isArray(requestBody.numeros)) {
    return {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        error: "Se esperaba un array de números en el cuerpo del evento.",
      }),
    };
  }

  const numeros = requestBody.numeros;

  if (numeros.length < 20) {
    return {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        error: "Se requiere un mínimo de 20 números para calcular el rango.",
      }),
    };
  }

  // Ordenar el array de números
  numeros.sort((a, b) => a - b);

  // Calcular el rango
  const rango = numeros[numeros.length - 1] - numeros[0];

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      Rango: rango,
    }),
  };
};
