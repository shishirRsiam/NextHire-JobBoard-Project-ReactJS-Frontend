import Swal from 'sweetalert2';

const SuccessSwalAlert = (props) => {
    Swal.fire({
        title: props.title || 'Success',
        text: props.text || 'Your request has been processed successfully.',
        icon: props.icon || 'success',
        confirmButtonText: props.confirmButtonText || 'Okay',
        background: '#e8f5e9',
        confirmButtonColor: '#2e7d32',
        iconColor: '#2e7d32',
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = props.next_url || '/profile';
        }
    });
};

export default SuccessSwalAlert;
