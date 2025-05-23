const person = {
  name: "Sonic",
  theme: {
    backgroundColor: "black",
    color: "pink",
    avatar: {
      width: "300px",
      height: "300px",
      borderRadius: "50%",
    },
    ul: {
      padding: 0,
      listStylePosition: "inside",
    },
  },
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>Correndo mais que um hotwells - {person.name}</h1>
      <img
        style={person.theme.avatar}
        src="https://i.imgur.com/XKDEet1.jpeg"
        alt="Mouse"
      />
      <ul style={person.theme.ul}>
        <li>Correr</li>
        <li>Atropelar</li>
        <li>Coins</li>
        <li>Vrum vrum</li>
      </ul>
    </div>
  );
}
