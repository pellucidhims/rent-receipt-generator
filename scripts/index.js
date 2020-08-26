const main = () => {
    let parent = document.querySelector('#root')
    let newChildDiv = document.createElement('div')
    newChildDiv.className = "newChildDiv"
    newChildDiv.innerHTML = 'This div is appended dynamically. Hover over me!'
    parent.appendChild(newChildDiv)
}


main()