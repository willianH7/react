import { Post } from './Post';
import { Header } from './components/Header';
import './global.css'
import style from './App.module.css';

export function App() {

  return (

    <div className="div">
      <Header />
      <div className={style.Wrapper}>
        <aside>sidebar</aside>
        <main>
          <Post
            author="Willian"
            content="daçlkfndswlvfnsdlkvndçlknmsdçkfgnmsd"
          />

          <Post
            author="Julin"
            content="daçlkfndswlvfnsdlkvndçlknmsdçkfgnmsd"
          />
        </main>
      </div>


    </div>
  )
}
