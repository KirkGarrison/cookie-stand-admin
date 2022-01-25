export default function LoginForm({onLogin}) {
    function handlesubmit(event) {
        event.preventDefault();
        onLogin(event.target.username.value, event.target.password.value);
    }

    return (
        <form onSubmit={handlesubmit} autoComplete="off">
            <fieldset>
                <legend>Login</legend>

                <label htmlFor="username">Username: </label>
                <input type='text' name='username'/>

                <label htmlFor="password">Password: </label>
                <input type='password' name='password'/>

                <button>Log In</button>
            </fieldset>
        </form>
    )
}