document.addEventListener("DOMContentLoaded", function() {
    const btnYT1 = document.getElementById('btn-yt1');
    const btnYT2 = document.getElementById('btn-yt2');
    const btnYT3 = document.getElementById('btn-yt3');

    function openLink(url) {
        window.open(url, '_blank');
    }

    if (btnYT1) {
        btnYT1.addEventListener("click", function() {
            openLink('https://youtu.be/TYwvVnbGD80?si=AMAVOwh-w4ypGZ1J');
        });
    }

    if (btnYT2) {
        btnYT2.addEventListener("click", function() {
            openLink('https://youtu.be/KyQkMwfGmVE?si=M4PJt4aJjNeXQ0sk');
        });
    }

    if (btnYT3) {
        btnYT3.addEventListener("click", function() {
            openLink('https://youtu.be/NordH3JZ7OU?si=YpmxYSon5UFkhUpt');
        });
    }
});
