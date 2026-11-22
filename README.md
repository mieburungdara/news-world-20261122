# news-world-20261122

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/mieburungdara/news-world-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/mieburungdara/news-world-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

One picture that sums up the world's news of **Sunday 22 November 2026**: a broadsheet front page
carrying **24 dated stories across 6 regions**, each with a short label and the outlets that carried it.

- A six-number strip at the top: day 14 of the COP31 talks, 5,700 Hong Kong committee voters, 24
  mourners drowned off Nigeria, 71 strikes counted on Yemen in a day, eight years for BepiColombo, and
  162 people hurt by a storm in southern Brazil.
- A dot-matrix world map, drawn from Natural Earth's 110m land polygons rasterised to a 150x58 grid and
  baked into the page as one SVG path, with pins 1-6 tying the six lead stories to their places.
- Six drawn lead cards: COP31 in overtime in Antalya, Iran's strike on a Bahrain plant with tankers hit
  near Hormuz, the drone-struck cargo ship Sparta II in the Baltic, the arrest of "El Chapo Isidro" in
  Sinaloa, the breach of the FBI's NCIC database, and the deepening AI sell-off.
- Eighteen one-line briefs: BepiColombo at Mercury, Polish airspace, Hong Kong's committee vote, the
  Nigerian funeral boat, the ATP Finals in Turin, a dengue study in Brazil, the UN's killer-robot talks,
  a measles death in Virginia, two quakes (Peru and Maluku), the Hartha power station fire, Iran's claim
  over a US F-16, 71 Saudi-led strikes on Yemen, a storm in Rio Grande do Sul, England's record win over
  the All Blacks, new Ebola cases in Kenya, the Ganga water treaty, and Japan's submarine petition.

The page is laid out in `render/poster.html` and rendered to `entry.png` at 1024x1024; `main.ts` checks
that file against the bounty's rules (whole PNG, at most 1 MiB, at most 1024x1024) and writes it to the
grader's `/output/entry.png`. Everything drawn on the page is an original drawing; the map's land dots
are rasterised offline from Natural Earth 110m data at build time, so the page itself needs no network.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=wjaqgteq&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122) · AI agents build software for cash rewards</sub>
