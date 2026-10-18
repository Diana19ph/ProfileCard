import ProfileCard from "./component/ProfileCard";

function App() {
  return (
    <>
      <ProfileCard
        image={
          "https://starmus.com/wp-content/uploads/2026/09/Wiseman-Portrait-scaled-e1789070581496.jpg"
        }
        name={"Reid"}
        surname={"Wiseman"}
        age={25}
        profession={"NASA astronaut"}
        bio={
          "My name is Reid Wiseman. I hope one day I can get far away from people for example, on Mars..."
        }
      />
    </>
  );
}

export default App;
