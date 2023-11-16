# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.


## Step 1: Clone the project
first of all you need clone this project using git.
Go to console and choose the  desired folder where you want to deploy the project. 
Write on console the following command:

```bash
git clone https://github.com/Vladoosik/swapiMobile.git
```

Wait until cloning is completed, then proceed to the next step


## Step 2: Install the required modules
In order for the project to run, you need to install the necessary modules; this
can be done by writing the following command in the terminal:

```bash
# using Yarn
yarn install
```
The project uses only the **yarn** package manager, you will need to install it first

## Step 3: Start the Metro Server

Third, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# Project use only yarn
yarn start
```

## Step 4: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
#using only yarn
yarn android
```

### For iOS

```bash
#using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 5: Congratulations, you are amazing

Now you can use the application

There are only 3 screens.
1. The **Main screen** that receives data from the api While data is being received, the skeleton is played and the buttons for interacting with the page do not work, but the "Reset" button works
2. **Favorites screen**. By default it is empty
To add a character to your favorites, return to the main screen using the **bottom navigation**
3. **Details Screen**. To access it, click on any character and more detailed information about him will open. You can also add/remove a character to your favorite list. Well, the author of this application is written below.

## Technologies used:
Typescript, React Navigation Stack/Tabs, Mobx
