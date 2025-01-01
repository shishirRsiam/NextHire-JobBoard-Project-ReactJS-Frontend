swalAlert({
    title: 'Login Successful!',
    text: 'Welcome back to the platform.',
    icon: 'success',
    confirmButtonText: 'Okay',
    background: '#fce4ec',
    confirmButtonColor: '#7b1fa2',
    iconColor: '#d32f2f',
  });


  Swal.fire({
    title: 'Processing...',
    text: 'Please wait while we log you in.',
    didOpen: () => {
      Swal.showLoading(); // Show loading spinner
    },
    allowOutsideClick: false, // Prevent closing the alert by clicking outside
    backdrop: true, // Show backdrop to prevent interaction with other UI elements
    showConfirmButton: false, // Hide the confirm button during loading
  });