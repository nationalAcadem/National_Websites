import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';



const Modal = ({onDataPosted}) => {
    
    const modalRef = useRef(null);

    let [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (modalRef.current && !modalRef.current.contains(event.target)) {
            setIsModalOpen(false);
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [setIsModalOpen]);

    const[formData, setFormData] = useState({
        name:'',
        standard:'',
        batch:'',
        mobileNumber:'',
        address:'',
        fees:'',
    })

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setFormData((prevData)=>({
            ...prevData,
            [name] : value,
        }));
    };

    async function handleSubmit  (e) {
        e.preventDefault();

        await axios.post("api/students",formData);
        
        setIsModalOpen(false);
        alert("Student data added succesfully")
        setFormData({
            name: '',
            standard: '',
            batch: '',
            mobileNumber: '',
            address: '',
            fees: '',
        })
        onDataPosted();
    };

    return (
        <div className='text-black flex justify-between'>
            
            <button onClick={() => setIsModalOpen(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add a New Student
            </button>
            {isModalOpen &&
                (<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-slate-400 bg-opacity-20">
                    <div className="w-1/2 bg-white p-8 m-8 rounded shadow" ref={modalRef}>
                        {/* Your modal form content */}
                        <h2 className="text-lg font-bold mb-4">New Student Form</h2>
                        <form autoComplete="off" onSubmit={handleSubmit} className=" mx-auto bg-blue-100 p-4 border rounded-md">
                            {/* Add your form fields here */}
                            <div className="mb-4">
                                <label className="block text-blue-800 font-bold mb-1">Name:</label>
                                <input
                                    type="text"
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border-blue-300 rounded-md focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-blue-800 font-bold mb-1">Standard:</label>
                                <select
                                    value={formData.standard}
                                    name='standard'
                                    required
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:border-blue-500"
                                >
                                    <option value="">Select Standard</option>
                                    <option value="XI">XI</option>
                                    <option value="XII">XII</option>
                                </select>

                            </div>
                            <div className="mb-4">
                                <label className="block text-blue-800 font-bold mb-1">Batch:</label>
                                <select
                                    required
                                    name='batch'
                                    value={formData.batch}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:border-blue-500"
                                >
                                    <option value="">Select Batch</option>
                                    <option value="Batch I">Batch I</option>
                                    <option value="Batch II">Batch II</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-blue-800 font-bold mb-1">Mobile Number:</label>
                                <input
                                    type="number"
                                    name='mobileNumber'
                                    value={formData.mobileNumber}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border-blue-300 rounded-md focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-blue-800 font-bold mb-1">Address:</label>
                                <textarea
                                    value={formData.address}
                                    required
                                    name='address'
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border-blue-300 rounded-md focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-blue-800 font-bold mb-1">Fees:</label>
                                <input
                                    type="number"
                                    value={formData.fees}
                                    name='fees'
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border-blue-300 rounded-md focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                            >
                                Submit
                            </button>
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 ml-4 rounded"
                                onClick={()=>setIsModalOpen(false)}
                            >
                                Close
                            </button>
                        </form>
                    </div>
                </div>)}</div>
                

    );
};

export default Modal;