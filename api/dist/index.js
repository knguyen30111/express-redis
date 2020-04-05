"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const PORT = process.env.PORT || 3500;
app.get('/', (req, res) => res.json({ message: 'OK' }));
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
//# sourceMappingURL=index.js.map