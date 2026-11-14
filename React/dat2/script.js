const root = document.querySelector('#root')

let realDomElement = React.createElement("h1" , {} , "happy Children Day")

let reactDomElement = ReactDOM.createRoot(root).render(realDomElement)
