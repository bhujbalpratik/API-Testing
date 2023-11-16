import mongoose from "mongoose"

export const MongoConnection = () => {

    mongoose.connect(process.env.MONGO_URL, {
        dbName: "API_Testing"
    }).then(() => console.log("Mongo Connected")).catch((err) => console.log(err))
}