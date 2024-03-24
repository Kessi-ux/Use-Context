import { useState } from 'react'
import { Button } from './components/Button'
import styles from './App.module.css';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const toggleTheme = () => setTheme(theme => theme == 'light' ? 'dark' : 'light');
  
  return (
    <div className = {styles.root}>
      <button className= {theme == 'light' ? styles.light : styles.dark} onClick={toggleTheme}>
        {theme == 'light' ? 'l' : 'd'}
      </button>

      <Button theme = {theme} onClick={() => alert('alpha')}>Alpha</Button>
      <Button theme= {theme} onClick={() => alert('beta')}>Beta</Button>
    
      <form></form>
    </div>
  );
}

const form = (props: { theme: 'light' | 'dark' }) => {
  return <Button theme = {props.theme} onClick = {() => alert('submit')}>Submit</Button>
}