function create(words) {
   let parrentElement = document.getElementById('content')
   parrentElement.style.display = 'block'
   
   words.forEach(element => {
       let div = document.createElement('div')
       let p = document.createElement('p')
       let text = document.createTextNode(element)
       p.appendChild(text)
       div.appendChild(p)
       p.style.display = 'none'
       parrentElement.appendChild(div)
       parrentElement.addEventListener('click', show)
   });
   function show(e) {
       e.target.children[0].style.display = 'block'
   }

}

