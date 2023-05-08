import { Model } from "mongoose";
import { Note } from "../interfaces/note.interface";
import { CreateNoteDTO } from "../dtos/note.dto";
export declare class NoteService {
    private readonly noteModel;
    constructor(noteModel: Model<Note>);
    createANote(createNoteDTO: CreateNoteDTO): Promise<Note>;
    getAllNotes(): Promise<Note[]>;
    getANote(noteId: any): Promise<Note>;
    updateANote(_id: any, createNoteDTO: CreateNoteDTO): Promise<Note>;
    deleteANote(_id: any): Promise<any>;
}
