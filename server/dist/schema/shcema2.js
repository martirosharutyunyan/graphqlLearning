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
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const postgres_1 = require("./postgres");
const users = () => __awaiter(void 0, void 0, void 0, function* () {
    let promise = new Promise((res, rej) => {
        postgres_1.client.query('SELECT * FROM users', (err, data) => {
            if (err)
                throw err;
            res(data.rows);
        });
    });
    return yield promise;
});
users();
const userType = new graphql_1.GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        email: { type: graphql_1.GraphQLString },
        name: { type: graphql_1.GraphQLString },
        surname: { type: graphql_1.GraphQLString },
        password: { type: graphql_1.GraphQLString },
    })
});
const Query = new graphql_1.GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        user: {
            type: userType,
            args: { email: { type: graphql_1.GraphQLString } },
            resolve(parents, args) {
                return __awaiter(this, void 0, void 0, function* () {
                    let data = yield users();
                    return data.find((elem) => elem.email == args.email);
                });
            }
        },
        users: {
            type: new graphql_1.GraphQLList(userType),
            resolve(parent, args) {
                return __awaiter(this, void 0, void 0, function* () {
                    let data = yield users();
                    return data;
                });
            }
        }
    })
});
exports.schema = new graphql_1.GraphQLSchema({
    query: Query,
});
//# sourceMappingURL=shcema2.js.map