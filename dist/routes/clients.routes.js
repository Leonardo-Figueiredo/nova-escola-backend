"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prefer-destructuring */
var express_1 = require("express");
var UserController_1 = __importDefault(require("../controllers/UserController"));
var clientsRouter = express_1.Router();
clientsRouter.post('/', UserController_1.default.store);
clientsRouter.get('/', UserController_1.default.list);
clientsRouter.get('/:id', UserController_1.default.show);
clientsRouter.put('/:id', UserController_1.default.update);
clientsRouter.delete('/:id', UserController_1.default.destroy);
exports.default = clientsRouter;
