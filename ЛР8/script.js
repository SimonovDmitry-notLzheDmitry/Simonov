function validateAndSubmitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const product = document.getElementById('product').value;

    if (!name || !email || !phone || !product) {
        alert('Пожалуйста, заполните все поля формы.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Пожалуйста, введите корректный E-mail.');
        return;
    }

    if (!validatePhone(phone)) {
        alert('Пожалуйста, введите корректный номер телефона. Исключите скобки, пробелы и дефисы. Например:+7000000000');
        return;
    }

    alert(`Имя: ${name}\nE-mail: ${email}\nТелефон: ${phone}\nПродукт: ${product}`);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^\+?[0-9]{10,15}$/;
    return re.test(phone);
}



document.querySelector('.btn').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'purple';
});

