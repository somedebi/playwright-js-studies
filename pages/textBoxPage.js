export class TextBoxPage {

        constructor(page) {
            this.page = page;

            this.fullNameInput = page.locator('#userName');
            this.emailInput = page.locator('#userEmail');
            this.currentAddressInput = page.locator('#currentAddress');
            this.permanentAddressInput = page.locator('#permanentAddress');
            this.submitButton = page.locator('#submit');

        }

         async fillFullName(name) {
        await this.fullNameInput.fill(name);
         }

         async fillEmail(email) {
        await this.emailInput.fill(email);
         }

         async fillCurrentAddress(address) {
        await this.currentAddressInput.fill(address);
         }

         async fillPermanentAddress(address) {
        await this.permanentAddressInput.fill(address);
         }

         async clickSubmit() {
        await this.submitButton.click();

        }
}