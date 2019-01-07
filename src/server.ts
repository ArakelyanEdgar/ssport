import App from "./App"
import dotenv from "dotenv";

dotenv.config();

const Server = App.listen(App.get("port"), () => {
    console.log(`App is running on port ${App.get("port")} in ${App.get("env")}`)
})

export default Server;