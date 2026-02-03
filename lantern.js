document.addEventListener('DOMContentLoaded', () => {
    const lantern = document.getElementById('lantern');

    // Sự kiện đưa chuột vào (MouseEnter) -> Dừng quay
    lantern.addEventListener('mouseenter', () => {
        lantern.style.animationPlayState = 'paused';
        console.log('Mouse Enter: Đèn đã dừng');
    });

    // Sự kiện đưa chuột ra (MouseLeave) -> Quay tiếp
    lantern.addEventListener('mouseleave', () => {
        lantern.style.animationPlayState = 'running';
        console.log('Mouse Leave: Đèn quay tiếp');
    });
});