let baycouf = require("express");
let cors = require("cors");
let app = baycouf();
app.use(cors());
app.get("/", (req, res) => {
    res.send("Default web page");
});
app.get("/dad/is/a/baycouf", (req, res) => {
    let commits = [
        {
           author: {
                login: "rwashikar"
            }
        }, 
        {
            author: {
                login: "gwashikar"
            }
        }
    ];
    res.send(commits);
});
app.listen(5305, () => {
    console.log("Listening on port 5305");
})