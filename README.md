# Solution to Zuri's Node js Authentication System Task
### Usage
Run yarn install or npm install in the root of your project

Create a .env file

Please set the following in your .env file for use when sending password recovery mail:
- MAIL_USERNAME
- MAIL_PASSWORD
- OAUTH_CLIENTID
- OAUTH_CLIENT_SECRET
- OAUTH_REFRESH_TOKEN
- TOKEN_SECRET

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
<img src="https://github.com/EtorojahOkon/auth/blob/production/.github/images/register.PNG" alt="Register screenshot"/>

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
<img src="https://github.com/EtorojahOkon/auth/blob/production/.github/images/login.PNG" alt="Login screenshot"/>

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
<img src="https://github.com/EtorojahOkon/auth/blob/production/.github/images/role.PNG" alt="Role screenshot"/>

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
<img src="https://github.com/EtorojahOkon/auth/blob/production/.github/images/forgotpassword.PNG" alt="Forgot password screenshot"/>

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
<img src="https://github.com/EtorojahOkon/auth/blob/production/.github/images/verifycode.PNG" alt="Verify Code screenshot"/>

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
<img src="https://github.com/EtorojahOkon/auth/blob/production/.github/images/resetpassword.PNG" alt="Reset Password screenshot"/>

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
<img src="https://github.com/EtorojahOkon/auth/blob/production/.github/images/users.PNG" alt="User route screenshot"/>
<img src="https://github.com/EtorojahOkon/auth/blob/production/.github/images/admin.PNG" alt="Admin routes screenshot"/>
<img src="https://github.com/EtorojahOkon/auth/blob/production/.github/images/staff.PNG" alt="Staff route screenshot"/>
<img src="https://github.com/EtorojahOkon/auth/blob/production/.github/images/manager.PNG" alt="Manager route screenshot"/>

- #### /logout (GET)
**Parameters: None**
<img src="https://github.com/EtorojahOkon/auth/blob/production/.github/images/logout.PNG" alt="Logout screenshot"/>



