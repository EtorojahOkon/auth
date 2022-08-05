# Solution to Zuri's Node js Authentication System Task
### API Endpoint Response format
```javascript
  {
    "status" : "success",
    "message : "message",
    ...
  }
```
### API Endpoints
- #### /register (POST)
<img src="https://github.com/EtorojahOkon/auth/blob/production/.github/images/register.PNG" alt="Register screenshot"/>
**Parameters:**
<table>
  <thead>
     <tr>
      <th>#</th>
      <th>Parameter</th>
      <th>Type</th>
      <th>Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Email</td>
      <td>String</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Name</td>
      <td>String</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Password</td>
      <td>String</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Role</td>
      <td>String</td>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- #### /login (POST)
**Parameters:**
<table>
  <thead>
     <tr>
      <th>#</th>
      <th>Parameter</th>
      <th>Type</th>
      <th>Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Email</td>
      <td>String</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Password</td>
      <td>String</td>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- #### /addrole (POST)
**Parameters:**
<table>
  <thead>
     <tr>
      <th>#</th>
      <th>Parameter</th>
      <th>Type</th>
      <th>Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Email</td>
      <td>String</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Role</td>
      <td>String</td>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- #### /forgotpassword (POST)
**Parameters:**
<table>
  <thead>
     <tr>
      <th>#</th>
      <th>Parameter</th>
      <th>Type</th>
      <th>Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Email</td>
      <td>String</td>
      <td>Yes</td>
    </tr>
   
  </tbody>
</table>


- #### /verifytoken (POST)
**Parameters:**
<table>
  <thead>
     <tr>
      <th>#</th>
      <th>Parameter</th>
      <th>Type</th>
      <th>Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Email</td>
      <td>String</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Token</td>
      <td>String</td>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- #### /resetpassword (POST)
**Parameters:**
<table>
  <thead>
     <tr>
      <th>#</th>
      <th>Parameter</th>
      <th>Type</th>
      <th>Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Email</td>
      <td>String</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Password</td>
      <td>String</td>
      <td>Yes</td>
    </tr>
  </tbody>
</table>


- #### /users, /staff, /admin, /managers (GET)
**Parameters:**
<table>
  <thead>
     <tr>
      <th>#</th>
      <th>Parameter</th>
      <th>Type</th>
      <th>Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Authorization(header)</td>
      <td>String</td>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- #### /logout (GET)
**Parameters: None**



