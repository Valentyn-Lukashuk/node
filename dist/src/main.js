"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const dotenv = require("dotenv");
const note_module_1 = require("../src/modules/note.module");
dotenv.config();
const PORT = process.env.PORT || 3000;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix("api/v1");
    const options = new swagger_1.DocumentBuilder()
        .setTitle("Notes todo app")
        .setDescription("A documentation for notes")
        .setVersion("1.0")
        .addTag("Notes")
        .build();
    const appDocument = swagger_1.SwaggerModule.createDocument(app, options, {
        include: [note_module_1.NoteModule]
    });
    swagger_1.SwaggerModule.setup("api", app, appDocument);
    await app.listen(PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map