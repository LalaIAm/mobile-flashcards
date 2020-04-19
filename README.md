<h1 align="center">Welcome to Card Flasher 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/npm-%5E6.14.4-blue.svg" />
  <img src="https://img.shields.io/badge/node-12.16.2-blue.svg" />
  <a href="https://github.com/LalaIAm/mobile-flashcards#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/LalaIAm/mobile-flashcards/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/LalaIAm/mobile-flashcards/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/LalaIAm/Card Flasher" />
  </a>
</p>

> A flashcards app built with React Native

### 🏠 [Homepage](https://github.com/LalaIAm/mobile-flashcards#readme)

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisits)
  - [Installation](#installation)
- [Usage](#usage)
    - [Navigating the App](#navigating-the-app)
    - [The Deck Screen](#the-deck-list-screen)
    - [Adding New Decks and Cards](#adding-new-decks-and-cards)
    - [Reviewing a Deck](#reviewing-a-deck)
    - [Setting Notifications](#setting-notifications)
- [Issues](#issues)
- [Contributing](#contributing)
- [Author](#author)
- [License](#license)
- [Acknowledgments](#acknowledgments)

# About the Project

Card Flasher is a mobile app built with react native. It allows the user to create custom sets or decks of flashcards, and then quiz themselves on the answers. The user can record whether they were correct or incorrect, and at the end of the deck their score is displayed.

Users are able to create new custom decks and add their own cards to suit their needs.

The app has been tested in an android emulator and in an iPhone device. Please refer to the [Contributing](#contributing) section for any fixes or found bugs.

### Built With

- [React Native](#https://reactnative.dev/)
- [Expo](#https://expo.io/)
- [Node.js](#https://nodejs.org/en/)

# Getting Started

## Prerequisites

- npm ^6.14.4
- node 12.16.2

## Install

Begin by cloning this git repository by typing into your terminal: 

    $git clone https://github.com/LalaIAm/mobile-flashcards.git 

After downloading the source files, open your terminal in the project's root directory and type 

```sh
npm install
```

## Usage

```sh
npm run start
```

### Navigating the App

#### The Deck Screen

After starting the app, you will find yourself at the deck list screen or home screen. It displays a list of your decks, and dummy data if the user has no decks of their own.

On the bottom of the Home Screen, you will find a row of navigation tabs. They are:

 - Home
 - Add Deck
 - Settings

When in the Home screen or Deck List screen, the user can navigate to each one of their decks by clicking or pressing on it. It will bring them to the deck list screen, which displays the number of cards or questions in the deck, and gives the user the option to add a new card or to start a quiz.

#### Adding New Decks and Cards

##### Cards

From the Deck Details screen, users can click on the New Card button. This will bring them to a screen with a form to fill in the question or "Front" of their flashcard, and the "Back" or flashcard answer. Pressing the "save" button will add the card to their deck.

The user can add as many cards as they would like to their deck. When they are finished adding cards, they can click "done" and will be brought back to the deck details screen.

##### Decks

Clicking the New Deck tab will bring users to the Add Deck screen. Creating a new deck is as easy as typing in a title and pressing save. After saving their deck, users will end up on the new deck's details screen.

#### Reviewing a Deck

After choosing a deck, users can start their quiz or review by pressing the Start Review button.

Each card in the deck is presented to the user one at a time, front side up. The user can then guess what the correct answer to the question that is written on the "Front" of the card and then tap the card to flip it over to the back.

On the back of the card the user can see the answer. They can then select between two buttons, correct or incorrect, depending upon their answer. After choosing correct or incorrect, they will be brought to the next card in the deck.

##### Scores

After reaching the last card in the deck, the user will be presented with their score or percentage of questions they answered correctly. They can then choose to either restart the quiz or return to the Deck List screen.

#### Setting Notifications

In the settings screen users can choose a time to get a notification and remind them to study their flashcards. If they haven't yet quized themselves on a deck that day, the will receive a notification.

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/LalaIAm/mobile-flashcards/issues). You can also take a look at the [contributing guide](#https://github.com/LalaIAm/mobile-flashcards/issues).

## Author

👤 **Lauren Thorud**

* Website: https://linkedin.com/in/laurenthorud
* Github: [@LalaIAm](https://github.com/LalaIAm)


## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Lauren Thorud](https://github.com/LalaIAm).<br />
This project is [MIT](https://github.com/LalaIAm/mobile-flashcards/blob/master/LICENSE) licensed.

## Acknowledgments

- [Expo](#https://expo.io/)
- [React Native Paper](#https://reactnativepaper.com/)
- [React Native Card Flip](#https://github.com/lhandel/react-native-card-flip)