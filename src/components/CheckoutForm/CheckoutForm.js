import { useState } from "react"

const CheckoutForm = ({onConfirm}) => {

    const [ name, setName] = useState('')
    const [ phone, setPhone] = useState('')
    const [ email, setEmail] = useState('')

    const handleConfirm = (e) => {
        e.preventDefault()

        const userData = { name, phone, email }

        onConfirm(userData)
    }


  return (
    <div>
        <form onSubmit={handleConfirm}>

            <label>Nombre
                <input type="text" value={name} onChange={({target}) => setName(target.value)}></input>
            </label>

            <label>Telefono
                <input type="text" value={phone} onChange={({target}) => setPhone(target.value)}></input>
            </label>

            <label>Email
                <input type="email" value={email} onChange={({target}) => setEmail(target.value)}></input>
            </label>

            <div>
                <button type="submit">Crear Orden</button>
            </div>

        </form>
    </div>
  )
}

export default CheckoutForm