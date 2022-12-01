const body = document.querySelector('body div');
    // white div w/ message and question want to play that sends to snake game
    const newDiv = document.createElement('div');
    newDiv.style.width = '100%';
    newDiv.style.height = '820px';
    newDiv.style.border = '6px double darkblue';
    newDiv.style.borderRadius = '25px'
    newDiv.style.position = 'fixed';
    newDiv.style.backgroundColor = 'black';
    newDiv.style.zIndex = '9999';
    newDiv.style.marginTop = '100px';
    newDiv.innerText = "Why learn to code, when I already did the coding for you!? Click to play!";
    newDiv.style.textAlign = 'center';
    newDiv.style.paddingTop = '40px';
    newDiv.style.fontSize = '35px';
    newDiv.style.fontFamily = 'Garamond';
    
    const btnContainer = document.createElement('div');
    btnContainer.setAttribute('id', 'btnContainer');
    btnContainer.style.display = 'flex';
    btnContainer.style.zIndex = '8';
    btnContainer.style.justifyContent = 'center';
    btnContainer.style.gap = '50px';
    btnContainer.style.backgroundColor = 'black';
    btnContainer.style.marginTop = '20px';
    btnContainer.style.fontSize = '20px';
    btnContainer.style.fontWeight = 'bold';

    const playBtn = document.createElement('button');
    playBtn.classList.add('btn');
    playBtn.setAttribute('id', 'playBtn');
    playBtn.innerText = "Yes, I'll play";
    playBtn.style.padding = '5px 0px';
    playBtn.style.width = "180px";
    playBtn.style.borderRadius = '50px';
    playBtn.style.background = 'yellow';
    playBtn.style.color = 'darkblue';

    const noPlayBtn = document.createElement('button');
    noPlayBtn.setAttribute('id', 'noPlayBtn');
    noPlayBtn.classList.add('btn');
    noPlayBtn.innerText = "Nah, I'm good.";
    noPlayBtn.style.padding = '5px 0px';
    noPlayBtn.style.width = "180px";
    noPlayBtn.style.borderRadius = "50px";
    noPlayBtn.style.backgroundColor = 'yellow';
    noPlayBtn.style.color = 'darkblue';
    
    const pacman = document.createElement('img');
    const imgURL = chrome.runtime.getURL("pac-man.gif")
    pacman.src = imgURL;
    
    btnContainer.append(noPlayBtn);
    btnContainer.append(playBtn);
    newDiv.append(btnContainer);
    newDiv.append(pacman);
    body.prepend(newDiv);

noPlayBtn.addEventListener('click', function() {
    newDiv.style.display = 'none'
});

playBtn.addEventListener('click', function() {
    location.href = 'https://dancing-tapioca-e617ee.netlify.app/'
});

noPlayBtn.addEventListener('mouseover', function() {    
	if (noPlayBtn.style.transform === 'translateX(-200px)')
        noPlayBtn.style.transform = 'translateX(0px)';
    else noPlayBtn.style.transform = 'translateX(-200px)';
});

playBtn.addEventListener('mouseover', function() {
    playBtn.style.backgroundColor = 'darkblue';
    playBtn.style.color = 'yellow';
    playBtn.style.cursor = 'pointer';
});

playBtn.addEventListener("mouseout", function () {
  playBtn.style.backgroundColor = "yellow";
  playBtn.style.color = "darkblue";
  playBtn.style.cursor = 'default';
});


let x = 0;
function movePacman() {
    if(x < 1800) {
        x += 50;
        pacman.style.transform = `translateX(${x}px)`;
    } else {
        x = 0;
        pacman.style.transform = `translateX(${x}px)`;
    }
}

setInterval(movePacman, 250);