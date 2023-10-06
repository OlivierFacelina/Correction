import React from 'react'

export default function CurrencySelector({devise, setDevise, currencies}) {
  return (
    <div className="mb-3">
        <select 
            value={devise} 
            className="form-select" 
            aria-label="Default select example"
            onChange={(e) => 
            setDevise(e.target.value)
            }>
            <option>Choisissez votre devise cible</option>
            {
            currencies.map((currency, key) => <option key={key} value={currency}>{currency}</option>)
            }
        </select>
    </div>
  )
}
