import Avatar from "../Avatar/Avatar";

function Card({ children }) {
  return <div className="card">{children}</div>;
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: "Joey",
          imageId: "NkPZ54F",
        }}
      />
    </Card>
  );
}
