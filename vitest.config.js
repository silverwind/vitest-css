import {defineConfig} from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    include: ["**/?(*.)test.?(c|m)[jt]s?(x)"],
    testTimeout: 30000,
    threads: false, // https://github.com/vitest-dev/vitest/issues/2008
    cache: false, // https://github.com/vitest-dev/vitest/issues/2008
    open: false,
    allowOnly: true,
    passWithNoTests: true,
    globals: true,
    watch: false,
  },
});
