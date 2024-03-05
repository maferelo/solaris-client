describe("Example", () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });

    await device.openURL({
      url: `exp+my-app://expo-development-client/?url=${encodeURIComponent(
        `http://localhost:8081`
      )}&disableOnboarding=1`,
    });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should have welcome screen", async () => {
    await expect(element(by.id("welcome"))).toBeVisible();
  });
});
