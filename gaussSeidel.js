const matrixSize = document.querySelectorAll('matrixSize');
const matrixNode = document.getElementById('matrizA');

matrixSize.addEventListener('click', changeSize);

function changeSize() {
  while (matrixNode.firstChild) {
    matrixNode.removeChild(matrixNode.lastChild);
  }
  let button = document.getElementById('matrixSize').value;
  switch (button) {
    case '2x2':
      for (let i = 0; i < 4; i++) {
        const matrixInput = document.createElement('input');
        matrixInput.type = 'text';
        matrixInput.id = 'matrizA';
        matrixNode.appendChild(matrixInput);
      }
      break;
    case '3x3':
      for (let i = 0; i < 9; i++) {
        const matrixInput = document.createElement('input');
        matrixInput.type = 'text';
        matrixInput.id = 'matrizA';
        matrixNode.appendChild(matrixInput);
      }
      break;
    case '4x4':
      for (let i = 0; i < 16; i++) {
        const matrixInput = document.createElement('input');
        matrixInput.type = 'text';
        matrixInput.id = 'matrizA';
        matrixNode.appendChild(matrixInput);
      }
      break;
    case '5x5':
      for (let i = 0; i < 25; i++) {
        const matrixInput = document.createElement('input');
        matrixInput.type = 'text';
        matrixInput.id = 'matrizA';
        matrixNode.appendChild(matrixInput);
      }
      break;
  }
}
