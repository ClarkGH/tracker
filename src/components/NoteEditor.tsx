import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror'
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';

export const NoteEditor = ({
  onSave,
}: {
  onSave: (note: { title: string; content: string; }) => void;
}) => {
  const [code, setCode] = useState<string>('');
  const [title, setTitle] = useState<string>('');

  return (
    <div>
      <input
        type='text'
        placeholder='Note Title'
        value={ title }
        onChange={(e) => setTitle(e.currentTarget.value)}
      />

      <CodeMirror
        value={code}
        width="500px"
        height="300px"
        extensions={[
          markdown({ base: markdownLanguage, codeLanguages: languages }),
        ]}
        onChange={(value) => setCode(value)}
      />

      <button
        onClick={() => {
          onSave({ title, content: code });
          setCode("");
          setTitle("");
        }}
        disabled={ title.trim().length === 0 || code.trim().length === 0 }
      >
        Save
      </button>
    </div>
  );
};
