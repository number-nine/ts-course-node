import { Tcp } from "./Tcp";
import { ServiceInterface } from "types/services";

export class App implements ServiceInterface {
    private static instance: App;
    private tcp: ServiceInterface = new Tcp();

    constructor() {
        if (!App.instance) {
            App.instance = this;
        }

        return App.instance;
    }

    async init() {
        
    }
}