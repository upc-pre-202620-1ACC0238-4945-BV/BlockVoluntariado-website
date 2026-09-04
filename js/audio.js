const musicBtn=document.getElementById('musicBtn');
const landingMusic=document.getElementById('landingMusic');
const musicToast=document.getElementById('musicToast');
function toast(message){if(!musicToast)return;musicToast.textContent=message;musicToast.classList.add('show');clearTimeout(window.__musicToastTimer);window.__musicToastTimer=setTimeout(()=>musicToast.classList.remove('show'),2600)}
function syncMusicButton(){if(!musicBtn||!landingMusic)return;const playing=!landingMusic.paused;musicBtn.classList.toggle('playing',playing);musicBtn.setAttribute('aria-label',playing?'Pausar música':'Reproducir música');musicBtn.setAttribute('title',playing?'Pausar música':'Reproducir música')}
musicBtn?.addEventListener('click',async()=>{if(!landingMusic)return;try{if(landingMusic.paused){await landingMusic.play();toast('Música activada 🎵')}else{landingMusic.pause();toast('Música pausada')}}catch(error){toast('Agrega tu MP3 en audio/landing-theme.mp3');console.warn('No se pudo reproducir el audio:',error)}});
landingMusic?.addEventListener('play',syncMusicButton);landingMusic?.addEventListener('pause',syncMusicButton);landingMusic?.addEventListener('error',()=>toast('Falta audio/landing-theme.mp3'));
