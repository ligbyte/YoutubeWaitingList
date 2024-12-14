document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const reverseCheckbox = document.getElementById('reverseOrder');
    const addButton = document.getElementById('addButton');
    const clearButton = document.getElementById('clearButton');
    const toast = document.getElementById('toast');

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

    // 显示toast提示
    function showToast(message, duration = 2000) {
        toast.textContent = message;
        toast.style.display = 'block';
        setTimeout(() => {
            toast.style.display = 'none';
        }, duration);
    }

    // 检查是否在Youtube博主主页视频选项卡
    function isYoutubeChannelVideosPage(url) {
        try {
            return url.startsWith('https://www.youtube.com/') && url.endsWith('/videos');
        } catch (e) {
            return false;
        }
    }

    // 添加按钮点击事件
    addButton.addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            const currentUrl = tabs[0].url;
            if (isYoutubeChannelVideosPage(currentUrl)) {
                showToast('在博主主页');
                // TODO: 这里添加收集视频的逻辑
            } else {
                showToast('不在Youtube博主主页视频选项卡下');
            }
        });
    });

    // 清除按钮点击事件
    clearButton.addEventListener('click', function() {
        console.log('清除按钮被点击');
        // 在这里添加你的清除逻辑
    });
}); 