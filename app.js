/**
 * Battlepass Claim System
 * Modern vanilla JavaScript implementation
 */

class BattlepassManager {
    constructor() {
        this.totalButtons = 6;
        this.claimedCount = 0;
        this.buttons = [];
        this.progressBar = null;
        this.progressText = null;
        this.bigClaimButton = null;

        // Bind methods
        this.init = this.init.bind(this);
        this.handleSmallButtonClick = this.handleSmallButtonClick.bind(this);
        this.handleBigButtonClick = this.handleBigButtonClick.bind(this);
        this.updateProgressBar = this.updateProgressBar.bind(this);
    }

    /**
     * Initialize the battlepass system
     */
    init() {
        // Get DOM elements
        this.progressBar = document.getElementById('progress-bar');
        this.progressText = document.getElementById('progress-text');
        this.bigClaimButton = document.getElementById('big-claim-button');
        this.buttons = Array.from(document.querySelectorAll('.pt-button'));

        // Check if all elements exist
        if (!this.progressBar || !this.progressText || !this.bigClaimButton) {
            console.error('Required elements not found');
            return;
        }

        // Add event listeners to small buttons
        this.buttons.forEach((button, index) => {
            button.addEventListener('click', () => this.handleSmallButtonClick(button, index));
            button.addEventListener('mousedown', (e) => this.handleButtonPress(button, e));
            button.addEventListener('mouseup', () => this.handleButtonRelease(button));
            button.addEventListener('mouseleave', () => this.handleButtonRelease(button));

            // Keyboard accessibility
            button.setAttribute('tabindex', '0');
            button.setAttribute('role', 'button');
            button.setAttribute('aria-label', `Claim reward ${index + 1}`);

            button.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.handleSmallButtonClick(button, index);
                }
            });
        });

        // Add event listeners to big button
        this.bigClaimButton.addEventListener('click', this.handleBigButtonClick);
        this.bigClaimButton.addEventListener('mousedown', (e) => this.handleBigButtonPress(e));
        this.bigClaimButton.addEventListener('mouseup', () => this.handleBigButtonRelease());
        this.bigClaimButton.addEventListener('mouseleave', () => this.handleBigButtonRelease());

        // Keyboard accessibility for big button
        this.bigClaimButton.setAttribute('tabindex', '0');
        this.bigClaimButton.setAttribute('role', 'button');
        this.bigClaimButton.setAttribute('aria-label', 'Claim all rewards');

        this.bigClaimButton.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.handleBigButtonClick();
            }
        });

        // Load saved state from localStorage
        this.loadState();

        // Initial progress update
        this.updateProgressBar();

        console.log('Battlepass Manager initialized successfully');
    }

    /**
     * Handle small button click
     */
    handleSmallButtonClick(button, index) {
        // Check if already claimed
        if (button.classList.contains('claimed')) {
            return;
        }

        // Claim the reward
        this.claimReward(button, index);
    }

    /**
     * Handle big button click (Claim All)
     */
    handleBigButtonClick() {
        // Check if all already claimed
        if (this.claimedCount >= this.totalButtons) {
            return;
        }

        // Claim all unclaimed rewards
        this.buttons.forEach((button, index) => {
            if (!button.classList.contains('claimed')) {
                // Add slight delay for visual effect
                setTimeout(() => {
                    this.claimReward(button, index);
                }, index * 100);
            }
        });
    }

    /**
     * Claim a single reward
     */
    claimReward(button, index) {
        if (button.classList.contains('claimed')) {
            return;
        }

        // Add claimed class
        button.classList.add('claimed');
        button.textContent = 'Claimed';
        button.setAttribute('aria-label', `Reward ${index + 1} claimed`);

        // Increment claimed count
        this.claimedCount++;

        // Update progress bar
        this.updateProgressBar();

        // Save state
        this.saveState();

        // Add visual feedback
        this.addClaimAnimation(button);
    }

    /**
     * Update progress bar
     */
    updateProgressBar() {
        const progressPercentage = (this.claimedCount / this.totalButtons) * 100;
        const progressWidth = (progressPercentage * 2.95); // 295px max width

        this.progressBar.style.width = progressWidth + 'px';
        this.progressText.textContent = Math.round(progressPercentage) + '%';

        // Update aria-valuenow for accessibility
        this.progressBar.setAttribute('aria-valuenow', Math.round(progressPercentage));

        // Check if all claimed
        if (this.claimedCount >= this.totalButtons) {
            this.onAllClaimed();
        }
    }

    /**
     * Handle button press visual effect
     */
    handleButtonPress(button, event) {
        if (!button.classList.contains('claimed')) {
            button.classList.add('pressing');
        }
    }

    /**
     * Handle button release visual effect
     */
    handleButtonRelease(button) {
        button.classList.remove('pressing');
    }

    /**
     * Handle big button press
     */
    handleBigButtonPress(event) {
        this.bigClaimButton.classList.add('pressing');
    }

    /**
     * Handle big button release
     */
    handleBigButtonRelease() {
        this.bigClaimButton.classList.remove('pressing');
    }

    /**
     * Add claim animation
     */
    addClaimAnimation(button) {
        // Add pulse animation
        button.style.animation = 'pulse 0.5s ease';

        setTimeout(() => {
            button.style.animation = '';
        }, 500);
    }

    /**
     * Called when all rewards are claimed
     */
    onAllClaimed() {
        console.log('All rewards claimed!');

        // Disable big button
        this.bigClaimButton.classList.add('disabled');
        this.bigClaimButton.style.cursor = 'default';

        // Optional: Add celebration effect
        this.celebrationEffect();
    }

    /**
     * Celebration effect when all claimed
     */
    celebrationEffect() {
        // Add a subtle pulse to the progress bar
        this.progressBar.style.animation = 'pulse 1s ease infinite';

        // Optional: You can add more effects here
        console.log('🎉 Congratulations! All rewards claimed!');
    }

    /**
     * Save state to localStorage
     */
    saveState() {
        const state = {
            claimedCount: this.claimedCount,
            claimedButtons: this.buttons.map(button => button.classList.contains('claimed'))
        };

        try {
            localStorage.setItem('battlepass_state', JSON.stringify(state));
        } catch (e) {
            console.warn('Could not save state to localStorage:', e);
        }
    }

    /**
     * Load state from localStorage
     */
    loadState() {
        try {
            const savedState = localStorage.getItem('battlepass_state');

            if (savedState) {
                const state = JSON.parse(savedState);

                // Restore claimed buttons
                state.claimedButtons.forEach((isClaimed, index) => {
                    if (isClaimed && this.buttons[index]) {
                        this.buttons[index].classList.add('claimed');
                        this.buttons[index].textContent = 'Claimed';
                        this.buttons[index].setAttribute('aria-label', `Reward ${index + 1} claimed`);
                    }
                });

                // Restore claimed count
                this.claimedCount = state.claimedCount;

                console.log('State loaded from localStorage');
            }
        } catch (e) {
            console.warn('Could not load state from localStorage:', e);
        }
    }

    /**
     * Reset all claims (useful for testing)
     */
    reset() {
        this.claimedCount = 0;

        this.buttons.forEach((button, index) => {
            button.classList.remove('claimed');
            button.textContent = 'Claim';
            button.setAttribute('aria-label', `Claim reward ${index + 1}`);
        });

        this.bigClaimButton.classList.remove('disabled');
        this.bigClaimButton.style.cursor = 'pointer';

        this.progressBar.style.animation = '';

        this.updateProgressBar();
        this.saveState();

        console.log('Battlepass reset');
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const battlepass = new BattlepassManager();
        battlepass.init();

        // Expose to window for debugging (optional)
        window.battlepass = battlepass;
    });
} else {
    const battlepass = new BattlepassManager();
    battlepass.init();

    // Expose to window for debugging (optional)
    window.battlepass = battlepass;
}
