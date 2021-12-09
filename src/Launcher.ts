import { AppConfiguration } from "./Configurations/AppConfiguration";
import { Codable } from "./Model/Codable";
import { AppServer } from "./Server/AppServer";

class Launcher {

    private appConfiguration: AppConfiguration = new AppConfiguration();
    private server: AppServer

    constructor() {
        this.server = new AppServer(this.appConfiguration.port);
    }

    public launchApp() {
        console.log('Started app');
        this.server.createServer();
    }
}

new Launcher().launchApp();


// const foo = async () => {

//     const password = "1234";
//     let c = new Codable(undefined);
//     let hash = await c.encrypt({text: "text about something long long", password: password});

//     console.log("encrypted:");
//     console.log(hash);

//     let text = await c.decrypt({hash: hash, password: password});

//     console.log("decrypted:");
//     console.log(text);
// };

// foo();