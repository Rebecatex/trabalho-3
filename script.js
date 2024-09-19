    document.querySelectorAll('.room').forEach(room => {
        room.addEventListener('click', () => {
            const statusIcon = room.querySelector('.status i');
            const currentStatus = room.dataset.status;

            const statusMap = {
                livre: { icon: 'fa-lock', newStatus: 'ocupado' },
                ocupado: { icon: 'fa-wrench', newStatus: 'manutencao' },
                manutencao: { icon: 'fa-unlock', newStatus: 'livre' },
            };

            const nextStatus = statusMap[currentStatus];
            statusIcon.className = `fas ${nextStatus.icon}`;
            room.dataset.status = nextStatus.newStatus;
        });
    });
