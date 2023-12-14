import './CheckoutForm.css'
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
    <div className="form-container">
        <form className="form-f" onSubmit={handleConfirm}>

            <div className='control'>
                <input required 
                className='input' 
                placeholder="Nombre" 
                type="text" value={name} 
                onChange={({target}) => setName(target.value)}></input>
            </div>
            
            <div className='control'>
                <input required 
                className='input' 
                placeholder="Telefono"  
                type="text" value={phone} 
                onChange={({target}) => setPhone(target.value)}></input>
            </div>

            <div className='control'>
                <input required 
                className='input' 
                placeholder="Email" 
                type="email" value={email} 
                onChange={({target}) => setEmail(target.value)}></input>
            </div>

            <div>
                <button className='button is-normal is-success mt-4' type="submit">
                    <span><i class='bx bxs-check-shield'></i> Crear orden</span>
                </button>
            </div>

        </form>
    </div>
  )
}

export default CheckoutForm