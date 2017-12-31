function component() {
    var element = document.createElement('div');
    element.innerHTML = 'Hello base';
    return element;
}

document.body.appendChild(component());