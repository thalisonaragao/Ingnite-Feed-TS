import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import "./global.css"

const posts = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/thalisonaragao.png',
      name: 'Thalison Aragão',
      role: 'Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋',},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2025-03-23 20:00:00'),  
  },

  {
    id: 2,
    author:{
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.png',
      name: 'João Silva',
      role: 'Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋',},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2025-03-24 20:00:00'),  
  },
];

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
         {posts.map(post => {
          return(
            <Post 
              key = {post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
         })}  
        </main>
      </div>
    </div>
  )
}