import { Attachment } from "../Attachment";
import { ListId } from "../List";
import { Label } from "../Label";
import { Comment } from "../Comment";

export type CardId = string;

export interface Card {
    id: CardId;
    parentListId: ListId;
    position: number;
    coverURL: string | null;
    coverId?: string;
    description: string;
    title: string;
    attachments: Attachment[];
    labels: Label[];
    comments: Comment[];
}
