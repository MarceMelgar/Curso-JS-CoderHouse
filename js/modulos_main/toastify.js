export const toastify = (status) => {

    Toastify({
        text: `Producto ${status}`,
        duration: 2500,
        close: true,
        className: "toastifyToast"
    })
    .showToast();
    
}