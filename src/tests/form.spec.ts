import { test, expect } from "@playwright/test";

test.describe("form tests", () => {
  // test.beforeEach(async ({ page }) => {
  //   await page.goto("/");
  // });

  test("input test values in form and send", async ({ page }) => {
    await page.goto("/");
    const emailAdress = "test@email.com";

    const emailInput = page.locator("input#contact-form-email");
    await emailInput.fill(emailAdress);
    const emailInputValue = await emailInput.inputValue();
    expect(emailInputValue).toBe(emailAdress);

    const subjectInput = page.locator("input#contact-form-subject");
    await subjectInput.fill(emailAdress);
    const subjectInputValue = await subjectInput.inputValue();
    expect(subjectInputValue).toBe(emailAdress);

    const messageInput = page.locator("textarea#contact-form-message");
    await messageInput.fill(emailAdress);
    const messageInputValue = await messageInput.inputValue();
    expect(messageInputValue).toBe(emailAdress);

    const formButton = page.locator("#contact-form-button-submit");
    await formButton.click();
  });
});
