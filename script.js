const textToCopy = 'play.iquldev.pro';
function copyText() {
    navigator.clipboard.writeText(textToCopy).then(() => {
        console.log('Текст успешно скопирован!');
    }, (error) => {
        console.error('Ошибка при копировании текста:', error);
    });
    alert("Copied!");
}
