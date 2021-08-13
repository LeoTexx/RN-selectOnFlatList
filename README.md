# React Native Contacts List

React Native app that has two flatLists:

-The first one is a horizontal list containing the images of the contacts

-The second being a vertical list containing the contact info

The contacts info are the following:

- Name
- Role
- Description (in this case is just an old Lorem Ipsum)

Both lists are connected by a single context, which shares the information about which contact is selected.
In the Pictures List, the selected contact receives a blue border, and in the Info List, the whole description gets blue

When you select a new contact, it will be focused and centralized in all lists, so you will know the picture and the description of the user

Here it follows a short video showing off the app:

![ezgif com-gif-maker](https://user-images.githubusercontent.com/56630468/129404425-cdbc2932-24aa-46bd-9cc8-38e4eb84f599.gif)



(The gif flicks because of the emulator, sorry for that)

## Installation

Clone the repository and install its dependencies:

```
git clone https://github.com/LeoTexx/RN-selectOnFlatList
yarn
//or
npm i
```

## Usage

To run our app, you will need to have an emulator or connect on your  device, and then just run:

```
{
  react-native run-android
  //or
  react-native run-ios
}
```


Feel free to clone and change what would better fit your needs, hope it helps😉

## Observations
I've tried to connect both lists setting the index into our context when viewable items changed. You can see the functions I've written in the file InfoList.tsx, but I was constantly getting memory leaks, and the app started crashing. To avoid it, I didn't add this feature.

## Testing
You can easily run tests using the following command:
```
yarn test
//or
npm run test
```

It's harder for me to run tests on Frontend/Mobile than in Backend, mainly because of contexts/redux. In any case, I would like suggestions of tests to do or better implementations of it


