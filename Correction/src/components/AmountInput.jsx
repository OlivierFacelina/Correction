import React from 'react'

export default function AmountInput({amount, setAmount, setVisible}) {
    const handleChange = (e) => {
        setAmount(e.target.value)
        setVisible(false)
    }
  return (
    <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
            Montant
        </label>
        <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Saisissez votre montant à convertir"
            value={amount}
            onChange={handleChange}
        />
    </div>
  )
}
