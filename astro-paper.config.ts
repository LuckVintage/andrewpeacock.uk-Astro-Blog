import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://andrewpeacock.uk",
    title: "Andrew's Angle",
    description: "Welcome to Andrew's Angle, where I offer my unique perspective and opinions on a wide range of topics. Through my blog, I share insights and stories from my life and experiences, exploring the world through my personal lens. Join me on a journey of discovery and new angles on life through thought-provoking articles and opinion pieces.",
    author: "Andrew Peacock",
    profile: "https://satna.ing",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Europe/London",
    dir: "ltr",
  },
  posts: {
    perPage: 100,
    perIndex: 100,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: false,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/LuckVintage/" },
    { name: "mastodon",   url: "https://social.luckvintage.com/@AndrewPeacock" },
    { name: "bluesky",   url: "https://bsky.app/profile/lu7.io" },
    
  ],
  shareLinks: [
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});