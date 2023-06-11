import React, { useState } from 'react';

const Modal = ({ closeModal }) => {
    const [name, setName] = useState('');
    const [standard, setStandard] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [address, setAddress] = useState('');
    const [fees, setFees] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
        console.log('Submitted!');
        console.log('Name:', name);
        console.log('Standard:', standard);
        console.log('Mobile Number:', mobileNumber);
        console.log('Address:', address);
        console.log('Fees:', fees);
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-slate-400 bg-opacity-20">
            <div className="w-1/2 bg-white p-8 m-8 rounded shadow">
                {/* Your modal form content */}
                <h2 className="text-lg font-bold mb-4">New Student Form</h2>
                <form autoComplete='off' onSubmit={handleSubmit} className=" mx-auto bg-blue-100 p-4 border rounded-md">
                    {/* Add your form fields here */}
                    <div className="mb-4">
                        <label className="block text-blue-800 font-bold mb-1">Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full px-3 py-2 border-blue-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-blue-800 font-bold mb-1">Standard:</label>
                        <input
                            type="text"
                            value={standard}
                            onChange={(e) => setStandard(e.target.value)}
                            required
                            className="w-full px-3 py-2 border-blue-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-blue-800 font-bold mb-1">Mobile Number:</label>
                        <input
                            type="tel"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                            required
                            className="w-full px-3 py-2 border-blue-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-blue-800 font-bold mb-1">Address:</label>
                        <textarea
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                            className="w-full px-3 py-2 border-blue-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-blue-800 font-bold mb-1">Fees:</label>
                        <input
                            type="number"
                            value={fees}
                            onChange={(e) => setFees(e.target.value)}
                            required
                            className="w-full px-3 py-2 border-blue-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                        onClick={closeModal}
                    >
                        Submit
                    </button>
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 ml-4 rounded"
                        onClick={closeModal}
                    >
                        Close
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Modal;