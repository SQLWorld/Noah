const greeting = document.getElementById("greeting");
const myDate = new Date ();
const myHours = myDate.getHours();


if(myHours < 12) {
    greeting.innerText = "Good morning, welcome to my page!";
} else if (myHours < 18) {
    greeting.innerText = "Good afternoon, welcome to my page!";
} else{
    greeting.innerText = "Good night, welcome to my page!";
}

const pagePic = document.getElementById("pic");

pagePic.onclick = function changeStyle(){
    pagePic.style.styleHover = "";
};

// Commit your changes to your local repository with git commit -am "comment"
// Pull the latest changes from the central repository with git pull upstream master or git pull
// Push your changes to your fork on GitHub with git push origin master or git push -u origin main
// Create a pull request to merge your changes to the central repository