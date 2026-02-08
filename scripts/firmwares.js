// Скрипт для создания кнопок прошивок
document.addEventListener('DOMContentLoaded', function() {
    const firmwaresContainer = document.getElementById('firmwares-container');
    
    // Описания для каждой прошивки
    const firmwareDetails = {
        "Bruce 1.8": {
            icon: "fas fa-bolt",
            description: "Версия 1.8 прошивки Bruce с базовым функционалом"
        },
        "Bruce 1.14": {
            icon: "fas fa-rocket",
            description: "Последняя версия Bruce 1.14 с расширенными возможностями"
        },
        "M5Launcher": {
            icon: "fas fa-play-circle",
            description: "Загрузчик приложений для M5-устройств"
        },
        "Заводская (Factory)": {
            icon: "fas fa-industry",
            description: "Оригинальная заводская прошивка устройства"
        }
    };

    // Создаем карточки для каждой прошивки
    firmwares.forEach(firmware => {
        const details = firmwareDetails[firmware.name] || {
            icon: "fas fa-microchip",
            description: "Прошивка для T-Embed CC1101"
        };

        // Создаем контейнер прошивки
        const firmwareItem = document.createElement('div');
        firmwareItem.className = 'firmware-item';
        firmwareItem.innerHTML = `
            <div class="firmware-icon">
                <i class="${details.icon}"></i>
            </div>
            <div class="firmware-title">${firmware.name}</div>
            <div class="firmware-desc">${details.description}</div>
        `;

        // Создаем кнопку прошивки
        const installButton = document.createElement('esp-web-install-button');
        installButton.setAttribute('manifest', firmware.manifest);
        
        const activateButton = document.createElement('button');
        activateButton.className = 'firm-button';
        activateButton.setAttribute('slot', 'activate');
        activateButton.innerHTML = `<i class="fas fa-download"></i> Прошить ${firmware.name.split(' ')[0]}`;
        
        installButton.appendChild(activateButton);
        firmwareItem.appendChild(installButton);
        
        firmwaresContainer.appendChild(firmwareItem);
    });
});