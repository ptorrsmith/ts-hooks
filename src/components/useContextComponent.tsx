// create a context, externalise via a store
// so create a store.ts, export it and import it

import { useState, useContext } from 'react';

import UserContext, { UserState } from '../state/store'

function ConsumerComponent() {
  const user = useContext(UserContext)

  return (
    <div>
      <div>First: {user.first}</div>
      <div>Last: {user.last}</div>
    </div>
  )
}

function UseContextComponent() {
  const [user, userSet] = useState<UserState>({
    first: 'Fred',
    last: 'Smith',
  })
  return (
    <UserContext.Provider value={user}>
      <ConsumerComponent />
      <button
        onClick={() => userSet(
          {
            first: 'Jamie',
            last: 'Oliver'
          }
        )}
      >Change context</button>
    </UserContext.Provider>
  )
}

export default UseContextComponent;
