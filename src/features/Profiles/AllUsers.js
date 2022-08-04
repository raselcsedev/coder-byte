import React, { useEffect } from 'react';
import { useSelector,useDispatch} from 'react-redux';
import Loading from '../../Components/Shared/Loading/Loading';
import { fetchUsers } from './ProfileSlice';

const AllUsers = () => {

    const { isLoading, error, profiles } = useSelector(state =>state?.profiles)

const dispatch =useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())

        console.log('profiles',profiles);
        console.log('error',error);
    }, [])

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            {profiles && <p>all users{profiles.length}</p>}
        </div>
    );
};

export default AllUsers;