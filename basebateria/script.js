document.body.addEventListener('keyup', (event)=> {
  playSound(event.code.toLocaleLowerCase() );
});

function playSound(sound){
   let audioElement = document.querySelector(`#s_${sound}`);
   let keyElement = document.querySelector(`div[data-key="${sound}"]`);

   if(audioElement){
    audioElement.play();
   }

   if(keyElement){
    keyElement.classList.add('active');
   }
}

//18:30 parei