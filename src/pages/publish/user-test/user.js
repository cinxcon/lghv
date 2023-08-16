/* eslint-disable */
import { useRef, useState } from 'react';

function Test() {
  const [inputs, setInputs] = useState({ username: '', email: '' });
  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }
  const id = useRef(1);
  const [users, setUsers] = useState([]);
  // const nextId = useRef(4);
  // const [users, setUsers] = useState([
  //   {
  //       id: 1,
  //       username: 'carrot',
  //       email: 'carrot@gamil.com'
  //   },
  //   {
  //       id: 2,
  //       username: 'apple',
  //       email: 'apple@gamil.com'
  //   },
  //   {
  //       id: 3,
  //       username: 'tomato',
  //       email: 'tomato@gamil.com'
  //   }
  // ]);
  const onCreate = () => {
    const user = {
      id: id.current,
      username,
      email
    };
    setUsers([...users, user]);
    setInputs({
      username: '',
      email: ''
    });
    console.log(id.current);
    id.current += 1;
  }
  // data가 있을 경우, id.current -> nextId.current
  const onRemove = id => {
    setUsers(users.filter(user => user.id !==id) );
  }


  return (
    <>
      <div>
        <input name="username" value={username} placeholder="계정명" onChange={onChange} />
        <input name="email" value={email} placeholder="이메일" onChange={onChange} />
        <button onClick={onCreate}>추가하기</button>
      </div>
      {
        users.map(
          user => (<li key={user.id}><b>{user.username}</b> <span>({user.email})</span><button onClick={() => onRemove(user.id)}>삭제</button></li>)
          // user => (<User user={user} key={user.id} />)
        )
      }
      {/* <UserList users={users} /> */}
      {/* <input name = "name" placeholder="이름" onChange={onChange} value={name} ref={nameInput} /> */}
    </>
  )
}

export default Test;
