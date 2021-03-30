"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const postgres_1 = require("./schema/postgres");
const express_graphql_1 = require("express-graphql");
const port = process.env.port;
const schema_1 = require("./schema/schema");
// import { schema } from './schema/shcema2';
const app = express_1.default();
postgres_1.client.connect((err) => {
    if (err)
        throw err;
    console.log('postgresDB connected');
});
app.use(cors_1.default());
app.use(morgan_1.default(`dev`));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: false
}));
app.use('/graphql', express_graphql_1.graphqlHTTP({
    schema: schema_1.schema,
    graphiql: true,
}));
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send('ok');
    }
    catch (err) {
        console.log(err);
    }
}));
app.listen(port, () => console.log(`server running on http://localhost:${port}`));
console.log(`http://localhost:${port}/graphql`);
//# sourceMappingURL=server.js.map