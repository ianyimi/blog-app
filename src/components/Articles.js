import app from "../firebase";
import {useContext, useEffect, useState} from "react";
import AddArticle from "./AddArticle";
import { AuthContext } from "./Auth";
import firebase from "firebase/compat";

export default function Articles() {

  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  const { currentUser } = useContext(AuthContext);

  console.log(currentUser)
  const ref = app.firestore().collection("articles");

  function getArticles() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({id: doc.id, ...doc.data()});
      })
      setArticles(items);
      setLoading(false);
    })
  }

  useEffect(() => {
    getArticles();
  }, [])

  function deleteArticle(article) {
    ref.doc(article.id).delete().catch((err) => {
      console.error(err)
    })
  }

  if (loading) {
    return (
      <h1>Loading...</h1>
    )
  }

  function SignIn() {
    const googleAuth = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleAuth)
      .then((re) => {
        console.log(re)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  function SignOut() {
    firebase.auth().signOut();
  }

  if (!currentUser) {
    return (
      <div>
        <button onClick={SignIn}>Sign In</button>
      </div>
    )
  }

  return (
    <div id="articles">
      <h1>The Daily Blog</h1>
      <AddArticle />
      {articles.map((article) => (
        <div className="article">
          <h4 id="title">{article.title}</h4>
          <p id="author">{article.author}</p>
          <button id="delete" onClick={(e) => {
            e.preventDefault();
            deleteArticle(article);
          }}>x</button>
        </div>
      ))}
      <button onClick={SignOut}>Sign Out</button>
    </div>
  )
}
