import {toast } from 'react-toastify';

export default function callSuccessToast(mssg){ 
    toast.success(mssg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}