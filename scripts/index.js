const main = () => {
    let parent = document.querySelector('#root')
    let newChildDiv = document.createElement('div')
    newChildDiv.className = "newChildDiv"
    newChildDiv.innerHTML = 'Generate your monthly rent receipts'
    parent.appendChild(newChildDiv)
}


main()