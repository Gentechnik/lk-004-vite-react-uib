import React, { ChangeEvent, useState } from "react";
import memberList from "../data/memberList.json";
import { Member } from "./Interfaces";

function EditableMembers() {
  // JSON data
  const initialData = memberList;

  // State to track the edited JSON data
  const [members, setMembers] = useState<Member[]>(initialData);

  // Function to handle changes in input fields
  const handleMemberChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = event.target;
    setMembers((prevMembers) =>
      prevMembers.map((member, i) =>
        i === index ? { ...member, [name]: value } : member
      )
    );
  };

  return (
    <div>
      <h1>Edit Members</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  name="firstName"
                  value={member.firstName}
                  onChange={(e) => handleMemberChange(e, index)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="lastName"
                  value={member.lastName}
                  onChange={(e) => handleMemberChange(e, index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div>
        <h2>Editable Member Data:</h2>
        <pre>{JSON.stringify(members, null, 2)}</pre>
      </div> */}
    </div>
  );
}

export default EditableMembers;
