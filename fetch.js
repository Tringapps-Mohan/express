const url1 = "https://jsonplaceholder.typicode.com/todos/";
const url2 = "https://www.boredapi.com/api/activity";
const https = require("https");
const fetch = (url)=>new Promise((resolve,reject)=>{
    {
        const request = https.get(url,(res)=>{
            let data = "";
            res.on("data",(chunk)=>{
                data += chunk;
            });
    
            res.on("end",()=>{
                resolve(data);
            });
        });

        request.on("error",(error)=>{
            reject(error);
        });

        request.end();
    }
});


//let url = process.argv[0];

// fetch(url2).then(res=>console.log(res,typeof(res))).catch(err=>console.log(err));

module.exports = (req,res,next)=>{
    let {api} = req.params;
    let data;
    switch(api){
        case "bored":
        fetch(url2).then(res=>res.json()).then(res=>data=res).catch(e=>data=e);
        break;
        case "json":
            fetch(url2).then(res=>res.json()).then(res=>data=res).catch(e=>data=e);
            break;
        default:
            data="undefined";
    }
    res.data = data;
    next();
};