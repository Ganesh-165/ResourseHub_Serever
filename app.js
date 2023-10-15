const express = require('express')
const app = express()
const {sslc} = require('./Schema.js')
const {hsc} = require('./Schema.js')
const {neet} = require('./Schema.js')
const {jee} = require('./Schema.js')
const cors = require('cors');
const { corsOptions } = require('./credentials.js')


app.use(express.json());
app.use((req,res,next)=>{
    console.log("Header Seeting");
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.post('/sslc',async(req,res) => {
    try{
        const{year,examtype,subject,medium} = req.body
        const answerarray = await sslc.find(
            { $and: [ { Year: year }, { Exam_Type: examtype}, {Subject: subject}, {Medium : medium} ] }
        )
        if(answerarray.length===0){
            return res.send('No Data Found')
        }
        const ans = answerarray[0].Link
        res.send(ans)
    }catch(err){
        console.log('Sslc err',err);
    }
}
)

app.post('/hsc',async(req,res) => {
    try{
        const{standard,year,examtype,subject,medium} = req.body
        const answerarray = await hsc.find(
                { $and: [ { Standard: standard}, { Year: year}, {Exam_Type:examtype},{Subject: subject}, {Medium : medium} ] }
            )
        if(answerarray.length===0){
            return res.send('No Data Found')
        }
        const ans = answerarray[0].Link
        res.send({ans:ans})
    }catch(err){
        console.log("Hsc Err",err);
    }
}
)

app.post('/neet',async(req,res) => {
    try{
        const{year,month,shift} = req.body
        const answerarray = await neet.find(
                { $and: [ { Year: year}, { Month: month}, {Shift: shift} ] }
            )
        if(answerarray.length===0){
            return res.send('No Data Found')
        }
        const ans = answerarray[0].Link
        res.send({ans:ans})
        }
    catch(err){
        console.log("Neet Err",err);
    }
}
)



app.post('/jee',async(req,res) => {
    try{
        const{year,type,month,shift} = req.body
        const answerarray = await jee.find(
            { $and: [ { Year: year},{Type: type}, { Month: month}, {Shift:shift} ] }
        )
        if(answerarray.length===0){
            res.send('No Data Found')
            return;
        }
        const ans = answerarray[0].Link
        res.send({ans:ans})
    }catch(err){
        console.log("Jee",err);
    }
}
)

app.listen(5000,() => {
    console.log('Server Listening To Port NUmber 5000...')
})