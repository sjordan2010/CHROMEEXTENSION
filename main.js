// prepend to body element
    const body = document.querySelector('body div');
    // white div w/ message and question want to play that sends to snake game
    const newDiv = document.createElement('div');
    newDiv.style.width = '100%';
    newDiv.style.height = '250px';
    newDiv.style.border = '5px solid red';

    body.prepend(newDiv)
// position absolute?
// change z index
