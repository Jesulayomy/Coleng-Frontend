import toast, { Toaster } from 'react-hot-toast';

export const sucess = (message)=> toast.success(message)

export const error = (err) => toast.error(err)