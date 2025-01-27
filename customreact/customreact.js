
function customRender(reactElement, mainContainer){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.Children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    // mainContainer.appendChild(domElement)
    
    
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children
    for(const prop in reactElement.props){
        if (domElement === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    mainContainer.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'http://google.com',
        target: 'blank'
    },
    Children: 'Click me to visit google.'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)
