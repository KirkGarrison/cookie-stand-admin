export default function LoginForm({onLogin}) {
    function handlesubmit(event) {
        event.preventDefault();
        onLogin(event.target.username.value, event.target.password.value);
    }

    return (
        <form onSubmit={handlesubmit} autoComplete="off">
            <fieldset className="bg-green-200 py-4 m-3 w-1/2 flex justify-center">
                <legend className="m-2">Login</legend>

                <label htmlFor="username">Username: </label>
                <input type='text' name='username'/>

                <label htmlFor="password">Password: </label>
                <input type='password' name='password'/>

                <button className="bg-gray-300 px-2">Log In</button>
            </fieldset>
        </form>
    )
}