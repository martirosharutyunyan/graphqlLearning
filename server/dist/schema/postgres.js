"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const pg_1 = require("pg");
exports.client = new pg_1.Client({
    database: process.env.postgresDBname,
    password: process.env.postgresDBpassword,
    port: 5432,
    host: 'localhost',
    user: 'postgres',
});
//# sourceMappingURL=postgres.js.map