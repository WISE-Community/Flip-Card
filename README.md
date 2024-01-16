# Flip-Card
Simple activity to simulate the flip-up panels in interactive exhibits or quiz shows that reveal info

# Input cards via the URL GET parameter
Add ```cards``` GET param with stringified JSON array, like this: 
```
http://..../flip-card/index.html?cards=[{"front":"front1","back":"back1"},{"front":"front2","back":"back2"}]
```
