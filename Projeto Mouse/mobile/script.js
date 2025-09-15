const socket = io('http://localhost:3000');
const joystick = document.getElementById('joystick');
const joystickContainer = document.getElementById('joystick-container');
const clickMouseButton = document.getElementById('click-mouse');
const scrollMouseUpButton = document.getElementById('scroll-mouse-up');
const scrollMouseDownButton = document.getElementById('scroll-mouse-down');

let joystickX = 0;
let joystickY = 0;

joystickContainer.addEventListener('touchmove', (e) => {
  const rect = joystickContainer.getBoundingClientRect();
  const x = e.touches[0].clientX - rect.left;
  const y = e.touches[0].clientY - rect.top;
  joystickX = x - rect.width / 2;
  joystickY = y - rect.height / 2;
  joystick.style.top = `${joystickY}px`;
  joystick.style.left = `${joystickX}px`;
  socket.emit('mouse_move', { x: joystickX, y: joystickY });
});

clickMouseButton.addEventListener('click', () => {
  socket.emit('mouse_click');
});

scrollMouseUpButton.addEventListener('click', () => {
  socket.emit('mouse_scroll', { direction: 'up' });
});

scrollMouseDownButton.addEventListener('click', () => {
  socket.emit('mouse_scroll', { direction: 'down' });
});