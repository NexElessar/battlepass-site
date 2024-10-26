function showTab(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');

    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    event.currentTarget.classList.add('active');
}

let overallProgress = 0;

function claimReward(button) {
    if (overallProgress < 100) {
        overallProgress += 10; // Her ödül için 10 birim ilerleme
        updateOverallProgress();
        button.disabled = true; // Butonu devre dışı bırak
        button.innerText = "Claimed"; // Butonun içeriğini değiştir
    }
}

function updateOverallProgress() {
    const progressBar = document.getElementById("overall-progress-bar");
    const progressText = document.getElementById("overall-progress-text");
    const levelText = document.getElementById("overall-level-text");

    const progressPercentage = overallProgress;
    progressBar.style.width = progressPercentage + "%";
    progressText.innerText = overallProgress + " / 100";
    levelText.innerText = progressPercentage + "%";
}
