import React, { useEffect } from 'react';
import store from './store.tsx';
import { SetSubdomain } from './action.tsx';
// import { useNavigate } from 'react-router-dom';

const useSetSubdomainFromHost = () => {
    // const navigate = useNavigate();

    useEffect(() => {
        const host = window.location.host; // e.g., subdomain.example.com
        const subdomain = host.split('.')[0]; // Extract the subdomain
        store.dispatch(SetSubdomain(subdomain));
        // if (subdomain === 'app' || subdomain === 'www') {
        //     // ...
        // } else {
        //     navigate('/login', { replace: true });
        // }
    }, []);
};

const SubdomainHandler = () => {
    useSetSubdomainFromHost();
    return null;
};

export default React.memo(SubdomainHandler);
