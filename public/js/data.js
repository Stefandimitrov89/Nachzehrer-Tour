import * as requester from 'requester';

export function getUsers() {
  // Add authentication
  return requester.get('api/users');
}

// export function getCookies() {
//   return requester.get('api/cookies');
// }

export function login(username, passHash) {
  const body = {
    username,
    passHash
  };

  return requester.put('api/auth', body);
}

export function register(username, passHash) {
  const body = {
    username,
    passHash
  };

  return requester.post('api/users', body);
}

export function getServices() {
  return JSON.parse(`{
	  "hotels": [
      {
        "name": "Europe",
        "stars": "4",
        "price": "60.00",
        "userRatings": "7.8/10",
        "extras": {
          "wifi": "no",
          "newspaper": "no",
          "breakfast": "no"
        }
      },
      {
        "name": "Art Òtel",
        "stars": "5",
        "price": "110",
        "userRatings": "9.9/10",
        "extras": {
          "wifi": "yes",
          "newspaper": "yes",
          "breakfast": "yes"
        }
		  }]
    }`);
}


export function getHotels() {
  return JSON.parse(`{
	  "hotels": [
      {
        "name": "Europe",
        "stars": "4",
        "price": "60.00",
        "userRatings": "7.8/10",
        "extras": {
          "wifi": "no",
          "newspaper": "no",
          "breakfast": "no"
        }
      },
      {
        "name": "Art Òtel",
        "stars": "5",
        "price": "110",
        "userRatings": "9.9/10",
        "extras": {
          "wifi": "yes",
          "newspaper": "yes",
          "breakfast": "yes"
        }
		  }]
    }`);
}


export function getHuds() {
  return JSON.parse(`{
	  "huts":[{
			"name": "hija Rila",
			"stars": "5",
			"price": "10",
			"userRatings": "10/10",
			"extras": {
        "wifi": "yes",
        "stove": "yes",
        "warm water": "yes"
      },
      "beds": "10",
      "guests": "20"
    },
    {
			"name": "Belite Brezi",
			"stars": "2",
			"price": "100",
			"userRatings": "2/10",
			"extras": {
        "wifi": "no",
        "stove": "yes",
        "warm water": "no"
      }
    }]
    }`);
}

export function getCruises() {
  return JSON.parse(`{
	  "cruise": [{
			"nameOfShip": "Royal Caribbean International",
			"stars": "5",
			"price": "500",
			"userRatings": "10/10",
			"extras": {
        "wifi": "yes",
        "newspaper": "yes",
        "breakfast": "yes",
        "pool": "yes"
      },
      "route": "Varna-Atina"
		},
		{
			"nameOfShip": "Disney Cruise Line",
			"stars": "4",
			"price": "250",
			"userRatings": "5/10",
			"extras": {
        "wifi": "no",
        "newspaper": "yes",
        "breakfast": "yes",
        "pool": "yes"
      }
		}]
    }`);
}


export function BMBRooms() {
  return JSON.parse(`{
	  "bmb-room": [{
			"name": "Pri Pesho",
			"stars": "5",
			"price": "10",
			"userRatings": "10/10",
			"extras": {
        "wifi": "yes",
        "newspaper": "yes",
        "breakfast": "yes",
        "petsAllowed": "yes"
      }
    },
    {
			"name": "Pri Gosho",
			"stars": "2",
			"price": "100",
			"userRatings": "2/10",
			"extras": {
        "wifi": "no",
        "newspaper": "no",
        "breakfast": "no",
        "petsAllowed": "yes"
      }
    }]
    }`);
}