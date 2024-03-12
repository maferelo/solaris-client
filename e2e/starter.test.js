describe("Example", () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
    await device.terminateApp();

    await device.launchApp({ newInstance: true });

    await device.openURL({
      url: `exp+my-app://expo-development-client/?url=${encodeURIComponent(
        `http://localhost:8081`,
      )}&disableOnboarding=1`,
    });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
    await waitFor(element(by.id("home"))).toBeVisible();
  });

  it("should have home screen", async () => {
    await waitFor(element(by.id("home"))).toBeVisible();
  });

  it("should show navigate to details screen on tap", async () => {
    await element(by.id("home")).atIndex(0).tap();
    await waitFor(element(by.id("details"))).toBeVisible();
  });
});
