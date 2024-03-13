describe("Example", () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });

    // Note: disableOnboarding is not working to disable onboarding modal
    await device.openURL({
      url: `exp+my-app://expo-development-client/?url=${encodeURIComponent(
        `http://localhost:8081`,
      )}&disableOnboarding=1`,
    });
  });

  beforeEach(async () => {
    await device.reloadReactNative();

    // Dismiss the onboarding modal
    // Note: This is a workaround for the onboarding modal not being dismissed automatically
    try {
      const navBarText = await element(by.text(/^SDK.*$/)).atIndex(0);
      await navBarText.swipe("down");
    } catch (_e) {
      // do nothing
    }
  });

  it("should have home screen", async () => {
    await waitFor(element(by.id("home"))).toBeVisible();
  });
});
