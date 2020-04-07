const $canvas = document.querySelector('canvas');
const context = $canvas.getContext('2d');
setTimeout(() => context.fillRect(0, 0, 150, 100), 1000);

$canvas.addEventListener('mousemove', function (e) {
  console.log(e);
});
