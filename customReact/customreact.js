
function coustomRender(reactElement,container){
    /*
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.Children
    domElement.setAttribute('href',reactElement.prop.href)
    domElement.setAttribute('target',reactElement.prop.target)
    container.appendChild(domElement)
    */

    //another way
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.Children
    for (const prop in reactElement.props) {
        if(prop==='children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
        
    }
    container.appendChild(domElement)

    

}
const reactElement={
    type:"a",
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    Children:"click me to visit google"
}

const mainContainer=document.getElementById("root")
coustomRender(reactElement,mainContainer)