import React, { useState } from 'react'
import Tags from '../Tags'
import styles from "./Galeria.module.scss";
import fotos from "./fotos.json";
import open from "./open.png";
import favorito from "./favorito.png";

export default function Galeria() {

  const [itens, setItens] = useState(fotos);
  const tags = [...new Set(fotos.map((valor) => valor.tag))];

  const filtraFotos = (tag) => {
    const novasFotos = fotos.filter((foto) => (
      foto.tag === tag
    ));

    setItens(novasFotos);
  } 

  return (
    <section className={styles.galeria}>
        <h2>Navegue pela galeria</h2>
        <Tags tags={tags} filtraFotos={filtraFotos} setItens={setItens} />
        <ul className={styles.galeria__cards}>
          {itens.map((foto) => (
            <li key={foto.id} className={styles.galeria__card}>
              <img
                src={foto.imagem}
                alt={foto.titulo}
                className={styles.galeria__imagem}
              />
              <p className={styles.galeria__descricao}>{foto.titulo}</p>
              <div>
                <p>{foto.creditos}</p>
                <span>
                  <img src={favorito} alt="Ícone coração de curtir" />
                  <img src={open} alt="Ícone de abrir modal" />
                </span>
              </div>
            </li>
          ))}
        </ul>
    </section>
  )
}
