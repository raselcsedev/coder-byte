import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe('pk_test_51L2gBjKKjNuPS9hlOT7YCimVb59xeQmJYScDajYnOmeIzBL4XH4c2wi3iq6cVqBJOXaFbqNhMigRtVktMpniXm1w00VHtyE3HG');
const Payment = () => {

    const { id } = useParams()

    const [user]=useAuthState(auth)
    const [profile, setProfile]=useState()

    const [product, setProduct] = useState()

    


    useEffect(() => {
        fetch(`https://frozen-beyond-80162.herokuapp.com/payment/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [product])
    
    useEffect(() => {
        const email =user?.email
        fetch(`http://localhost:5000/user?email=${email}`)
            .then(res => res.json())
            .then(data => {setProfile(data)
            })
    }, [])


    if(!product){
        return <Loading></Loading>
    }

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mx-auto mt-10 " style={{width:'80%'}}>
            <figure><img src={product?.img} alt="Album" /></figure>
            <div className="card-body">
            <p className="font-bold">Billing Info:</p>
                <p>Name : {profile?.name}</p>
                <p>Email :{profile?.email}</p>
                <p>Phone Number : {profile?.phone}</p>
                <p>Delivery Address : {profile?.address}</p> <br />
                <h2 className="card-title">{product?.name}</h2>
                <p>{product?.description}</p>
                <p className="font-semibold">Unit Price : tk. {product?.price} </p>
                <p className="font-semibold">Quantity : {product?.quantity} pcs</p>
                <p className="font-semibold">Total Price : tk. {product?.quantity * product?.price} </p>
                

                <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm id={id}  product={product}   />
                    </Elements>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Payment;