describe("Example", () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });

    await device.openURL({
      url: `exp+my-app://expo-development-client/?url=${encodeURIComponent(
        `http://localhost:8081`,
      )}&disableOnboarding=1`,
    });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should have home screen", async () => {
    await expect(element(by.id("home")).atIndex(0)).toBeVisible();
  });

  it("should show navigate to details screen on tap", async () => {
    await element(by.id("home")).atIndex(0).tap();
    await expect(element(by.id("details"))).toBeVisible();
  });
});
