export const changeTheme = () => {
    const themeBtn = document.querySelector("#themeBtn");
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("light");
      changeThemeText();
    });
  };
  
export const changeThemeText = () => {
    const themeBtn = document.querySelector("#themeBtn");
    if (themeBtn.innerText === "☀️") {
      themeBtn.innerText = "🌑";
    } else {
      themeBtn.innerText = "☀️";
    }
  };