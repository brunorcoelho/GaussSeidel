const matrixSize = document.getElementsByClassName('matrixSize');
const matrixANode = document.getElementById('matrizA');
const matrixBNode = document.getElementById('matrizB');
const chuteInicial = document.getElementById('chuteInicial');
const calcular = document.getElementById('calcular');

// Loop para mudar o tamanho da matriz e afins
for (let index = 0; index < matrixSize.length; index++) {
  matrixSize[index].addEventListener('click', function () {
    while (matrixANode.firstChild) {
      matrixANode.removeChild(matrixANode.lastChild);
    }
    while (matrixBNode.childNodes.length > 2) {
      matrixBNode.removeChild(matrixBNode.lastChild);
    }
    while (chuteInicial.childNodes.length > 2) {
      chuteInicial.removeChild(chuteInicial.lastChild);
    }
    let button = this.value;
    switch (button) {
      case '2x2':
        matrixANode.className = 'matrizA2';
        for (let i = 0; i < 4; i++) {
          const matrixInput = document.createElement('input');
          matrixInput.id = i + 'matrizA';
          matrixANode.appendChild(matrixInput);
        }
        for (let i = 0; i < 2; i++) {
          const matrixB = document.createElement('input');

          matrixB.id = i + 'matrizB';
          matrixBNode.appendChild(matrixB);
        }
        for (let i = 0; i < 2; i++) {
          const chuteInicialInput = document.createElement('input');

          chuteInicialInput.id = i + 'chuteInicial';
          chuteInicial.appendChild(chuteInicialInput);
        }
        break;
      case '3x3':
        matrixANode.className = 'matrizA3';
        for (let i = 0; i < 9; i++) {
          const matrixInput = document.createElement('input');
          matrixInput.id = i + 'matrizA';
          matrixANode.appendChild(matrixInput);
        }
        for (let i = 0; i < 3; i++) {
          const matrixB = document.createElement('input');

          matrixB.id = i + 'matrizB';
          matrixBNode.appendChild(matrixB);
        }
        for (let i = 0; i < 3; i++) {
          const chuteInicialInput = document.createElement('input');

          chuteInicialInput.id = i + 'chuteInicial';
          chuteInicial.appendChild(chuteInicialInput);
        }
        break;
      case '4x4':
        matrixANode.className = 'matrizA4';
        for (let i = 0; i < 16; i++) {
          const matrixInput = document.createElement('input');
          matrixInput.id = i + 'matrizA';
          matrixANode.appendChild(matrixInput);
        }
        for (let i = 0; i < 4; i++) {
          const matrixB = document.createElement('input');

          matrixB.id = i + 'matrizB';
          matrixBNode.appendChild(matrixB);
        }
        for (let i = 0; i < 4; i++) {
          const chuteInicialInput = document.createElement('input');

          chuteInicialInput.id = i + 'chuteInicial';
          chuteInicial.appendChild(chuteInicialInput);
        }
        break;
      case '5x5':
        matrixANode.className = 'matrizA5';
        for (let i = 0; i < 25; i++) {
          const matrixInput = document.createElement('input');
          matrixInput.id = i + 'matrizA';
          matrixANode.appendChild(matrixInput);
        }
        for (let i = 0; i < 5; i++) {
          const matrixB = document.createElement('input');

          matrixB.id = i + 'matrizB';
          matrixBNode.appendChild(matrixB);
        }
        for (let i = 0; i < 5; i++) {
          const chuteInicialInput = document.createElement('input');

          chuteInicialInput.id = i + 'chuteInicial';
          chuteInicial.appendChild(chuteInicialInput);
        }
        break;
    }
  });
}

calcular.addEventListener('click', lerMatriz);

