import React from 'react'
import fotosPopulares from "./fotos-populares.json";
import styles from "./Populares.module.scss";

export default function Populares() {
  return (
    <aside className={styles.populares}>
        <h2>Populares</h2>
        <ul className={styles.populares__imagens}>
            {fotosPopulares.map((foto) => (
                <li key={foto.id}>
                    <img src={foto.path} alt={foto.alt} />
                </li>
            ))}
        </ul>
        <button>Ver mais fotos</button>
    </aside>
  )
}
