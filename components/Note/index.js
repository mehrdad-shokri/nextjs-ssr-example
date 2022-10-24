import styles from './style.module.css'

const Note = ({note, key}) => {
    return <div key={key} className={styles.note}>
        <h5 className={styles.title}>{note.title}</h5>
        <main className={styles.content}>
            {/*{note.body}*/}
        </main>
        </div>
}

export default Note