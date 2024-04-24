# SmartForest: A Smart Home Project :house: :leaves:

<p align="center">
  <img src="https://github.com/MarcoBendinelli/SmartForest-for-Sustainable-Living/assets/79930488/bd5d7294-26cc-4471-837d-82397a7b0073" alt="image" style="width: 30%;">
</p>

Smart Forest is a collaborative project developed by **Politecnico di Milano** and the energy provider **Edison**. The project aims to develop an application for an **interactive mirror** helping users to easily monitor their energy consumption and encourages them to use renewable energy sources.

The mirror displays an **interactive forest**, where users can earn leaves for using renewable energy and lose experience points, which is the lifespan of each tree, for using non-renewable energy. These leaves can then be used to purchase, plant, and upgrade trees in order to gain more and more leaves.

The mirror also provides real-time feedback and personalized recommendations for reducing energy consumption. Overall, Smart Forest hopes to engage users in an interactive and fun way to promote **sustainable energy practices** and raise awareness about the importance of renewable energy.

For a project overview, click [here](doc/Presentation.pdf). For the full documentation, click [here](doc/Design_Tech.pdf).

## Video Presentation

https://github.com/MarcoBendinelli/Advanced-User-Interfaces-SmartForest/assets/79930488/7173a529-fc7a-4eeb-805a-1a1764591a24

## Team members
| First name    | Last Name   | Email address                     |
| ----------    | ---------   | ------------------------------    |
| Marco      | Bendinelli  | [@MarcoBendinelli](https://github.com/MarcoBendinelli)     |
| Matteo      | Beltrante  | [@Beltrante](https://github.com/Beltrante)     |
| Luca          | Incarbone   | [@lucaincarbone](https://github.com/lucaincarbone)     |
| Lorenzo      | Poretti  | [@lap98](https://github.com/lap98)     |
| Francesco      | Piferi  | [@francescopiferi99](https://github.com/francescopiferi99)     |

## Technology Overview

SmartForest is a home automation system integrated into **MagicMirror2**, which serves as a smart display. MagicMirror2 comes with a built-in _microphone_ and _speaker_ for voice commands to SmartForest, and is powered by a Raspberry Pi. To use SmartForest, the home must have photovoltaic panels and batteries installed to generate and store electricity. SmartForest aims to make users aware of their energy consumption, helping them reduce their carbon footprint and energy costs.

The system is a **web application** built with **Vue.js** and **Nuxt** frameworks. Vue.js allows for flexible and simple user interface creation, while Nuxt provides additional features for server-side operations, resulting in a responsive user interface even on less powerful Raspberry Pi devices.

For the **conversational agent**, **DialogFlow** was chosen for its simplicity and scalability. DialogFlow uses intents to map user requests to appropriate actions. **Flora**, the conversational agent in SmartForest, has three main categories of intents: advice (providing information and suggestions to encourage responsible behavior), forest management (handling tasks related to forest management), and guide (providing information about mirror usability, such as tutorials).

## Front-End Overview

<p align="center">
  <img src="https://github.com/MarcoBendinelli/SmartForest-for-Sustainable-Living/assets/79930488/23b7bfcf-41b0-457a-995d-e0c1c9ab1d0b" alt="image" style="width: 60%;">
</p>

<p align="center" style="text-align:center;">The Forest mirrors user behavior to illustrate how even small actions can make a difference!</p>

<p align="center">
  <img src="https://github.com/MarcoBendinelli/SmartForest-for-Sustainable-Living/assets/79930488/cccc5120-1380-4f1b-aacc-16ba20ff944d" alt="image" style="width: 30%;">
</p>

## How to start the application
Go to the project folder
```bash
cd smartforest
```
Run the application
```bash
npm run dev
```
To install the correct dependencies, see the [README](smartforest/README.md) inside the smartforest folder.
