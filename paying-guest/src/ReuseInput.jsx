import React from 'react'

function ReuseInput({ label, type, name, value, onchange, placeholder,props }) {
    return (
        <div>
            <label htmlFor={name} className="block mb-1 text-sm font-semibold text-gray-700">
                {label}
            </label>
            <input
                {...props}
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={onchange}
                placeholder={placeholder}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition" />
        </div>
    )
}

export default ReuseInput
