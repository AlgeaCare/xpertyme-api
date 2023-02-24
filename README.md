# What❓

This is a little package for talking to the expertyme api in typescript

# Why 🤷‍♂️

The point of this lib is to allow consumers to

- have typings for various xpertyme apis
- just consume functions like 'getUsers' and not worry about generating tokens etc
- abstract away all type casting / error handling and all other api related chores

It just makes it easier to talk to the apis from one central code base

# How ⚙️

Just `npm i` you are good to go (if working on this package)

if consuming

`npm i @algea_care/xpertyme-api` and use it in your project like so

```typescript

import const { user } from '@algea_care/xpertyme-api'

const myNewUser = await user.create({email: 'example@example.com', ...})

```

The result of the call and the payload to it will already by typecast etc for you

## Structure

There are not just one but a few places to get data from (apis) so what is exported is an object where each key represents an api that you can talk to.

there is one place that we request access tokens as the tokens work on all apis. That means you need to provide some env vars when using the package (to get the access tokens), see config

# Configuration 🔧

Have a look at env.example but essentially you need to state the api domain, client secret and client id and you are good to go 🚀
