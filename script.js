// Adding hover effect on product cards
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    });
});

// Adding event listener for Add to Cart button
document.querySelectorAll('.btn-add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert('Product added to cart!');
    });
});