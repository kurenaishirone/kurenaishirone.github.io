function getEl(id) {
  return document.getElementById(id);
}
const articleNumber = getEl("articleNumber");
const result = getEl("result");
async function search() {
  const response = await fetch(`https://api.kurenaishirone.xyz/locate?num=${articleNumber.value}`);
  const data = await response.json();
  result.textContent = data;
}