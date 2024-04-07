// Import React dependencies
import { useEditor, EditorContent } from "@tiptap/react";

const RichTextContent = ({ content }) => {
  // Initialize the editor
  const editor = useEditor({
    content: content,
    editable: false,
  });

  // Return only if the editor is initialized
  if (!editor) {
    return null;
  }

  return <EditorContent editor={editor} />;
};

export default RichTextContent;
