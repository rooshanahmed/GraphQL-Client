import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_STUDENTS = gql`
  query GetAllStudents {
    students {
      id
      name
      email
      age
    }
  }
`;

function Students() {
  const { loading, error, data } = useQuery(GET_STUDENTS);

  if (loading) return <h1 style={{ textAlign: 'center' }}>Loading...</h1>;

  if (error) return <h1 style={{ textAlign: 'center' }}>Error!!</h1>;

  const { students } = data;

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <h1>Students List</h1>
      <table border="3">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
        </tr>
        {students.map((std) => {
          return (
            <tr key={std.id}>
              <td>{std.name}</td>
              <td>{std.email}</td>
              <td>{std.age}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
export default Students;
