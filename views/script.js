document.getElementById('pay-button').addEventListener('click', function() {
    var paymentMethod = document.getElementById('payment-method').value;
    switch (paymentMethod) {
        case 'credit-card':
            window.location.href = 'https://www.example.com/credit-card-payment';
            break;
        case 'paypal':
            window.location.href = 'https://www.paypal.com';
            break;
        case 'stripe':
            window.location.href = 'https://www.stripe.com';
            break;
        case 'bank-transfer':
            window.location.href = 'https://www.example.com/bank-transfer-info';
            break;
        case 'cash-on-delivery':
            window.location.href = 'https://www.example.com/cash-on-delivery-info';
            break;
        default:
            // No se seleccionó ningún método de pago, maneja esto según sea necesario
            break;
    }
});
