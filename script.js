const categories = document.getElementById('articlecategories');
const list = document.getElementById('links');

const categorieslist = ["Health", "Food"]

const listforeach = {
  "Health": "Gas stoves can be dangerous and polluting, Overuse of electronics is not a good thing",
  "HealthLinks": "https://qz.com/1941254/experts-are-sounding-the-alarm-about-the-dangers-of-gas-stoves/?utm_source=pocket-newtab, https://www.uchealth.org/today/overuse-electronics-not-good-thing/",
  "Food": "Why processed meats increase the risk...",
  "FoodLinks": "https://www.aicr.org/resources/blog/processed-meat-and-cancer/"
}
window.loading = false;
const redirect = (redirectlocation) => {
  console.log('redirect');
  if (window.loading != true) {
    window.location.href = redirectlocation;
  }
}

const appendLinks = (cats) => {
  console.log('function');
  if (cats === 'Health') {
    window.loading = true;
    list.innerHTML = '';
    for (var i = 0; i < listforeach["Health"].split(",").length; i++) {
      const splitObject = listforeach["Health"].split(",");
      const splitObject2 = listforeach["HealthLinks"].split(",");
      const anElementThatsAList = document.createElement('li');
      anElementThatsAList.innerHTML = splitObject[i];
      anElementThatsAList.setAttribute('onclick', 'redirect(' + '"' + splitObject2[i] + '"' + ')');
      list.appendChild(anElementThatsAList)
      anElementThatsAList.onmouseover = function () {
        anElementThatsAList.style.color = 'rgb(156, 156, 250)';
        anElementThatsAList.style = 'cursor: pointer; color: rgb(156, 156, 250);';
      }
      anElementThatsAList.onmouseleave = function () {
        anElementThatsAList.style.color = 'black';
      }
    }
    window.loading = false;
  }
  if (cats === 'Food') {
    window.loading = true;
    list.innerHTML = '';
    for (var i = 0; i < listforeach["Food"].split(",").length; i++) {
      const splitObject = listforeach["Food"].split(",");
      const splitObject2 = listforeach["FoodLinks"].split(",");
      const anElementThatsAList = document.createElement('li');
      anElementThatsAList.innerHTML = splitObject[i];
      anElementThatsAList.setAttribute('onclick', 'redirect(' + '"' + splitObject2[i] + '"' + ')');
      list.appendChild(anElementThatsAList)
      anElementThatsAList.onmouseover = function () {
        anElementThatsAList.style.color = 'rgb(156, 156, 250)';
        anElementThatsAList.style = 'cursor: pointer; color: rgb(156, 156, 250);';
      }
      anElementThatsAList.onmouseleave = function () {
        anElementThatsAList.style.color = 'black';
      }
    }
    window.loading = false;
  }
}

const bugReport = () => {
  window.location.href = 'https://github.com/darmiyaevdeveloper/Unaware/issues';
}

for (var i = 0; i < categorieslist.length; i++) {
  const myElement = document.createElement('button');
  myElement.innerHTML = categorieslist[i];
  myElement.style = 'background-color: #F5F6F7; transition: 0.5s; font-family: \'Montserrat\', sans-serif; border: 1px solid black; border-radius: 2px; width: 15vw; height: 15vh;';
  myElement.onmouseover = function () {
    myElement.style = 'background-color: rgb(156, 156, 250); transition: 0.5s; font-family: \'Montserrat\', sans-serif; border: 1px solid black; border-radius: 2px; width: 15vw; height: 15vh;'
  }
  myElement.onmouseleave = function () {
    myElement.style = 'background-color: #F5F6F7; transition: 0.5s; font-family: \'Montserrat\', sans-serif; border: 1px solid black; border-radius: 2px; width: 15vw; height: 15vh;';
  }
  myElement.setAttribute('onclick', 'appendLinks("' + categorieslist[i] + '")');
  categories.appendChild(myElement);
}