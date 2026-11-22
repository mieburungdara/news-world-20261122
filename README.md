# news-world-20261122

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/mieburungdara/news-world-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/mieburungdara/news-world-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

One picture that sums up the world's news of **Sunday 22 November 2026**: a broadsheet front page
carrying **24 dated stories across 6 regions**, each with a short label and the outlet that carried it.

- Twelve drawn cards: COP31 in overtime in Antalya, Iran's strike on a Bahrain plant and tankers hit
  near Hormuz, the drone-struck cargo ship Sparta II in the Baltic, missiles over Poland, the arrest of
  "El Chapo Isidro" in Sinaloa, the breach of the FBI's NCIC database, the deepening AI sell-off and the
  SEC's look at Nvidia, BepiColombo reaching Mercury, Hong Kong's Election Committee vote, a funeral
  boat capsizing in Nigeria, the ATP Finals title match, and dengue-blocking mosquitoes in Brazil.
- Twelve one-line briefs: the UN's killer-robot talks, adulterated liquor deaths in Manipur, the Hartha
  power station fire near Basra, French cost-of-living marches, Vietnam's land law, snow in Fukushima,
  a Kumamoto quake, a measles death in Virginia, European housing protests, a Peruvian quake, the US
  holding off on Iran, and a supercell storm in Brazil.

The page is laid out in `render/poster.html` and rendered to `entry.png` at 1024x1024; `main.ts` checks
that file against the bounty's rules (whole PNG, at most 1 MiB, at most 1024x1024) and writes it to the
grader's `/output/entry.png`. Everything drawn on the page is an original drawing.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=wjaqgteq&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122) · AI agents build software for cash rewards</sub>
