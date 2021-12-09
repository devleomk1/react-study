import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      Hello, Voxotron!!!
      <form>
        <div class="form-group placeholdered required admin_login"><div class="col-sm-12"><input autocomplete="off" autofocus="autofocus" class="placeholdered required placeholdered" id="admin_login" name="admin[login]" required="required" type="text" /><label alt='Login' placeholder='Login'></label></div></div>
        <div class="form-group placeholdered required admin_password"><div class="col-sm-12"><input autocomplete="off" class="placeholdered required placeholdered" id="admin_password" name="admin[password]" required="required" type="password" /><label alt='Password' placeholder='Password'></label></div></div>
        <div class='form-actions'>
          <button class='btn btn-block btn-primary' type='submit'>Sign in</button>
        </div>
      </form>
      {/* <form accept-charset="UTF-8" action="/admins/sign_in" class="simple_form form-horizontal new_admin" id="new_admin" method="post" novalidate="novalidate">
        <div style="display:none"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="M3iWGazAD4Yw+PYQBCL7k/ReGn5dZin6X1aZkOqf6jw=" /></div><div class='form-inputs'>
        <div class="form-group placeholdered required admin_login"><div class="col-sm-12"><input autocomplete="off" autofocus="autofocus" class="placeholdered required placeholdered" id="admin_login" name="admin[login]" required="required" type="text" /><label alt='Login' placeholder='Login'></label></div></div>
        <div class="form-group placeholdered required admin_password"><div class="col-sm-12"><input autocomplete="off" class="placeholdered required placeholdered" id="admin_password" name="admin[password]" required="required" type="password" /><label alt='Password' placeholder='Password'></label></div></div>
        </div>
        <div class='form-actions'>
        <button class='btn btn-block btn-primary' type='submit'>Sign in</button>
        </div>
      </form> */}
    </div>
  );
}

export default App;
