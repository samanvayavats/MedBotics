import mongoose from "mongoose";

const dbconnect = async () => {
    try {
        const response = await mongoose.connect(`${process.env.CONNECT_URL}`||'')
        console.log('the database has been connected succefuly')
    } catch (err: any) {
        console.log('the error in connecting the db', err)
        throw new Error("something went wrong at the time of connecting the database ")
    }
}

export default dbconnect