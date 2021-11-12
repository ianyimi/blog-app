import app from "../firebase";
import {useState} from "react";
import { v4 as uuid } from "uuid";

export default function AddArticle() {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const ref = app.firestore().collection("articles");

  function addArticle(article) {
    ref.doc(article.id).set(article).catch((err) => {
      console.error(err)
    })
  }

  return (
    <div>
      <h2>Add Article</h2>
      <div>
        <div>
          <h4>Title</h4>
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <h4>Author</h4>
          <input type="text" onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div>
          <h4>Content</h4>
          <textarea onChange={(e) => {setContent(e.target.value)}} />
        </div>

        <button onClick={(e) => {
          e.preventDefault();
          addArticle({ title, author, content, id: uuid()
        })}}>Submit</button>
      </div>
    </div>
  )
}
