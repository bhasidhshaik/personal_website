import { render } from "ejs";
import express from "express" ;

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/" , (req , res)=>{
    res.render("index.ejs");
})
app.get("/pages/work" , (req , res)=>{
    res.render("pages/work.ejs");
})

app.listen(port , (req , res)=>{
    console.log(`Server is running on port ${port }`)
})