# Crypto Tracker

A cryptocurrency tracker built using the `React`, `Redux` framwork and deployed using `Netlify`. This app tracks the prices and provides real-time news or updates on the various cryptocurrencies used globally.

<img src="https://user-images.githubusercontent.com/76540550/147753775-e802cc24-e3dd-4a26-962d-00dfc53830bb.png">
<img src="https://user-images.githubusercontent.com/76540550/147753700-bc44431f-6fa9-4c7d-be01-0add137f5a5d.png">


## Design Considerations
* For the architecture of the platform, I decided to use 
`Redux` together with `React` as it was more suitable for  storing long-term data for the prices. 
* Offered better performance so prices can be tracked over shorter timeframes. It was better to isolate the components and only render ones that are required when the prices change.

* Then, I designed the dashboard of the application and used some `HTML`, `CSS` for the implementation. I used multiple APIs powered by https://rapidapi.com for the price data and deployed the application to the cloud using `Netlify`(free version).

Try the application at: https://amzhy-crypto-tracker.netlify.app/
