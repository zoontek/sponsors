import { defineConfig, presets } from "sponsorkit";

export default defineConfig({
  github: {
    login: "zoontek",
    type: "user",
  },

  // Rendering configs
  width: 800,
  formats: ["svg"],

  tiers: [
    {
      title: "Backers",
      preset: presets.base,
    },
    {
      title: "Bronze sponsors",
      monthlyDollars: 10,
      preset: presets.medium,
    },
    {
      title: "Silver sponsors",
      monthlyDollars: 30,
      preset: presets.large,
    },
    {
      title: "Gold sponsors",
      monthlyDollars: 100,
      preset: presets.xl,
    },
  ],
});
