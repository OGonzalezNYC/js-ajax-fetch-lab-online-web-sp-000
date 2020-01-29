const baseURL = 'https://api.github.com';
const user = 'ogonzaleznyc';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  
  //return '';
  
  return '489ac3f778101b4b143134d6b1420acda00e75cd';
  
  //return '';
}

function forkRepo() {
  
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  
  //POST /repos/:owner/:repo/forks
  //fetch(`${baseURL}/repos/${repo}/forks`, 
  fetch(`${baseURL}/repos/${repo}/forks`, 
    {method: 'POST', headers:
      {Authorization: `token ${getToken()}`
      }
    }).then(response => response.json())
    .then( json => console.log(json));
    //.then(json => showResults(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  
  //$('#results').innerHTML = json;
  //document.getElementById('results').innerHTML = json;
  
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
