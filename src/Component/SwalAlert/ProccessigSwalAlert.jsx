
const ProccessingSwalAlert = () => {
    import('sweetalert2').then(Swal => {
        Swal.default.fire({
            didOpen: () => {
                Swal.showLoading(); 
            },
            title: 'Processing...',
            text: "Please wait while we process your request.",
            allowOutsideClick: false, 
            backdrop: true,
            showConfirmButton: false, 
        });
    });
};

export default ProccessingSwalAlert;
