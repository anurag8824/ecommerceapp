import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const SignPage = () => {

    const [state, setState] = useState(true)
    const [Email, setEmail] = useState("");
    const [otp , setOtp] = useState("");


    const navigate = useNavigate();


    // useEffect(() => {
    const showForm = (event) => {

        event.preventDefault();
        // console.log("onclick triggered")
      
        console.log(Email)

        axios.post('http://localhost:8000/user/EmailRegister', { Email })


            .then((res) => {
                console.log(res);
                const mes = res.data.message
                if (mes == "user already exist!") {
                    alert(res.data.message)
                } else if (mes == "Error is sending Email !") {
                    alert(res.data.message)

                } else {
                    setState(false)
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }


    // }, [])




    const handleSubmit = (event) => {

        event.preventDefault(); // Prevents default form submission behavior



        navigate('/user-form');
    }

    // useEffect(() => {

    //     // axios.get('')
    //     // .then(response => {
    //     //     // Handle success
    //     //     setData(response.data);
    //     //     setLoading(false);
    //     //   })
    //     //   .catch(error => {
    //     //     // Handle error
    //     //     setError(error);
    //     //     setLoading(false);
    //     //   });



    // }, [])


    return (
        <div>
            <div class="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
                <div class={`justify-center ${state === true ? "block" : "hidden"}`}>
                    <form class="max-w-sm mx-auto">
                        <div class="mb-5">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Your email</label>
                            <input type="email" id="email" onChange={e => setEmail(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@xyz1234.com" required />
                        </div>

                        <button type="submit" onClick={showForm} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send OTP</button>
                    </form>
                </div>



                <div class={`justify-center ${state === true ? "hidden" : "block"}`}  >
                    <div class="max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl">
                        <header class="mb-8">
                            <p class="text-[15px] text-slate-500">Enter the 4-digit verification code that was sent to your email id.</p>
                        </header>

                        <form id="otp-form" onSubmit={handleSubmit}>
                            <div class="flex items-center justify-center gap-3">
                                <input
                                    type="text"
                                    class="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-gray hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                                    pattern="\d*" maxlength="1" />
                                <input
                                    type="text"
                                    class="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-gray hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                                    maxlength="1" />
                                <input
                                    type="text"
                                    class="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-gray hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                                    maxlength="1" />
                                <input
                                    type="text"
                                    class="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-gray hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                                    maxlength="1" />
                            </div>
                            <div class="max-w-[260px] mx-auto mt-4">
                                <button type="submit"

                                    class="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-blue-700 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150">Verify
                                    Account</button>
                            </div>
                        </form>

                        <div class="text-sm text-slate-500 mt-4">Didn't receive code? <a class="font-medium text-indigo-500 hover:text-indigo-600" href="#0">Resend</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignPage