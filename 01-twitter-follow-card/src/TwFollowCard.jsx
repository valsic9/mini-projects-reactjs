/* useState recibe como param un  alor que es el state por default devuelve un array. En 1ra posicio es el valor del estado y en 2da pos es el switch para cambair
el estado */
import { useState } from "react";

/* Children es una prop especial que no se pasa como prop, sino que es todo aquello que envuelve un elemento
Despues se usa como quieras. */
export function TwFollowCard({ userName, children, storedIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(storedIsFollowing);
  // const state = useState(false);
  // const isFollowing = state[0];
  // const setIsFollowing = state[1];

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const btnClassName = isFollowing
    ? "tw-followCard__btn is-following"
    : "tw-followCard__btn";

  const handleClick = () => setIsFollowing(!isFollowing);
  return (
    <article className="tw-followCard">
      <header className="tw-followCard__header">
        <img
          className="tw-followCard__avatar"
          src={`https://unavatar.io/github/${userName}`}
          alt="user"
        />
        <div className="tw-followCard__info">
          <p className="tw-followCard__name">
            <strong>{children}</strong>
          </p>
          <span className="tw-followCard__username">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={btnClassName} onClick={handleClick}>
          <span className="tw-followCard__btn__text">{text}</span>
          <span className="tw-followCard__btn__stopFollow">
            Dejar de seguir
          </span>
        </button>
      </aside>
    </article>
  );
}
