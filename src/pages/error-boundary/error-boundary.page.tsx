import {ErrorResponse, useRouteError} from 'react-router';
import MainLayout from '../../layouts/main-layout/main-layout.tsx';
import BlockLayout from '../../layouts/block-layout/block-layout.tsx';

import styles from './error-boundary.module.scss'



export function ErrorBoundary() {
    const error: ErrorResponse = useRouteError() as ErrorResponse;

    console.error(error);
    return (<MainLayout>
        <BlockLayout>
            <div className={styles.wrapper}>
                <h1>{error.status}</h1>
                <p>{error.statusText}</p>
            </div>
        </BlockLayout>
    </MainLayout>)
}

export default ErrorBoundary;