let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you', likesCount:  12},
            {id: 2, message: 'It\'s my first post', likesCount:  18},
            {id: 2, message: 'blabla', likesCount:  8}
            ],
    },
    dialogsPage: {
    messages: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},  
    {id: 3, message: 'Yo'},  
    {id: 4, message: 'Hey'},  
    {id: 5, message: 'Hello'},  
    ],      
    dialogs: [
        {id: 1, name: 'Nikita'},
        {id: 2, name: 'Vika'},  
        {id: 3, name: 'Karina'},  
        {id: 4, name: 'Natasha'},  
        {id: 5, name: 'Evgeny'},  
        {id: 6, name: 'Ilya'},  
    ]
    },
    sidebar: {
        friendbar: [
        {id: 1, name: 'Nikita'},
        {id: 2, name: 'Vika'},
        {id: 3, name: 'Karina'},
        ]
    }
}

export default state;