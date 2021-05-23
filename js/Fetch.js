const jsonButton = document.querySelector('#generate');
const buttonContainer = document.querySelector('#buttonContainer');
const display = document.querySelector('#displayContainer');
const collection = ["Another", "More", "Next", "Continue", "Keep going", "Click me", "A new one"];
function generateJson(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(renderResponse).then(changeButton);
    }
  )
  const formatJson = (resJson) => {
    resJson = JSON.stringify(resJson);
    let counter = 0;
    return resJson.split('')
    .map(char => {
      switch (char) {
        case ',':
          return `,\n${' '.repeat(counter * 2)}`;
        case '{':
          counter += 1;
          return `{\n${' '.repeat(counter * 2)}`;
        case '}':
          counter -= 1;
          return `\n${' '.repeat(counter * 2)}}`;
        default:
          return char;
      }
    })
    .join('');
  }
  
  const renderResponse = (jsonResponse) => {
    const jsonSelection = Math.floor(Math.random() * 10);
    display.innerHTML = `<pre>${formatJson(jsonResponse[jsonSelection])}</pre>`;
  }
  const changeButton = () => {
    const newText = Math.floor(Math.random() * 7);
    jsonButton.innerHTML = `${collection[newText]}!`;
  }
}
jsonButton.addEventListener('click', generateJson);