function lerMatriz() {
  let tamanho = matrixANode.childElementCount;
  if (tamanho > 4) {
    tamanho = Math.sqrt(tamanho);
  } else {
    tamanho = tamanho - 2;
  }
  let matriz = new Array(tamanho);
  let matrizSassenfeld = new Array(tamanho);
  for (let i = 0; i < tamanho; i++) {
    matriz[i] = new Array(tamanho);
    matrizSassenfeld[i] = new Array(tamanho);
  }
  let contadorElemento = 0;
  for (let i = 0; i < tamanho; i++) {
    for (let j = 0; j < tamanho; j++) {
      let id = contadorElemento + 'matrizA';
      let valor = document.getElementById(id).value;
      if (valor < 0) {
        matrizSassenfeld[i][j] = valor * -1;
        matriz[i][j] = parseFloat(valor);
        contadorElemento++;
      } else {
        matriz[i][j] = parseFloat(valor);
        matrizSassenfeld[i][j] = parseFloat(valor);
        contadorElemento++;
      }
    }
  }
  let matrizB = new Array(tamanho);
  for (let i = 0; i < tamanho; i++) {
    let id = i + 'matrizB';
    let valoresB = document.getElementById(id).value;
    matrizB[i] = parseFloat(valoresB);
  }
  let chuteInicial = new Array(tamanho);
  for (let i = 0; i < tamanho; i++) {
    let id = i + 'chuteInicial';
    let valoresChute = document.getElementById(id).value;
    chuteInicial[i] = parseFloat(valoresChute);
  }
  let erro = document.getElementById('erro').value;

  if (criterioSassenfeld(matrizSassenfeld, tamanho)) {
    calcularMatriz(matriz, matrizB, chuteInicial, erro, tamanho);
  }
}

function criterioSassenfeld(matrizSassenfeld, tamanho) {
  let beta = new Array(tamanho);
  for (let i = 0; i < tamanho; i++) {
    beta[i] = 0;
  }
  for (let i = 0; i < tamanho; i++) {
    for (let j = 0; j < tamanho - 1; j++) {
      if (i === 0) {
        beta[i] = beta[i] + matrizSassenfeld[i][j + 1];
      } else {
        if (j !== i) {
          beta[i] = beta[i] + matrizSassenfeld[i][j] * beta[j];
        } else {
          beta[i] = beta[i] + matrizSassenfeld[i][j + 1];
        }
      }
    }
    beta[i] = beta[i] / matrizSassenfeld[i][i];
  }
  let aux;
  for (let i = 0; i < tamanho; i++) {
    for (let j = 0; j < tamanho; j++) {
      if (beta[i] < beta[j]) {
        aux = beta[j];
        beta[j] = beta[i];
        beta[i] = aux;
      }
    }
  }

  if (beta[tamanho - 1] > 1) {
    console.log('Nao converge');
  } else {
    console.log('converge sim');
    return true;
  }
}

function calcularMatriz(matriz, matrizB, chuteInicial, erro, tamanho) {
  let contagemDeErro;
  let k = 0;
  do {
    let aproximacaoAtual = new Array(tamanho);
    let aproximacaoTeste = new Array(tamanho);

    let erroTeste;
    for (let i = 0; i < tamanho; i++) {
      aproximacaoAtual[i] = 0;
      aproximacaoTeste[i] = chuteInicial[i];
    }
    for (let i = 0; i < tamanho; i++) {
      for (let j = 0; j < tamanho; j++) {
        if (j !== i) {
          aproximacaoAtual[i] =
            aproximacaoAtual[i] + matriz[i][j] * -1 * chuteInicial[j];
        }
      }
      aproximacaoAtual[i] = aproximacaoAtual[i] + matrizB[i];
      aproximacaoAtual[i] = aproximacaoAtual[i] / matriz[i][i];
      chuteInicial[i] = aproximacaoAtual[i];
    }
    k++;

    contagemDeErro = 0;
    for (let i = 0; i < tamanho; i++) {
      erroTeste = aproximacaoAtual[i] - aproximacaoTeste[i];
      if (erroTeste < 0) {
        erroTeste = erroTeste * -1;
      }
      if (erroTeste < erro) {
        contagemDeErro = contagemDeErro + 1;
      }
    }
    console.log(aproximacaoAtual, k);
  } while (contagemDeErro !== tamanho);
  return aproximacaoAtual;
}
