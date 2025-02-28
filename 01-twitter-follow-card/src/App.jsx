import { TwFollowCard } from "./TwFollowCard";

// Simulando que obtenemos la info de un fetch
const users = [
  {
    userName: "valsic9",
    name: "Valeria Mujica",
    isFollowing: true,
    id: 0,
  },
  {
    userName: "miudev",
    name: "Miguel Ángel Durán",
    isFollowing: false,
    id: 1,
  },
  {
    userName: "elonmusk",
    name: "Elon Musk",
    isFollowing: false,
    id: 2,
  },
];

// Key es un prop especial que sirve para diferenciar a cada elemento como única, evita duplicaciones
export function App() {
  return (
    <section className="App">
      {users.map((user) => {
        const { userName, name, isFollowing, id } = user;
        return (
          <TwFollowCard
            key={id}
            storedIsFollowing={isFollowing}
            userName={userName}
          >
            {name}
          </TwFollowCard>
        );
      })}
    </section>
  );
}

//Los valores boolean se pasan con {} o nada si es true
// Ej: isFollowing={false} | isFollowing={true} | isFollowing
// Lo que envuelve la etiqueta se recupera con la palabra reservada 'children'. Normalmente
// se pone como children lo más importante del componente y puede ser una cadena de chars, uno o varios elementos...
// export function App() {
//   return (
//     <section className="App">
//       <TwFollowCard isFollowing userName="valsic9">
//         Valeria Mujica
//       </TwFollowCard>
//       <TwFollowCard isFollowing={false} userName="miudev">
//         Miguel Ángel Durán
//       </TwFollowCard>
//       <TwFollowCard isFollowing userName="elonmusk">
//         Elon Musk
//       </TwFollowCard>
//     </section>
//   );
// }
