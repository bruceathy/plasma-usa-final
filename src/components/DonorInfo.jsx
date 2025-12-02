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

const fetchUser = async () => {
  try {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    const user = data.results[0];
    console.log(user.name.last + " " + user.name.first);
    return user;
  } catch (error) {
    console.error(error);
    throw new Error("Unable to fetch user data");
  }
};

fetchUser();

export default function DonorInfo() {
  // const { data: user } = useQuery("user", fetchUser);

  return (
    <div className="profile">
      <img
        class="profile-pic"
        id="donor"
        src="${user.picture.large}"
        alt="donor profile picture"
      />
      <div class="info">
        <h2>{/* {user.name.first} {user.name.last} */}</h2>
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
