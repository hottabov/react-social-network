const state = {
  chatsPage: {
    participantsData: [
      {id: 1, name: "Dima"},
      {id: 2, name: "Nick"},
      {id: 3, name: "Alabama Home"},
      {id: 4, name: "Disney Pasha"},
      {id: 5, name: "Killer Wolfs"},
      {id: 6, name: "Martin"},
      {id: 7, name: "Greg"},
      {id: 8, name: "Alina"},
    ],
    messagesData: [
      {id: 1, message: "How are you?"},
      {id: 2, message: "Do you wanna chicken-chicken?"},
      {id: 3, message: "This is cool, man!"},
      {id: 4, message: "Your dog is bullshit"},
      {id: 5, message: "ITS SIMPLE DOODE"},
      {id: 6, message: "Never call me! I hate morning's calls"},
    ]
  },
  profilePage: {
    postData: [
      {
        id: 1,
        message: "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
        likes: 13
      },
      {
        id: 2,
        message: "The way to get started is to quit talking and begin doing. -Walt Disney",
        likes: 33},
      {
        id: 3,
        message: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs",
        likes: 21
      },
      {
        id: 4,
        message: "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt",
        likes: 40
      },
      {
        id: 5,
        message: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey\n",
        likes: 2
      },
      {
        id: 6,
        message: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
        likes: 28
      },
      {
        id: 7,
        message: "Life is what happens when you're busy making other plans. -John Lennon",
        likes: 19
      },
    ],
  },

}

export default state;



export const addPostToState = (postMessage) => {

  let newPost = {
    id: 121,
    message: postMessage,
    likes: 0
  }

  state.profilePage.postData.push(newPost);
}

