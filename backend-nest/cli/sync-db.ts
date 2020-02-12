import { DatabaseService } from "../src/database/database.service";
import { ConfigService } from "../src/config/config.service";
const configService = new ConfigService('.env');
const databaseService = new DatabaseService();
databaseService.initDB().then(() => {
    databaseService.sync(false);
});