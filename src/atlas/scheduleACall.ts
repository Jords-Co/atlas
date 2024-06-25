/**
 * Schedule a Call.
 * 
 * @author <cabal@digerati.design>
 */
export const scheduleACall = () => {
    const calendlyButtons = document.querySelectorAll('[dd-calendly="button"]');
    if (!calendlyButtons) {
        return;
    }
    calendlyButtons.forEach((calendlyButton) => {
        calendlyButton.addEventListener('click', function (e) {
            e.preventDefault();
            Calendly.initPopupWidget({
                url: 'https://calendly.com/atlasportfolios/30min?primary_color=1a1a1a'
            });
        });
    });
};

