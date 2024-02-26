import { useEffect, useState } from "react"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Fredy',
        email: 'fredy@gmail.com'
    });

    const { username, email } = setFormState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState, [name]: value
        })
    };

    useEffect(() => {
        console.log('Effect')
    });


    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />
            <input type="text" className="form-control mt-2" placeholder="Username" name="username" value={username} onChange={onInputChange} />

            <input type="email" className="form-control mt-2" placeholder="Email" name="email" value={email} onChange={onInputChange} />


        </>
    )
}
