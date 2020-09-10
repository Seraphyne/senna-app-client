#  Senna
By Renata D.

## The Project

_Senna_ is an app for learning Portuguese using the flashcard system and spaced repetition. It can be accessed in any browser, data is stored in a single file and there is no level of difficulty. You need to have an account in order to access the app. Once that is done, you can check your Dashboard daily and see your progress. Each word displayed will show how many times that word was guessed correctly and incorrectly.

## Links

* Live: [Senna App](https://thirsty-roentgen-7f7f2e.netlify.app/)
* Heroku: [API](https://capstone-spaced-repetition.herokuapp.com/)
* Senna Server: [GitHub](https://github.com/Seraphyne/spaced-repetition-capstone-server)

## Technology Used

Front-End: _ReactJS | CSS_

Back-End: _NodeJS | ExpressJS_

## API Documentation

| Method | Path               | Purpose                                                        |
| ------ | ------------------ | -------------------------------------------------------------- |
| POST   | /api/user          | Register a new user                                            |
| GET    | /api/language      | Get all the words the user is learning                         |
| GET    | /api/language/head | Get the guesses the user made                                  |
| POST   | /api/language/guess| Registers the guess the user made                              |
| POST   | /api/auth          | Checks the authorization                                       |
| POST   | /api/auth/token    | Checks for validation on username & password                   |

## Screenshots

![Register](/src/img/register.jpg "Landing Page | Register.")
![Login](/src/img/login.jpg "Login.")
![Welcome](/src/img/welcome.jpg "Welcome page for logged in user.") 
![Learning Words](/src/img/words.jpg "Displaying a specific word to translate.")

## Scripts

* Start the application `npm run` to see all the commands.

# Contact

* Renata D.: [LinkedIn](https://www.linkedin.com/in/renatafd/?locale=en_US)