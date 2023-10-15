import { withUsers } from "./withEntities";

export const UsersList = withUsers(({ users }) => {
  if (users.isLoading) {
    return <div>Users Loading...</div>;
  }

  if (users.error) {
    return <div>{users.error}</div>;
  }

  return (
    <>
      <div>
        <h3>Users</h3>
        <ul>
          {users.data.length === 0 && <li>No users found</li>}
          {users.data.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email}) - {user.phone}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
});
