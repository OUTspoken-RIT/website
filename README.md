# OUTspoken Website

The webpages are automatically loaded into CampusGroups. Pages edited here will automatically update in CampusGroups. 

## Contents
- [Structure](#structure)
  - [Pages](#pages)
  - [Components](#components)
  - [Styles](#styles)
  - [Utils](#utils)
- [Component Catalog](#component-catalog)
  - [Typography](#typography)
  - [Buttons](#buttons)
  - [Containers](#containers)
  - [Assets](#assets)

## Structure

The repo is split into 4 main folders:

```
website
├─ pages
├─ components
├─ styles
└─ utils
```

### Pages

Full pages made up of the premade components.

```
website
└─ pages
    ├─ closet.jsx
    ├─ clubs.jsx
    ├─ index.jsx
    └─ team.jsx
```

These are the page files that are loaded directly into CampusGroups. These pages can be edited by editing these files.

### Components

UI components (buttons, icons, boxes, cards, etc.) that are used to create the webpages.

```
website
└─ components
    ├─ ui
    ├─ layouts
    └─ composite
```

|           |                                                                              |
| --------- | ---------------------------------------------------------------------------- |
| ui        | low-level one-function components like buttons, icons, logos, and containers |
| layouts   | used for organizing objects on the page                                      |
| composite | components made up of many other components (cards, infoboxes, etc)          |

### Styles

The CSS files that control how content is displayed on each page.

```
website
└─ styles
    ├─ variables
    ├─ buttons.css
    ├─ colors.css
    ├─ composite.css
    ├─ containers.css
    ├─ globals.css
    ├─ icons.css
    ├─ layouts.css
    ├─ reset.css
    ├─ type.css
    └─ underline.css
```

|            |                                                                                                |
| ---------- | ---------------------------------------------------------------------------------------------- |
| variables  | sets root variables defining colors, heading styles, margin and padding, underline flags, etc. |
| buttons    | styles for buttons and icon buttons                                                            |
| colors     | styles for controlling the background of containers                                            |
| composite  | styles for composite components                                                                |
| containers | styles for boxes and simple cards                                                              |
| globals    | aggregates all styles and exports them together                                                |
| icons      | styles for icons                                                                               |
| layouts    | styles for layout components                                                                   |
| reset      | reverts styles set by CampusGroups                                                             |
| type       | styles for headings and other text-focused elements                                            |
| underline  | styles for regular and flag underlines                                                         |

### Utils

All the javascript helper code used to create components.

## Component Catalog

For your use, I've gathered all the components together.

- [Typography](#typography)
  - [Heading 1-5](#headings-1-5)
  - [Subheading](#subheading)
  - [Body](#body)
  - [Links](#links)
  - [Underline](#underline)
  - [Speech Bubble](#speech-bubble)
  - [Emphasis Bubble](#emphasis-bubble)
- [Buttons](#buttons)
  - [Link Button](#link-button)
  - [Icon Button](#icon-button)
- [Containers](#containers)
  - [Box](#box)
  - [Dashed Box](#dashed-box)
  - [Fancy Box](#fancy-box)
- [Assets](#assets)
  - [Pride Flags](#pride-flags)
  - [Icons](#icons)
  - [Wordmarks](#wordmarks)
  - [OUTspoken Logos](#outspoken-logos)
  - [Other Logos](#other-logos)

### Typography

Most typography happens in the standard HTML elements, but here are all of them. Typography automaically adjusts size for desktop or mobile devices.

#### Headings 1-5

Use the regular `<h1>`-`<h5>` elements or use the `h1`-`h5` class.

![Heading 1 styles](/.github/media/typography/H1.png)

```html
<!-- regular h1 element -->
<h1>Heading 1</h1>

<!-- or use the h1 class -->
<p className="h1">Heading 1</p>
```

![Heading 2 styles](/.github/media/typography/H2.png)

```html
<!-- regular h2 element -->
<h2>Heading 2</h2>

<!-- or use the h2 class -->
<p className="h2">Heading 2</p>
```

![Heading 3 styles](/.github/media/typography/H3.png)

```html
<!-- regular h3 element -->
<h3>Heading 3</h3>

<!-- or use the h3 class -->
<p className="h3">Heading 3</p>
```

![Heading 4 styles](/.github/media/typography/H4.png)

```html
<!-- regular h4 element -->
<h4>Heading 4</h4>

<!-- or use the h4 class -->
<p className="h4">Heading 4</p>
```

![Heading 5 styles](/.github/media/typography/H5.png)

```html
<!-- regular h5 element -->
<h5>Heading 5</h5>

<!-- or use the h5 class -->
<p className="h5">Heading 5</p>
```

#### Subheading

|           |                                                               |
| --------- | ------------------------------------------------------------- |
| Component | `<Subheading>`                                                |
| Source    | [/ui/type/Typography.jsx](/components/ui/type/Typography.jsx) |

![Subheading styles](/.github/media/typography/Subheading.png)

```html
<Subheading>This is a subheading.</Subheading>
```

#### Body

Is applied to any text not already styled.

![Body styles](/.github/media/typography/Body.png)

```html
<p>queerum ipsum dolor sit amet.</p>
```

#### Links

![Link styles](/.github/media/typography/Link.png)

```html
<!-- regular a element -->
<a>this is a link</a>
```

#### Underline

|           |                                                             |
| --------- | ----------------------------------------------------------- |
| Component | `<Underline>`                                               |
| Source    | [/ui/type/Underline.jsx](/components/ui/type/Underline.jsx) |

![Light underline colors](/.github/media/typography/Underline-Light.png)
![Normal underline colors](/.github/media/typography/Underline-Normal.png)
![Dark underline colors](/.github/media/typography/Underline-Dark.png)

```html
<Underline shade="light" variant="rainbow">This text is underlined.</Underline>
```

#### Speech Bubble

|           |                                                               |
| --------- | ------------------------------------------------------------- |
| Component | `<SpeechBubble>`                                              |
| Source    | [/ui/type/Typography.jsx](/components/ui/type/Typography.jsx) |

![Speech bubble styles](/.github/media/typography/Speech-Bubble.png)

```html
<SpeechBubble tail="down right">This is a speech bubble.</SpeechBubble>
```

#### Emphasis Bubble

|           |                                                               |
| --------- | ------------------------------------------------------------- |
| Component | `<Bubble>`                                                    |
| Source    | [/ui/type/Typography.jsx](/components/ui/type/Typography.jsx) |

![Bubble styles](/.github/media/typography/Bubble.png)

```html
<Bubble>I'm emphasized!</Bubble>
```

### Buttons

These buttons are ready to go! Just plug in the link.

#### Link Button

|           |                                               |
| --------- | --------------------------------------------- |
| Component | `<LinkButton>`                                |
| Source    | [/ui/Buttons.jsx](/components/ui/Buttons.jsx) |

![Button styles](/.github/media/buttons/Link-Button.png)

```html
<LinkButton color="primary" href="/">I'm a button</LinkButton>
```

#### Icon Button

|           |                                               |
| --------- | --------------------------------------------- |
| Component | `<IconButton />`                              |
| Source    | [/ui/Buttons.jsx](/components/ui/Buttons.jsx) |

![Icon button styles](/.github/media/buttons/Icon-Button.png)

```html
<IconButton icon="discord" href="/" />
```

### Containers

Boxes for holding elements!

#### Box

|           |                                                                             |
| --------- | --------------------------------------------------------------------------- |
| Component | `<Box>`                                                                   |
| Source    | [/ui/containers/SimpleBoxes.jsx](/components/ui/containers/SimpleBoxes.jsx) |

![Box styles](/.github/media/containers/Box.png)

```html
<Box color="foam">
  <p>queerum ipsum dolor sit amet.</p>
</Box>
```

#### Dashed Box
| | |
|-|-|
|Component|`<DashedBox>`|
|Source|[/ui/containers/SimpleBoxes.jsx](/components/ui/containers/SimpleBoxes.jsx)|

![Dashed box styles](/.github/media/containers/Dashed-Box.png)

```html
<DashedBox color="foam">
  <p>queerum ipsum dolor sit amet.</p>
</DashedBox>
```

#### Fancy Box
| | |
|-|-|
|Component|`<FancyBox>`|
|Source|[/ui/containers/FancyBox.jsx](/components/ui/containers/FancyBox.jsx)|

![Fancy box styles](/.github/media/containers/Fancy-Box.png)

```html
<FancyBox>
  <FancyBoxHeader>
    <h2>I am the header</h2>
  </FancyBoxHeader>
  <FancyBoxContent>
    <p>I am the content</p>
  </FancyBoxContent>
</FancyBox>
```
### Assets
Every OUTspoken pride flag, logo, icon, and wordmark we've made!

#### Pride Flags
| | |
|-|-|
|Component|`<PrideFlag />`|
|Source|[/ui/assets/flags/Flags.jsx](/components/ui/assets/flags/Flags.jsx)|

![Pride flags](/.github/media/assets/Pride-Flag.png)

```html
<PrideFlag variant="progress" />
```

#### Icons
| | |
|-|-|
|Component|`<BrandIcon />`|
|Source|[/ui/assets/logos/Logos.jsx](/components/ui/assets/logos/Logos.jsx)|

![Icons](/.github/media/assets/Icon.png)

```html
<BrandIcon shape="square" color="rainbow" />
```

#### Wordmarks
| | |
|-|-|
|Component|`<Wordmark />`|
|Source|[/ui/assets/wordmarks/Wordmark.jsx](/components/ui/assets/wordmarks/Wordmark.jsx)|

![Wordmarks](/.github/media/assets/Wordmark.png)

```html
<Wordmark style="lockup" />
```

#### OUTspoken Logos
| | |
|-|-|
|Component|`<Logo />`|
|Source|[/ui/assets/logos/Logos.jsx](/components/ui/assets/logos/Logos.jsx)|

![Outspoken logos](/.github/media/assets/Logo.png)

```html
<Logo weight="solid" color="rainbow" />
```

#### Other Logos
| | |
|-|-|
|Component|`<SecondaryLogo />`|
|Source|[/ui/assets/logos/Logos.jsx](/components/ui/assets/logos/Logos.jsx)|

![Other logos](/.github/media/assets/Secondary-Logo.png)

```html
<SecondaryLogo logo="rainbow-heart" />
```