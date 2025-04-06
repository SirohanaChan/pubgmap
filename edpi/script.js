let timeoutId;

function calculateEDPI() {
  const dpi = parseFloat(document.getElementById('dpi').value);
  const sens = parseFloat(document.getElementById('sensitivity').value);
  const vertSens = parseFloat(document.getElementById('verticalSensitivity').value);
  const resultDiv = document.getElementById('result');

  clearTimeout(timeoutId);

  if (isNaN(dpi) || isNaN(sens) || isNaN(vertSens)) {
    resultDiv.textContent = '숫자를 모두 입력해 주세요!';
    resultDiv.classList.add('show');

    timeoutId = setTimeout(() => {
      resultDiv.classList.remove('show');
    }, 6000);

    return;
  }

  resultDiv.textContent = `eDPI ${(dpi * sens * vertSens / 100).toFixed(2)}`;
  resultDiv.classList.add('show');
}
