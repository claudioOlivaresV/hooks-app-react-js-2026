import { describe, expect, test } from "vitest";
import { heroApi } from "./hero.api";

describe("Hero API", () => {
  test("should be configured pointing to the testing server", async () => {
    console.log(heroApi.defaults.baseURL);
    expect(heroApi.defaults.baseURL).toContain("3001");

    // Test implementation
  });
});
