import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
    editorProps: {
      attributes: {
        class: 'editor-container'
      }
    },
  })

  return (
    <div>
      <EditorContent editor={editor} />
    </div>
  )
}

export default Tiptap
