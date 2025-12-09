// USE REACT QUERY TO GET DONOR INFO

import { useQuery } from "@tanstack/react-query";

// GETS RANDOM USER (this is from the javascript file)
// async function getUser() {
//   const res = await fetch("https://randomuser.me/api");
//   const data = await res.json();
//   const user = data.results[0];

//   profile.innerHTML = `<img
//           class="profile-pic"
//           id="donor"
//           src="${user.picture.large}"
//           alt="donor profile picture"
//         />
//         <div class="info">
//           <h2>
//   ${user.name.first} ${user.name.last}
//           </h2>
//           <p><strong>Birthdate: </strong>${user.dob.date.substring(0, 10)}</p>
//           <p><strong>Gender: </strong>${user.gender}</p>
//           <p><strong>Donor Number: </strong>${user.id.value}</p>
//           <p><strong>Plasma Type: </strong>Non-GHA</p>
//         </div>`;
// }

export default function DonorInfo() {
  const {
    isPending,
    error,
    data: user,
  } = useQuery({
    queryKey: ["userData"],
    queryFn: () => fetch("https://randomuser.me/api").then((res) => res.json()),
  });

  if (isPending) {
    return <div> Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="profile">
      <img
        className="profile-pic"
        id="donor"
        src="${user.picture.large}"
        alt="donor profile picture"
      />
      <div className="info">
        <h2>
          {user.results[0].name.first} {user.results[0].name.last}
        </h2>
        <p>
          <strong>Birthdate: </strong>
          {/* {user.dob.date.substring(0, 10)} */}
        </p>
        <p>
          <strong>Gender: </strong>
          {/* {user.gender} */}
        </p>
        <p>
          <strong>Donor Number: </strong>
          {/* {user.id.value} */}
        </p>
        <p>
          <strong>Plasma Type: </strong>Non-GHA
        </p>
      </div>
    </div>
  );
}
