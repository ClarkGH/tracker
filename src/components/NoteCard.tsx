import ReactMarkdown from 'react-markdown';
import { Note } from '@prisma/client';

export const NoteCard = ({
  note,
  onDelete,
} : {
  note: Note;
  onDelete: () => void;
}) => {
  return (
    <div>
      <p>{note.title}</p>
      <ReactMarkdown>{note.content}</ReactMarkdown>
      <button
        onClick={onDelete}
      >
        Baleet Note
      </button>
    </div>
  );
};
