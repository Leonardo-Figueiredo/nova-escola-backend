"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Yup = __importStar(require("yup"));
var AppError_1 = __importDefault(require("../errors/AppError"));
var CreateClientService_1 = __importDefault(require("../services/CreateClientService"));
var ClientRepository_1 = __importDefault(require("../repositories/ClientRepository"));
var FindClientService_1 = __importDefault(require("../services/FindClientService"));
var UpdateClientService_1 = __importDefault(require("../services/UpdateClientService"));
var DeleteClientService_1 = __importDefault(require("../services/DeleteClientService"));
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.store = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, nome, email, dataDeNascimento, schema, error_1, createClient, client;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, nome = _a.nome, email = _a.email, dataDeNascimento = _a.dataDeNascimento;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        schema = Yup.object().shape({
                            nome: Yup.string()
                                .max(45, 'Max 45 letters.')
                                .required('Name is required.'),
                            email: Yup.string()
                                .email()
                                .max(45, 'Max 45 letters.')
                                .required('E-mail is required'),
                            dataDeNascimento: Yup.date().required('Born date is required in format mm/dd/yyyy.'),
                        });
                        return [4 /*yield*/, schema.validate(request.body)];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        throw new AppError_1.default(error_1.message);
                    case 4:
                        createClient = new CreateClientService_1.default();
                        return [4 /*yield*/, createClient.execute({
                                nome: nome,
                                email: email,
                                dataDeNascimento: dataDeNascimento,
                            })];
                    case 5:
                        client = _b.sent();
                        return [2 /*return*/, response.status(201).json(client)];
                }
            });
        });
    };
    UserController.prototype.list = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, limite, _c, pagina, schema, error_2, clientRepository, parsedLimite, parsedPagina, clients;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = request.query, _b = _a.limite, limite = _b === void 0 ? 10 : _b, _c = _a.pagina, pagina = _c === void 0 ? 1 : _c;
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 3, , 4]);
                        schema = Yup.object().shape({
                            limite: Yup.number().positive().integer(),
                            pagina: Yup.number().positive().integer(),
                        });
                        return [4 /*yield*/, schema.validate(request.query)];
                    case 2:
                        _d.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _d.sent();
                        throw new AppError_1.default(error_2.message);
                    case 4:
                        clientRepository = typeorm_1.getCustomRepository(ClientRepository_1.default);
                        parsedLimite = Number(limite);
                        parsedPagina = Number(pagina);
                        return [4 /*yield*/, clientRepository.getClientList({
                                parsedLimite: parsedLimite,
                                parsedPagina: parsedPagina,
                            })];
                    case 5:
                        clients = _d.sent();
                        return [2 /*return*/, response.json(clients)];
                }
            });
        });
    };
    UserController.prototype.show = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, schema, error_3, findClientService, client;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        schema = Yup.object().shape({
                            id: Yup.number().positive().integer().required('ID is required.'),
                        });
                        return [4 /*yield*/, schema.validate(request.params)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _a.sent();
                        throw new AppError_1.default(error_3.message);
                    case 4:
                        findClientService = new FindClientService_1.default();
                        return [4 /*yield*/, findClientService.execute(Number(id))];
                    case 5:
                        client = _a.sent();
                        return [2 /*return*/, response.json(client)];
                }
            });
        });
    };
    UserController.prototype.update = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, nome, email, dataDeNascimento, paramsSchema, bodySchema, error_4, updateClientService, client;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = request.params.id;
                        _a = request.body, nome = _a.nome, email = _a.email, dataDeNascimento = _a.dataDeNascimento;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        paramsSchema = Yup.object().shape({
                            id: Yup.number().positive().integer().required('ID is required.'),
                        });
                        bodySchema = Yup.object().shape({
                            nome: Yup.string().max(45, 'Max 45 letters.'),
                            email: Yup.string().email().max(45, 'Max 45 letters.'),
                            dataDeNascimento: Yup.date(),
                        });
                        return [4 /*yield*/, bodySchema.validate(request.body)];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, paramsSchema.validate(request.params)];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_4 = _b.sent();
                        throw new AppError_1.default(error_4.message);
                    case 5:
                        updateClientService = new UpdateClientService_1.default();
                        return [4 /*yield*/, updateClientService.execute({
                                id: id,
                                nome: nome,
                                email: email,
                                dataDeNascimento: dataDeNascimento,
                            })];
                    case 6:
                        client = _b.sent();
                        return [2 /*return*/, response.json(client)];
                }
            });
        });
    };
    UserController.prototype.destroy = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, schema, error_5, deleteClientService;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        schema = Yup.object().shape({
                            id: Yup.number().positive().integer().required('ID is required.'),
                        });
                        return [4 /*yield*/, schema.validate(request.params)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_5 = _a.sent();
                        throw new AppError_1.default(error_5.message);
                    case 4:
                        deleteClientService = new DeleteClientService_1.default();
                        return [4 /*yield*/, deleteClientService.execute(Number(id))];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, response.send()];
                }
            });
        });
    };
    return UserController;
}());
exports.default = new UserController();
