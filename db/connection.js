const mongoose=require('mongoose')
mongoose.connect(process.env.BASE_URL,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("_______MOngoDb Atlas Connected__________");
}).catch(()=>{
    console.log("_______MOngoDb Atlas Not Connected__________");
})