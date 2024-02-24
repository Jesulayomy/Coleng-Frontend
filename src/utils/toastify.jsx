import toast, { Toaster } from 'react-hot-toast';


export const error = (err) => toast.error(err);

export const sucess = (message) => toast.success(message);

