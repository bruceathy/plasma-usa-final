import { useQuery } from "@tanstack/react-query";

export default function DonorInfo() {
  const { isPending, error, data } = useQuery({
    queryKey: ["userData"],
    queryFn: () => fetch("https://randomuser.me/api").then((res) => res.json()),
  });

  if (isPending) {
    return (
      <div className="profile">
        <div className="info">
          <h2>Loading Profile...</h2>
          <p>
            <strong>Birthdate: </strong>
          </p>
          <p>
            <strong>Gender: </strong>
          </p>
          <p>
            <strong>Donor ID: </strong>
          </p>
          <p>
            <strong>Plasma Type: </strong>Non-GHA
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const user = data.results[0];

  return (
    <div className="profile">
      <img
        className="profile-pic"
        id="donor"
        src={`${user.picture.large}`}
        alt="donor profile picture"
      />
      <div className="info">
        <h2>
          {user.name.first} {user.name.last}
        </h2>
        <p>
          <strong>Birthdate: </strong>
          {user.dob.date.substring(0, 10)}
        </p>
        <p>
          <strong>Gender: </strong>
          {user.gender}
        </p>
        <p>
          <strong>Donor ID: </strong>
          {user.id.value}
        </p>
        <p>
          <strong>Plasma Type: </strong>Non-GHA
        </p>
      </div>
    </div>
  );
}
