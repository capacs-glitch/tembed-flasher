// Скрипт для создания списка драйверов
document.addEventListener('DOMContentLoaded', function() {
    const driversContainer = document.getElementById('drivers-container');
    
    // Иконки для разных типов драйверов
    const driverIcons = {
        'windows': 'fab fa-windows',
        'apple': 'fab fa-apple',
        'chip': 'fas fa-microchip',
        'default': 'fas fa-download'
    };

    // Создаем карточки драйверов
    drivers.forEach(driver => {
        const driverItem = document.createElement('div');
        driverItem.className = 'driver-item';
        
        // Определяем иконку
        const iconClass = driverIcons[driver.icon] || driverIcons.default;
        
        driverItem.innerHTML = `
            <div class="driver-icon">
                <i class="${iconClass}"></i>
            </div>
            <div class="driver-name">${driver.name}</div>
            <a href="./drivers/${driver.file}" class="driver-button" download>
                <i class="fas fa-download"></i> Скачать
            </a>
        `;
        
        driversContainer.appendChild(driverItem);
    });
});