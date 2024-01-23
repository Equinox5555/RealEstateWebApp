import ReactImage from "../assets/react.svg";

export default function ListingCard() {
  return (
    <div>
        <img src={ReactImage} alt="Uh oh"></img>
        <h1>Pricing</h1>
        <p>Address</p>
        <p>Rooms</p>
        <p>Type</p>
    </div>
  )
}
