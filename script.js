const calculate = () => {
  const xa = document.getElementById('xa').value;
  const xb = document.getElementById('xb').value;
  const ya = document.getElementById('ya').value;
  const yb = document.getElementById('yb').value;
  const result = Math.sqrt((xb - xa) * (xb - xa) + (yb - ya) * (yb - ya));
  document.getElementById('result').innerHTML = result;
};
