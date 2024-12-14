document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const reverseCheckbox = document.getElementById('reverseOrder');
    const addButton = document.getElementById('addButton');
    const clearButton = document.getElementById('clearButton');

    // 加载保存的复选框状态
    chrome.storage.local.get(['isReversed'], function(result) {
        reverseCheckbox.checked = result.isReversed || false;
    });

    // 监听复选框变化
    reverseCheckbox.addEventListener('change', function() {
        chrome.storage.local.set({
            isReversed: reverseCheckbox.checked
        });
    });

    // 添加按钮点击事件
    addButton.addEventListener('click', function() {
        console.log('添加按钮被点击');
        // 在这里添加你的添加逻辑
    });

    // 清除按钮点击事件
    clearButton.addEventListener('click', function() {
        console.log('清除按钮被点击');
        // 在这里添加你的清除逻辑
    });
}); 