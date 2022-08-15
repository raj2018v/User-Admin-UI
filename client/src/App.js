import React, { useState } from 'react'
import { Admin, Filter, Resource } from 'react-admin'
import { CustomerFilter, UserCreate, UserDelete, UserEdit, UserFilter, UserList } from './components/User'
import restProvider from 'ra-data-simple-rest'

const dataProvider = restProvider('http://localhost:3000');

function App() {
  const [query, setQuery] = useState("")

  console.log(query)
    return (
      <div>
        <Admin dataProvider={dataProvider}>
          <Resource 
            name="users" 
            list={UserList}
            create={UserCreate}
            edit={UserEdit}
            />
        </Admin>
      </div>
    );
  }
export default App;