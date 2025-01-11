
const ErrorSwalAlert = (props) => {
    import('sweetalert2').then(Swal => {
        Swal.default.fire({
            title: props.title || 'Error',
            text: props.text || 'An error has occurred. Please try again later.',
            icon: props.icon || 'error',
            confirmButtonText: props.confirmButtonText || 'Okay',
            background: '#fce4ec',
            confirmButtonColor: '#7b1fa2',
            iconColor: '#d32f2f',
            timer: 10000,
            timerProgressBar: true,
        });
    });
};

export default ErrorSwalAlert;
