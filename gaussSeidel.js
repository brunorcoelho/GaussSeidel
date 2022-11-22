const matrixSize = document.getElementsByClassName('matrixSize');
const matrixANode = document.getElementById('matrizA');
const matrixBNode = document.getElementById('matrizB');
const chuteInicial = document.getElementById('chuteInicial');

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
          matrixInput.type = 'text';
          matrixInput.class = 'matrizA';
          matrixANode.appendChild(matrixInput);
        }
        for (let i = 0; i < 2; i++) {
          const matrixB = document.createElement('input');
          matrixB.type = 'text';
          matrixB.class = 'matrizB';
          matrixBNode.appendChild(matrixB);
        }
        for (let i = 0; i < 2; i++) {
          const chuteInicialInput = document.createElement('input');
          chuteInicialInput.type = 'text';
          chuteInicialInput.class = 'chuteInicialInput';
          chuteInicial.appendChild(chuteInicialInput);
        }
        break;
      case '3x3':
        matrixANode.className = 'matrizA3';
        for (let i = 0; i < 9; i++) {
          const matrixInput = document.createElement('input');
          matrixInput.type = 'text';
          matrixInput.class = 'matrizA';
          matrixANode.appendChild(matrixInput);
        }
        for (let i = 0; i < 3; i++) {
          const matrixB = document.createElement('input');
          matrixB.type = 'text';
          matrixB.class = 'matrizB';
          matrixBNode.appendChild(matrixB);
        }
        for (let i = 0; i < 3; i++) {
          const chuteInicialInput = document.createElement('input');
          chuteInicialInput.type = 'text';
          chuteInicialInput.class = 'chuteInicialInput';
          chuteInicial.appendChild(chuteInicialInput);
        }
        break;
      case '4x4':
        matrixANode.className = 'matrizA4';
        for (let i = 0; i < 16; i++) {
          const matrixInput = document.createElement('input');
          matrixInput.type = 'text';
          matrixInput.class = 'matrizA';
          matrixANode.appendChild(matrixInput);
        }
        for (let i = 0; i < 4; i++) {
          const matrixB = document.createElement('input');
          matrixB.type = 'text';
          matrixB.class = 'matrizB';
          matrixBNode.appendChild(matrixB);
        }
        for (let i = 0; i < 4; i++) {
          const chuteInicialInput = document.createElement('input');
          chuteInicialInput.type = 'text';
          chuteInicialInput.class = 'chuteInicialInput';
          chuteInicial.appendChild(chuteInicialInput);
        }
        break;
      case '5x5':
        matrixANode.className = 'matrizA5';
        for (let i = 0; i < 25; i++) {
          const matrixInput = document.createElement('input');
          matrixInput.type = 'text';
          matrixInput.class = 'matrizA';
          matrixANode.appendChild(matrixInput);
        }
        for (let i = 0; i < 5; i++) {
          const matrixB = document.createElement('input');
          matrixB.type = 'text';
          matrixB.class = 'matrizB';
          matrixBNode.appendChild(matrixB);
        }
        for (let i = 0; i < 5; i++) {
          const chuteInicialInput = document.createElement('input');
          chuteInicialInput.type = 'text';
          chuteInicialInput.class = 'chuteInicialInput';
          chuteInicial.appendChild(chuteInicialInput);
        }
        break;
    }
  });
}
