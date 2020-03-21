// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const newTab = (topics) => {
  const tab = document.createElement('div')
  tab.classList.add('tab')
  tab.textContent = topics
  return tab
}
const entryPoint = document.querySelector('.topics')

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then((response) => {
  console.log('array of topics', response.data.topics)
  
  response.data.topics.forEach(topic => {
    const newTopic = newTab(topic)
    entryPoint.appendChild(newTopic)
  })
})
.catch((err) => {
  console.log(err)
})