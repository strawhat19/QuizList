import './spinner.scss';
import { CircularProgress } from '@mui/material';

export default function Spinner({className}: any) {
    return <>
        <div className={`spinner ${className}`}>
            <CircularProgress size={20} color={`success`} />
        </div>
    </>
}