/* eslint-disable */
function UserList(users){
  return (
      <ul>
          {/* <li>
              <b>{users[0].username}</b> <span>({users[0].email})</span>
          </li>
          <li>
              <b>{users[1].username}</b> <span>({users[1].email})</span>
          </li>
          <li>
              <b>{users[2].username}</b> <span>({users[2].email})</span>
          </li> */}
          {/* <User user={users[0]} />
          <User user={users[1]} />
          <User user={users[2]} /> */}
          {
            users.map(
              // user => (<User user={user} key={user.id} />)
              user => (<li key={user.id}><b>{user.username}</b> <span>({user.email})</span></li>)
            )
          }
      </ul>
  )
}



export default UserList;