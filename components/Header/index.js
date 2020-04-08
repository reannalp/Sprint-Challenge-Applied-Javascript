// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
const createHeader = () => {
  const header = document.createElement('div')
  header.classList.add('header')
  const date = document.createElement('span')
  date.classList.add('date')
  const h1 = document.createElement('h1')
  const temp = document.createElement('span')
  temp.classList.add('temp')

  header.appendChild(date)
  header.appendChild(h1)
  header.appendChild(temp)

  date.textContent = 'SMARCH 28, 2019'
  h1.textContent = 'Lambda Times'
  temp.textContent = '98°'

  return header
};

const container = document.querySelector('.header-container')
container.appendChild(createHeader())
// function Header() {}