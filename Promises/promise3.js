const GITHUB_API = "https://api.github.com/users/sakshibobade21";

const temp = fetch(GITHUB_API);
temp
  .then(resp => console.log(resp))
  .catch(err => console.log(err))

fetch(GITHUB_API)
  .then(res => console.log(res))
  .catch(err => console.log(err))