import React, { useContext, useEffect } from 'react'
import { AuthContext } from 'context/AuthContext';
import { useRouter } from 'next/router';
import { Pane, Spinner } from 'evergreen-ui';

export function withProtected(Component) {
    return function WithProtected(props) {
        const [user] = useContext(AuthContext);
        const router = useRouter();
        if (typeof window !== "undefined") {
            if (!user) {
                router.replace("/login");
                return <h1>Loading.....</h1>
            }
        }

        return <Component  {...props} />
    }
}