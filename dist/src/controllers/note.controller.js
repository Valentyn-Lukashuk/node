"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const note_service_1 = require("../services/note.service");
const note_dto_1 = require("../dtos/note.dto");
const swagger_1 = require("@nestjs/swagger");
let NoteController = class NoteController {
    constructor(noteService) {
        this.noteService = noteService;
    }
    async createANote(res, createNoteDTO) {
        const note = await this.noteService.createANote(createNoteDTO);
        return res.status(common_1.HttpStatus.CREATED).json({
            status: 201,
            message: "Successful!",
            data: note
        });
    }
    async getAllNotes(res) {
        const notes = await this.noteService.getAllNotes();
        return res.status(common_1.HttpStatus.OK).json({
            status: 200,
            data: notes
        });
    }
    async getANote(res, _id) {
        const note = await this.noteService.getANote(_id);
        if (!note)
            return res
                .status(common_1.HttpStatus.NOT_FOUND)
                .json({ status: 404, error: "Not found!" });
        return res.status(common_1.HttpStatus.OK).json({ status: 200, data: note });
    }
    async updateCustomer(res, createNoteDTO, _id) {
        const note = await this.noteService.updateANote(_id, createNoteDTO);
        if (!note)
            return res
                .status(common_1.HttpStatus.NOT_FOUND)
                .json({ status: 404, error: "Not found!" });
        return res.status(common_1.HttpStatus.OK).json({
            status: 200,
            message: 'Successful!',
            note
        });
    }
    async deleteCustomer(res, _id) {
        const note = await this.noteService.deleteANote(_id);
        if (!note)
            return res
                .status(common_1.HttpStatus.NOT_FOUND)
                .json({ status: 404, error: "Not found!" });
        return res.status(common_1.HttpStatus.OK).json({
            status: 200,
            message: 'Successful!',
        });
    }
};
__decorate([
    swagger_1.ApiResponse({ status: 201 }),
    common_1.Post('/add'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, note_dto_1.CreateNoteDTO]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "createANote", null);
__decorate([
    swagger_1.ApiResponse({ status: 200 }),
    common_1.Get('/all'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "getAllNotes", null);
__decorate([
    swagger_1.ApiResponse({ status: 200 }),
    common_1.Get("/:noteId"),
    __param(0, common_1.Res()), __param(1, common_1.Param("noteId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "getANote", null);
__decorate([
    swagger_1.ApiResponse({ status: 200 }),
    common_1.Patch('/update/:noteId'),
    __param(0, common_1.Res()), __param(1, common_1.Body()), __param(2, common_1.Param("noteId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, note_dto_1.CreateNoteDTO, String]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "updateCustomer", null);
__decorate([
    swagger_1.ApiResponse({ status: 200 }),
    common_1.Delete('/delete/:noteId'),
    __param(0, common_1.Res()), __param(1, common_1.Param('noteId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "deleteCustomer", null);
NoteController = __decorate([
    swagger_1.ApiTags("Notes"),
    common_1.Controller('note'),
    __metadata("design:paramtypes", [note_service_1.NoteService])
], NoteController);
exports.NoteController = NoteController;
//# sourceMappingURL=note.controller.js.map