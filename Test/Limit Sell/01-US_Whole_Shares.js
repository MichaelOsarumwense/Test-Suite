describe('Limit Sell Collection', () => {
    beforeEach(() => {
        // Assuming Appium driver and capabilities are already set up
        // To be replace with actual app navigation code
        driver.startActivity('your.app.package', 'YourPortfolioActivity');
        // Navigate to the portfolio landing page
    });

    it('should execute a limit sell for whole shares of a US stock', () => {
        // Click on desired portfolio
        const desiredPortfolio = driver.$('~portfolio-name');
        desiredPortfolio.click();

        // Select sell option
        const sellButton = driver.$('~sell-button');
        sellButton.click();

        // Select Order type to be Limit Order
        const orderType = driver.$('~dropdown-order-type');
        orderType.select('limit order'); // Set limit price

        // Enter details for whole shares limit sell
        const limitPriceInput = driver.$('~limit-price-input');
        limitPriceInput.setValue('50'); // Set limit price

        // Click on continue
        const continueButtonn = driver.$('~sell-button');
        continueButtonn.click();

        // Enter number of whole shares to sell
        const numberOfSharesInput = driver.$('~number-of-shares-input');
        numberOfSharesInput.setValue('10'); // Set number of shares

        // Click on review order
        const reviewOrderButton = driver.$('~review-order-button');
        reviewOrderButton.click();

        // Verify completion summary details
        const completionSummary = driver.$('~completion-summary');
        expect(completionSummary.isDisplayed()).toBeTruthy(); // Placeholder assertion
        /**Placeholder assertions for completion summary details such as “limit price per share” 
        “No of shares” “Total amount” “limit order sell date” “expiry” “order status” “Done **/

        // Click create sell limit butto
        const createSellLimitButton = driver.$('~create-sell-limit-button');
        createSellLimitButton.click();

        // Authenticate transaction with a four digit pass code
        const passCodeInput = driver.$('~pass-code-input');
        passCodeInput.setValue('1234'); // Set pass code

        // Click on authenticate button
        const authenticateButton = driver.$('~authenticate-button');
        authenticateButton.click();

        // Verify completion summary details
        expect(completionSummary.isDisplayed()).toBeTruthy(); // Placeholder assertion
        // Placeholder assertions for completion summary details such as “limit price per share” 
        // “No of shares” “Total amount” “limit order sell date” “expiry” “order status” “Done Button” “cancel order Button”

        // Click done
        const doneButton = driver.$('~done-button');
        doneButton.click();

        // Verify redirection to Portfolio page
        const portfolioPage = driver.$('~portfolio-page');
        expect(portfolioPage.isDisplayed()).toBeTruthy(); // Placeholder assertion

        // Verify newly added limit order on limit orders list
        const limitOrdersList = driver.$('~limit-orders-list');
        expect(limitOrdersList.getText()).toContain('newly added limit order'); // Placeholder assertion

        // Click on limit orders Tab
        const limitOrdersTab = driver.$('~limit-orders-tab');
        limitOrdersTab.click();
    });



    // Other tests using the provided flow and placeholder assertions...
});
