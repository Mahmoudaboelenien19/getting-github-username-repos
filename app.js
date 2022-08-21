btn = document.querySelector("button");
inp = document.querySelector("input");
repos = document.getElementById("repos");


mode=true
fetching = async () => {
  try {
    myfetch = await fetch(`https://api.github.com/users/${inp.value}/repos`);
    kk = await myfetch.json();
    if(myfetch.status==404){
      repos.innerHTML = `incorrect username`;
      repos.style.cssText = `text-align:center;`;
    }
    for (i = 0; i < kk.length; i++) {
      reepos = `
    <div class="repo">
    <p>${i + 1} : ${kk[i].name}</p>
    <div class="details">
    <a  class="link"href='https://github.com/${inp.value}/${
        kk[i].name
      }' target="blank">visit</a>
    <p> stars: ${kk[i].stargazers_count}</p>
    </div>
    </div>`;
      repos.insertAdjacentHTML("beforeend", reepos);
    }
  } 
  catch(reason) {
    console.log(reason);   
  } finally {
    console.log("end");
  }
  inp.value = "";
};
btn.onclick = () => {
  if (inp.value !== "") {

    repos.innerHTML = "";
    fetching();
    // setTimeout(() => {
    //         inp.value = "";   

    // }, 100);
  } else {
    repos.innerHTML = `insert username`;
    repos.style.cssText = `text-align:center;`;
  }
};


