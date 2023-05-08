import { NoteService } from "../services/note.service";
import { CreateNoteDTO } from "../dtos/note.dto";
export declare class NoteController {
    private noteService;
    constructor(noteService: NoteService);
    createANote(res: any, createNoteDTO: CreateNoteDTO): Promise<any>;
    getAllNotes(res: any): Promise<any>;
    getANote(res: any, _id: string): Promise<any>;
    updateCustomer(res: any, createNoteDTO: CreateNoteDTO, _id: string): Promise<any>;
    deleteCustomer(res: any, _id: any): Promise<any>;
}
