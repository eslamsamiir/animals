const connected = document.querySelector('.connected');

window.addEventListener('online', (event) => {
    connected.play();
});

const cowDiv = document.querySelector('.cow');
const cowSound = document.querySelector('.cowsound');
const audioCtx = new AudioContext();

cowDiv.addEventListener('click', function() {
  /*if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }*/
  
  cowSound.play();
});
cowDiv.addEventListener('touchstart', function() {
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  
  cowSound.play();
});


const sheepDiv = document.querySelector('.sheep');
const sheepSound = document.querySelector('.sheepsound');
const audioCtx2 = new AudioContext();

sheepDiv.addEventListener('click', function() {
  if (audioCtx.state === 'suspended') {
    audioCtx2.resume();
  }

  sheepSound.play();
});
sheepDiv.addEventListener('touchstart', function() {
  if (audioCtx.state === 'suspended') {
    audioCtx2.resume();
  }

  sheepSound.play();
});

const dogDiv = document.querySelector('.dog');
const dogSound = document.querySelector('.dogsound');
const audioCtx3 = new AudioContext();

dogDiv.addEventListener('click', function() {
  if (audioCtx.state === 'suspended') {
    audioCtx3.resume();
  }

  dogSound.play();
});
dogDiv.addEventListener('touchstart', function() {
  if (audioCtx.state === 'suspended') {
    audioCtx3.resume();
  }

  dogSound.play();
});


const catDiv = document.querySelector('.cat');
const catSound = document.querySelector('.catsound');
const audioCtx4 = new AudioContext();

catDiv.addEventListener('click', function() {
  if (audioCtx.state === 'suspended') {
    audioCtx4.resume();
  }

  catSound.play();
});
catDiv.addEventListener('touchstart', function() {
  if (audioCtx.state === 'suspended') {
    audioCtx4.resume();
  }

  catSound.play();
});

