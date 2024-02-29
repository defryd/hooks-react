import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    // const [formState, setFormState] = useState({
    //     username: '',
    //     email: '',
    //     password:''
    // });

    // const { username, email, password } = formState;

    // const onInputChange = ({ target }) => {
    //     const { name, value } = target;
    //     setFormState({
    //         ...formState, 
    //         [name]: value
    //     });
    // }

    const { onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });

    // const {username, email, password} = formState;

    // useEffect(() => {
    //     console.log('Effect');
    // }, []);

    // useEffect(() => {
    //     // console.log('formState changed!');
    // }, [formState]);

    // useEffect(() => {
    //     // console.log('email changed!');
    // }, [email]);


    return (
        <>
            <h1>Formulario con custom Hook</h1>
            <hr />

            <input
                type="text"
                className="form-control mt-2"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            {
                (username === 'strider2') && <Message />
            }

            <input
                type="email"
                className="form-control mt-2"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <input
                type="password"
                className="form-control mt-2"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>




        </>
    )
}
