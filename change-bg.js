// create an BUTTON node
let button = document.createElement('BUTTON');
// set a className to Button
button.className = 'btn';
// set a ID to Button
button.id = 'buttonID';
// create a Text node
let text = document.createTextNode('Change BG');
// append the Text node to the BUTTON node
button.appendChild(text);
// append the BUTTON node to the div#container
container.appendChild(button);

// change a background-color to body
const changeBg = () => {
    const color = ['yellow', 'red', 'green', 'blue', 'black', 'orange', 'pink']
    const randomColor = Math.floor(Math.random() * color.length)

    document.body.style.backgroundColor = `${color[randomColor]}`
}

// onClick on button call the changeBg() function
button.addEventListener('click', changeBg);
