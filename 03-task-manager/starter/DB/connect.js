const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://varshney:Sj55888@cluster0.jqzobx2.mongodb.net/03-task-manager?retryWrites=true&w=majority";

mongoose
    .connect(connectionString,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify:false,
        useUnifiedTopology: true,
    })
    .then(() => console.log(`connected to DB`))
    .catch((err)=>console.log(err))

