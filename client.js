document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("button").addEventListener("click", async () => {
        let url = "http://localhost:80/dad/is/a/baycouf"
        let response = await fetch(url);
        let commits = await response.json();
        alert(commits[1].author.login);
    })
})